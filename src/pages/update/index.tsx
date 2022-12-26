import { useSelector } from 'react-redux';

import type { RootState } from '@/app/redux/store/store';

const UpdatePage = () => {
  const { cellData } = useSelector((state: RootState) => state.tableData);
  console.log(cellData, 'route');

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <input
        className="my-2 h-[40px] w-[100%] rounded-lg border-none bg-[#ece5e5] p-2 text-right outline-1 outline-red-600 transition-all duration-300 ease-linear focus:translate-y-[-4px] focus:shadow-lg focus:shadow-black/40 dark:bg-black/30 dark:outline-white"
        type="text"
        value={cellData.allText.elbnd}
      />
    </div>
  );
};

export default UpdatePage;
