import { useEffect, useState } from "react";
import {
  banUser,
  getAdminArticles,
  getAdminOverview,
  getAdminUsers,
  unbanUser,
} from "../api/admin.api";
import api from "../api/axiosClient";

const Admin = () => {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [overviewRes, usersRes, articlesRes] = await Promise.all([
        getAdminOverview(),
        getAdminUsers(),
        getAdminArticles(),
      ]);

      setData(overviewRes.data);
      setUsers(usersRes.users || []);
      setArticles(articlesRes.articles || []);
    } catch (error) {
      console.error("Failed to load admin data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleBanToggle = async (userId, isBanned) => {
    try {
      if (isBanned) {
        await unbanUser(userId);
      } else {
        await banUser(userId, "Admin action");
      }

      await loadData();
    } catch (error) {
      console.error("Failed to update user ban state", error);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    const ok = window.confirm("Delete this article?");
    if (!ok) return;

    try {
      await api.delete(`/articles/${articleId}`);
      await loadData();
    } catch (error) {
      console.error("Failed to delete article", error);
    }
  };

  if (loading) {
    return <div className="p-8 text-[#E4E6DE]">Loading admin dashboard...</div>;
  }

  return (
    <div className="min-h-[calc(100vh-160px)] bg-[#0F120D] px-6 py-10 text-[#E4E6DE] font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9FE6A0]">Admin Panel</p>
          <h1 className="mt-3 text-3xl font-medium">Dashboard</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Total Users</p>
            <p className="mt-3 text-3xl font-medium text-[#9FE6A0]">{data?.totals?.totalUsers ?? 0}</p>
          </div>

          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Admin Accounts</p>
            <p className="mt-3 text-3xl font-medium text-[#9FE6A0]">{data?.totals?.adminCount ?? 0}</p>
          </div>

          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Banned Users</p>
            <p className="mt-3 text-3xl font-medium text-[#9FE6A0]">{data?.totals?.bannedCount ?? 0}</p>
          </div>

          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Logged In As</p>
            <p className="mt-3 text-lg font-medium text-[#E4E6DE]">{data?.currentUser?.username}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <h2 className="mb-4 text-lg text-[#E4E6DE]">Users</h2>

            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b border-[#232820] pb-3 last:border-none last:pb-0 gap-3">
                  <div>
                    <p className="text-[#E4E6DE]">{user.username}</p>
                    <p className="text-xs text-[#8A9180]">{user.email}</p>
                    <p className="text-[10px] text-[#8A9180] mt-1">
                      {user.role} · {user.isVerified ? "verified" : "unverified"}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBanToggle(user.id, user.isBanned)}
                    className={`px-3 py-2 text-xs rounded ${
                      user.isBanned
                        ? "bg-[#9FE6A0] text-[#0D0F0C]"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {user.isBanned ? "Unban" : "Ban"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <h2 className="mb-4 text-lg text-[#E4E6DE]">Articles</h2>

            <div className="space-y-3">
              {articles.map((article) => (
                <div key={article.id} className="flex items-center justify-between border-b border-[#232820] pb-3 last:border-none last:pb-0 gap-3">
                  <div>
                    <p className="text-[#E4E6DE]">{article.title}</p>
                    <p className="text-xs text-[#8A9180]">By {article.author}</p>
                  </div>

                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    className="bg-red-600 text-white px-3 py-2 text-xs rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;