import DashboardEarningRow from "../components/DashboardEarningRow";
import DashboardBarGraph from "../components/DashboardBarGraph";
import DashboardInformationRow from "../components/DashboardInformationRow";
import MyPieChart from "../components/DashboardPieChart";
import { buildUrl, formatAmount } from "../lib/helperFunctions";
import { useContext } from "react";
import { APIContext } from "../context/ApiContext";
import { fetchData } from "../lib/client";
import TableCard from "../components/TableCard";

const Dashboard = ({students,sections,transactionSucess, admins,transactionType}) => {
 
console.log(transactionSucess,transactionType)
const PieChartData = {
  labels: ["Online", "Cash", "Cheque"],
  datasets: [
    {
      data: [transactionType?.onlinePercentage, transactionType?.cashPercentage, transactionType?.chequePercentage],
      backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const FirstRowData = [
  {
    title: 'Collection till date',
    balance: '₹'+ formatAmount(transactionSucess?.totalAmount),
    defaultersPercentage: '10%',
    icon1: '/group-10.svg',
    arrow: '/arrowup-11.svg',
  },
  {
    title: 'Balance',
    balance: '₹2.4L',
    icon1: '/group-101.svg',
  },
  {
    title: 'Defaulters',
    balance: '11',
    from: '/1049 Students',
    defaultersPercentage: '10%',
    arrow: '/arrowup-1.svg',
    icon1: '/group-102.svg',
    icon2: '/icon.svg',
  },
];

  const informationRowData = [
    {
      icon: '/rectangle-16.svg',
      label: 'Students',
      value: students,
    },
    {
      icon: '/rectangle-16.svg',
      label: 'Sections',
      value: sections?.["12"],
      description: 'in 12 classes',
    },
    {
      icon: '/rectangle-16.svg',
      label: 'Collection this month',
      value: '₹'+ formatAmount(transactionSucess?.totalAmountThisMonth),
    },
    {
      icon: '/rectangle-16.svg',
      label: 'Fine Collected till date',
      value: '₹11.20L',
    },
  ];


  const TableAdmin={title:"Admin",rows: admins?.slice(0, 4).reduce((acc, { access, email_id }) => {
    if (email_id) {
      acc.push([email_id, access]);
    }
    return acc;
  }, []),
  headers : ["Email", "Role"]}
  const TableDisbursals={title:"Disbursals",rows: [["July 11, 2023","₹5,03,123",true],["July 11, 2023","₹5,03,123",true],["July 11, 2023","₹5,03,123",true],["July 11, 2023","₹5,03,123",true]],
  headers : ["Date", "Amount","Status"]}
  return (
    <>
      <DashboardEarningRow data={FirstRowData}/>
      <DashboardInformationRow dashboardData={informationRowData} />
      <DashboardBarGraph />
      <MyPieChart data={PieChartData} />
      <TableCard title={ TableAdmin.title} rows={TableAdmin.rows} data={TableAdmin.headers} width="350px" height="250px" left="0px"/>
      <TableCard title={ TableDisbursals.title} rows={TableDisbursals.rows} data={TableDisbursals.headers} width="490px" height="250px" left="420px" />
    </>
  );
};


export async function getServerSideProps() {
  const students= await fetchData(`/api/students`,"Get",null)
  const sections= await fetchData(`/api/sections/countClasses`,"Get",null)
  const transactionSucess= await fetchData(`/api/transactions/success`,"Get")
  const fines= await fetchData(`/api/invoices/fines`,"Get")
  const transactionType= await fetchData(`/api/transactions/successBreakdownPercentage`,"Get")
  const admins= await fetchData(`/api/admins`,"Get")
  return {
    props: {
      students: students.count||null,
      sections:sections.body,
      transactionSucess,
      fines,
      transactionType,
      admins:admins.body
    },
  };
}
export default Dashboard;
