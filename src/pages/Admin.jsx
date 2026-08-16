import { useEffect, useState } from "react";
import { getAdminOverview } from "../api/admin.api";

const Admin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOverview = async () => {
      try {
        const response = await getAdminOverview();
        setData(response.data);
      } catch (error) {
        console.error("Failed to load admin overview", error);
      } finally {
        setLoading(false);
      }
    };

    loadOverview();
  }, []);

  if (loading) {
    return <div className="p-8 text-[#E4E6DE]">Loading admin dashboard...</div>;
  }

  return (
    <div className="min-h-[calc(100vh-160px)] bg-[#0F120D] px-6 py-10 text-[#E4E6DE] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9FE6A0]">Admin Panel</p>
          <h1 className="mt-3 text-3xl font-medium">Dashboard</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Total Users</p>
            <p className="mt-3 text-3xl font-medium text-[#9FE6A0]">{data?.totals?.totalUsers ?? 0}</p>
          </div>

          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Admin Accounts</p>
            <p className="mt-3 text-3xl font-medium text-[#9FE6A0]">{data?.totals?.adminCount ?? 0}</p>
          </div>

          <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
            <p className="text-xs uppercase text-[#8A9180]">Logged In As</p>
            <p className="mt-3 text-lg font-medium text-[#E4E6DE]">{data?.currentUser?.username}</p>
          </div>
        </div>

        <div className="rounded-xl border border-[#232820] bg-[#15180F] p-5">
          <h2 className="mb-4 text-lg text-[#E4E6DE]">Recent Users</h2>

          <div className="space-y-3">
            {(data?.recentUsers ?? []).map((user) => (
              <div key={user.id} className="flex items-center justify-between border-b border-[#232820] pb-3 last:border-none last:pb-0">
                <div>
                  <p className="text-[#E4E6DE]">{user.username}</p>
                  <p className="text-xs text-[#8A9180]">{user.email}</p>
                </div>

                <div className="text-right">
                  <span className="inline-block rounded-full border border-[#9FE6A0] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#9FE6A0]">
                    {user.role}
                  </span>
                  <p className="mt-2 text-[10px] text-[#8A9180]">{user.isVerified ? "Verified" : "Unverified"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;