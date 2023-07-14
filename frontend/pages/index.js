import DashboardEarningRow from "../components/DashboardEarningRow";
import DashboardBarGraph from "../components/DashboardBarGraph";
import DashboardInformationRow from "../components/DashboardInformationRow";

const Dashboard = () => {
  return (
    <>
      <DashboardEarningRow />
      <DashboardInformationRow />
      <DashboardBarGraph />
    </>
  );
};

export default Dashboard;
