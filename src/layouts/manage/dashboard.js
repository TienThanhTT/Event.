import Sidebar from "./components/sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-2">
        <Sidebar />
      </div>
      <div className=" col-span-10">hello world</div>
    </div>
  );
};
export default Dashboard;
