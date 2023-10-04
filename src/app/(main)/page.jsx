"use client";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import PageHeading from "@/components/PageHeading";
import Widget from "@/components/widget/Widget";
// import TotalSpent from "@/components/widget/TotalSpent";
// import WeeklyRevenue from "@/components/widget/WeeklyRevenue";

const Dashboard = () => {
  return (
    <section className="text-blue-800">
      <PageHeading heading={"Dashboard"} />

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"Rs340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Earning this month"}
          subtitle={"Rs42.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"Rs574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"Rs1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sold"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Products"}
          subtitle={"523"}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* <TotalSpent />
        <WeeklyRevenue /> */}
      </div>
    </section>
  );
};

export default Dashboard;
