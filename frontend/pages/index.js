import DashboardEarningRow from "../components/DashboardEarningRow";
import DashboardBarGraph from "../components/DashboardBarGraph";
import DashboardInformationRow from "../components/DashboardInformationRow";
import MyPieChart from "../components/DashboardPieChart";

const Dashboard = () => {
  return (
    <>
      <DashboardEarningRow />
      <DashboardInformationRow />
      <DashboardBarGraph />
      <MyPieChart />
    </>
  );
};

export default Dashboard;
