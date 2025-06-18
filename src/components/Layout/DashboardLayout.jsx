import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-[302px] pt-[69px] min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
