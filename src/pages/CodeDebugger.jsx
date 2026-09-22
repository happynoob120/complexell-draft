import { useEffect, useEffectEvent, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  TbAlertTriangle,
  TbBolt,
  TbBraces,
  TbCheck,
  TbCopy,
  TbEraser,
  TbKey,
  TbKeyboard,
  TbLoader2,
  TbPlayerPlay,
  TbRefresh,
  TbSparkles,
  TbTerminal2,
  TbX,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { diagnoseCode } from "../api/codeDebug.api";
import { getCurrentUser } from "../api/auth.api";
import toast from "../utils/toast";
import "./codeDebugger.css";

const starterCode = `const numbers = [3, 7, 11, 18];
const doubled = numbers.map((number) => number * 2);

console.log("doubled:", doubled);
console.log("total:", doubled.reduce((sum, number) => sum + number, 0));`;

const examples = [
  {
    id: "off-by-one",
    label: "off by one",
    note: "loop walks past the end of the array",
    code: `const scores = [12, 19, 24, 31];

for (let i = 0; i <= scores.length; i++) {
  console.log("score", scores[i].toFixed(1));
}`,
  },
  {
    id: "async-race",
    label: "missing await",
    note: "async values used before they resolve",
    code: `async function loadUser(id) {
  const response = fetch("/api/users/" + id);
  const data = response.json();
  return data.user.name;
}`,
  },
  {
    id: "stale-closure",
    label: "stale closure",
    note: "loop variable shared by every callback",
    code: `const buttons = document.querySelectorAll(".btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log("clicked button", i);
  });
}`,
  },
  {
    id: "null-guard",
    label: "null guard",
    note: "nested object read without a check",
    code: `const order = { id: 41, customer: null, total: 249.5 };

const city = order.customer.address.city.toUpperCase();
console.log("shipping to", city);`,
  },
];

const languages = [
  { value: "javascript", label: "JavaScript", available: true },
  { value: "python", label: "Python", available: false },
  { value: "cpp", label: "C++", available: false },
  { value: "java", label: "Java", available: false },
];

const steps = [
  { title: "paste", body: "Drop in a snippet, a stack trace, or half-finished function." },
  { title: "diagnose", body: "Gemini reads it and lists what is actually breaking, line by line." },
  { title: "ship the fix", body: "Apply the corrected code straight back into the editor." },
];

function CodeDebugger() {
  const pageRef = useRef(null);
  const outputRef = useRef(null);
  const lineNumbersRef = useRef(null);

  const [code, setCode] = useState(starterCode);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState([]);
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [hasEditorError, setHasEditorError] = useState(false);
  const [activeExample, setActiveExample] = useState("");
  const [aiDiagnosis, setAiDiagnosis] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [authPromptOpen, setAuthPromptOpen] = useState(false);
  const [keyPromptOpen, setKeyPromptOpen] = useState(false);
  const [geminiKey, setGeminiKey] = useState("");
  const [keyConnected, setKeyConnected] = useState(() => Boolean(sessionStorage.getItem("complexellGeminiKey")));

  const lines = code.split("\n");
  const isDirty = code.trim() !== starterCode.trim();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".debugger-reveal", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (output.length > 0 && outputRef.current) {
      gsap.fromTo(outputRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
    }
  }, [output]);

  const resetCode = () => {
    setCode(starterCode);
    setOutput([]);
    setStatus("idle");
    setHasEditorError(false);
    setActiveExample("");
    setAiDiagnosis(null);
    setAiError("");
  };

  const loadExample = (example) => {
    setCode(example.code);
    setActiveExample(example.id);
    setOutput([{ type: "info", text: `Loaded "${example.label}" — ${example.note}. Hit debug code to see the fix.` }]);
    setStatus("idle");
    setHasEditorError(false);
    setAiDiagnosis(null);
    setAiError("");
  };

  const clearOutput = () => {
    setOutput([]);
    setAiDiagnosis(null);
    setAiError("");
    setStatus("idle");
    setHasEditorError(false);
  };

  const debugCode = async (apiKey) => {
    if (!code.trim()) {
      setAiError("Paste some code before debugging it.");
      setStatus("error");
      return;
    }

    setAiLoading(true);
    setAiError("");
    setAiDiagnosis(null);
    setOutput([]);
    setStatus("running");
    try {
      const response = await diagnoseCode(code, language, apiKey);
      setAiDiagnosis(response.diagnosis);
      setStatus("success");
      setHasEditorError(response.diagnosis.issues.length > 0);
      toast.success(
        response.diagnosis.issues.length > 0
          ? `Found ${response.diagnosis.issues.length} issue${response.diagnosis.issues.length > 1 ? "s" : ""} — a fix is ready.`
          : "No issues found. Your snippet looks clean."
      );
    } catch (error) {
      const message = error.response?.data?.message || "Gemini diagnosis failed. Check the backend configuration.";
      setAiError(message);
      setStatus("error");
      setHasEditorError(true);
      toast.error(message);
    } finally {
      setAiLoading(false);
    }
  };

  const startDebugging = async () => {
    try {
      await getCurrentUser();
    } catch {
      setAuthPromptOpen(true);
      return;
    }

    const savedKey = sessionStorage.getItem("complexellGeminiKey");
    if (!savedKey) {
      setGeminiKey("");
      setKeyPromptOpen(true);
      return;
    }

    debugCode(savedKey);
  };

  const triggerRun = useEffectEvent(() => {
    startDebugging();
  });

  useEffect(() => {
    const handleKeydown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        triggerRun();
      }

      if (event.key === "Escape") {
        setAuthPromptOpen(false);
        setKeyPromptOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const saveGeminiKeyAndDebug = (event) => {
    event.preventDefault();
    const trimmedKey = geminiKey.trim();
    if (!trimmedKey) return;
    sessionStorage.setItem("complexellGeminiKey", trimmedKey);
    setKeyConnected(true);
    setKeyPromptOpen(false);
    debugCode(trimmedKey);
  };

  const forgetKey = () => {
    sessionStorage.removeItem("complexellGeminiKey");
    setKeyConnected(false);
    setGeminiKey("");
    toast.success("Gemini key removed from this browser session.");
  };

  const applyAiFix = () => {
    if (!aiDiagnosis?.fixedCode) return;
    setCode(aiDiagnosis.fixedCode);
    setAiDiagnosis(null);
    setOutput([{ type: "info", text: "Gemini fix applied. Run the debugger again to verify it." }]);
    setStatus("idle");
    setHasEditorError(false);
  };

  const copyText = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(message);
    } catch {
      toast.error("Clipboard access was blocked by the browser.");
    }
  };

  const copyCode = async () => {
    await copyText(code, "Code copied to clipboard.");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const handleEditorKeydown = (event) => {
    if (event.key !== "Tab") return;
    event.preventDefault();
    const target = event.currentTarget;
    const { selectionStart, selectionEnd } = target;
    const nextCode = `${code.slice(0, selectionStart)}  ${code.slice(selectionEnd)}`;
    setCode(nextCode);
    window.requestAnimationFrame(() => {
      target.selectionStart = selectionStart + 2;
      target.selectionEnd = selectionStart + 2;
    });
  };

  const statusLabel =
    status === "running"
      ? "diagnosing"
      : status === "success"
        ? "complete"
        : status === "error"
          ? "needs attention"
          : "ready";

  const issueCount = aiDiagnosis?.issues?.length ?? 0;

  return (
    <div ref={pageRef} className="code-debugger-page">
      <section className="debugger-hero debugger-reveal">
        <div className="debugger-hero-copy">
          <p className="debugger-kicker"><span className="debugger-pulse" /> ai debugger · workspace 01</p>
          <h1>find the break<br /><em>before it finds you.</em></h1>
          <p className="debugger-intro">
            Paste a snippet, let Gemini read the signal, and walk away with corrected code — no installs, no context switching, no
            six-year-old threads.
          </p>
          <div className="debugger-badges">
            <span><TbSparkles size={14} /> gemini powered</span>
            <span><TbKey size={14} /> key stays in this browser</span>
            <span><TbTerminal2 size={14} /> javascript active</span>
          </div>
        </div>
        <div className="debugger-hero-mark" aria-hidden="true"><span>{"{ }"}</span><small>01</small></div>
      </section>

      <section className="debugger-steps debugger-reveal">
        {steps.map((step, index) => (
          <div className="debugger-step" key={step.title}>
            <span className="debugger-step-index">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </div>
        ))}
      </section>

      <section className="debugger-workspace debugger-reveal">
        <div className="debugger-toolbar">
          <div className="debugger-toolbar-group">
            <span className="debugger-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <TbTerminal2 size={17} />
            <span className="debugger-filename">scratchpad.js</span>
            <span className={`debugger-dot ${isDirty ? "debugger-dot-dirty" : ""}`} />
            <span className="debugger-muted">{isDirty ? "unsaved edits" : "starter file"}</span>
          </div>
          <div className="debugger-toolbar-actions">
            <button type="button" className="debugger-icon-button" onClick={copyCode} title="Copy code">
              {copied ? <TbCheck size={17} /> : <TbCopy size={17} />}
              {copied ? "copied" : "copy"}
            </button>
            <button type="button" className="debugger-icon-button" onClick={resetCode} title="Reset code">
              <TbRefresh size={17} />reset
            </button>
          </div>
        </div>

        <div className="debugger-examples">
          <span className="debugger-examples-label"><TbBolt size={14} /> try a broken snippet</span>
          <div className="debugger-example-chips">
            {examples.map((example) => (
              <button
                key={example.id}
                type="button"
                className={`debugger-chip ${activeExample === example.id ? "debugger-chip-active" : ""}`}
                onClick={() => loadExample(example)}
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>

        <div className="debugger-grid">
          <div className="editor-panel">
            <div className="panel-heading">
              <span className="panel-heading-label"><TbBraces size={19} /> input</span>
              <span className="line-count">{lines.length} lines · {code.length} chars</span>
            </div>
            <div className={`editor-wrap ${hasEditorError ? "editor-has-error" : ""}`}>
              <div ref={lineNumbersRef} className="line-numbers" aria-hidden="true">
                {lines.map((_, index) => (
                  <span className={hasEditorError ? "line-number-error" : ""} key={index}>{String(index + 1).padStart(2, "0")}</span>
                ))}
              </div>
              <textarea
                value={code}
                onChange={(event) => setCode(event.target.value)}
                onKeyDown={handleEditorKeydown}
                onScroll={(event) => {
                  if (lineNumbersRef.current) lineNumbersRef.current.scrollTop = event.currentTarget.scrollTop;
                }}
                spellCheck="false"
                aria-label="Code input"
                placeholder="// paste the code that refuses to behave"
              />
            </div>
          </div>

          <div className="output-panel">
            <div className="panel-heading">
              <span className="panel-heading-label"><TbTerminal2 size={19} /> output</span>
              <span className="panel-heading-status">
                {status !== "idle" && (
                  <button type="button" className="output-clear" onClick={clearOutput} title="Clear output">
                    <TbEraser size={15} /> clear
                  </button>
                )}
                <span className={`status status-${status}`} aria-live="polite"><span />{statusLabel}</span>
              </span>
            </div>
            <div ref={outputRef} className="output-content" aria-busy={aiLoading}>
              {aiLoading && (
                <div className="output-loading">
                  <span><TbLoader2 size={16} className="debugger-spin" /> gemini is reading your code…</span>
                  <i /><i /><i />
                </div>
              )}

              {!aiLoading && output.length === 0 && !aiDiagnosis && !aiError && (
                <div className="empty-output">
                  <span className="empty-output-icon"><TbPlayerPlay size={20} /></span>
                  <strong>nothing diagnosed yet</strong>
                  <ol>
                    <li>paste your snippet on the left</li>
                    <li>press <kbd>ctrl</kbd> + <kbd>↵</kbd> or hit debug code</li>
                    <li>review the issues, then apply the fix</li>
                  </ol>
                </div>
              )}

              {output.map((line, index) => (
                <div className={`output-line output-${line.type}`} key={`${line.text}-${index}`}>
                  <span className="output-symbol">
                    {line.type === "error" ? <TbAlertTriangle /> : line.type === "success" ? <TbCheck /> : ">"}
                  </span>
                  <pre>{line.text}</pre>
                </div>
              ))}

              {aiDiagnosis && (
                <div className="ai-diagnosis">
                  <div className="ai-diagnosis-heading">
                    <div className="ai-diagnosis-title">
                      <strong><TbSparkles size={17} /> fixed code</strong>
                      <span className="ai-diagnosis-meta">
                        <span className="ai-issue-count">{issueCount} issue{issueCount === 1 ? "" : "s"}</span>
                        <span className="ai-confidence">{aiDiagnosis.confidence} confidence</span>
                      </span>
                    </div>
                    <p>{aiDiagnosis.summary}</p>
                  </div>

                  {aiDiagnosis.issues.length > 0 && (
                    <div className="ai-issues">
                      {aiDiagnosis.issues.map((issue, index) => (
                        <div className="ai-issue" key={`${issue.title}-${index}`}>
                          <strong>{issue.title}</strong>
                          <span>{issue.detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="fixed-code-block">
                    <div className="fixed-code-head">
                      <span>scratchpad.fixed.js</span>
                      <button type="button" className="copy-fix-button" onClick={() => copyText(aiDiagnosis.fixedCode, "Fixed code copied.")}>
                        <TbCopy size={15} /> copy
                      </button>
                    </div>
                    <pre className="fixed-code-preview">{aiDiagnosis.fixedCode}</pre>
                  </div>

                  <div className="quick-fix-actions">
                    <button type="button" className="run-button" onClick={applyAiFix}><TbCheck size={16} /> use this fix</button>
                  </div>
                </div>
              )}

              {!aiLoading && aiError && (
                <div className="ai-error"><TbAlertTriangle size={17} />{aiError}</div>
              )}
            </div>
          </div>
        </div>

        <div className="debugger-controls">
          <div className="debugger-controls-left">
            <label className="language-select">
              language
              <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                {languages.map((item) => (
                  <option value={item.value} key={item.value} disabled={!item.available}>
                    {item.label}{item.available ? "" : " (coming soon)"}
                  </option>
                ))}
              </select>
            </label>
            {keyConnected && (
              <button type="button" className="key-chip" onClick={forgetKey} title="Remove the saved Gemini key from this session">
                <TbKey size={14} /> key connected · forget
              </button>
            )}
          </div>
          <div className="run-actions">
            <span className="execution-note"><TbKeyboard size={15} /> ctrl + ↵ to run</span>
            <button type="button" className="run-button" onClick={startDebugging} disabled={aiLoading}>
              {aiLoading ? <TbLoader2 size={18} className="debugger-spin" /> : <TbSparkles size={18} />}
              {aiLoading ? "debugging…" : "debug code"}
            </button>
          </div>
        </div>
      </section>

      <section className="debugger-notes debugger-reveal">
        <span>01 / gemini powered</span>
        <span>02 / corrected code stays in this session</span>
        <span>03 / javascript active</span>
      </section>

      {authPromptOpen && (
        <div className="debugger-modal-backdrop" role="presentation" onClick={() => setAuthPromptOpen(false)}>
          <div
            className="debugger-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-prompt-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={() => setAuthPromptOpen(false)} aria-label="Close">
              <TbX size={18} />
            </button>
            <span className="modal-icon"><TbSparkles size={21} /></span>
            <h2 id="auth-prompt-title">log in to debug</h2>
            <p>Create an account or log in before using the AI debugger — it keeps your session and usage tied to you.</p>
            <div className="modal-actions">
              <Link className="modal-secondary" to="/login">log in</Link>
              <Link className="modal-primary" to="/signup">create account</Link>
            </div>
          </div>
        </div>
      )}

      {keyPromptOpen && (
        <div className="debugger-modal-backdrop" role="presentation" onClick={() => setKeyPromptOpen(false)}>
          <form
            className="debugger-modal"
            onSubmit={saveGeminiKeyAndDebug}
            role="dialog"
            aria-modal="true"
            aria-labelledby="key-prompt-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={() => setKeyPromptOpen(false)} aria-label="Close">
              <TbX size={18} />
            </button>
            <span className="modal-icon"><TbKey size={21} /></span>
            <h2 id="key-prompt-title">connect your Gemini key</h2>
            <p>Your key is sent for this diagnosis only and kept in this browser session. Complexell never stores it.</p>
            <label htmlFor="gemini-key">Gemini API key</label>
            <input
              id="gemini-key"
              type="password"
              value={geminiKey}
              onChange={(event) => setGeminiKey(event.target.value)}
              placeholder="AIza..."
              autoFocus
              required
            />
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer">
              get a Gemini key from Google AI Studio
            </a>
            <div className="modal-actions">
              <button type="button" className="modal-secondary" onClick={() => setKeyPromptOpen(false)}>cancel</button>
              <button type="submit" className="modal-primary">save and debug</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CodeDebugger;
