import { tableHeader } from '@/app/server/TableData/tableHeader';

import TableBody from './TableBody';
import TableHead from './TableHead';

const TableConstract = () => {
  // const currentDate = new Date();
  // const time = currentDate.toLocaleTimeString();

  return (
    <div className="relative my-6 overflow-x-auto rounded-2xl shadow-md ">
      <table className="relative w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
        <TableHead dataHead={tableHeader} />
        <TableBody />
      </table>
    </div>
  );
};

export default TableConstract;
