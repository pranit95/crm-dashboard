import { dashBoardData } from "@/src/utils";

const DashboardLayout = () => {
  const { totalUsers, revenue, activeUsers } = dashBoardData;
  return (
    <div className="flex gap-10px justify-around w-full m-[20px] h-[150px]">
      <div className="bg-gray-500 text-white flex items-center justify-center h-full w-1/4 rounded-[4px]">
        Active No. Users: {activeUsers}
      </div>
      <div className="bg-gray-500 text-white flex items-center justify-center h-full w-1/4 rounded-[4px]">
        Total No. Users: {totalUsers}
      </div>
      <div className="bg-gray-500 text-white flex items-center justify-center h-full w-1/4 rounded-[4px]">
        Revenue: {revenue}
      </div>
    </div>
  );
};

export default DashboardLayout;
