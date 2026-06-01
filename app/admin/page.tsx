import StatsCard from "@/components/admin/dashboard/StatsCard";
import DashboardChart from "@/components/admin/dashboard/DashboardChart";
import RecentOrders from "@/components/admin/dashboard/RecentOrders";

export default function AdminHome() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Carthalya Admin
        </h1>
        <p className="text-gray-500 text-sm">
          Overview of your fragrance & shop system
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Ingredients" value="120" />
        <StatsCard title="Orders" value="54" />
        <StatsCard title="Clients" value="32" />
      </div>

      {/* Chart */}
      <DashboardChart />

      {/* Recent */}
      <div className="grid grid-cols-2 gap-4">
        <RecentOrders />
      </div>

    </div>
  );
}