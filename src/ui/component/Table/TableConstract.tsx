import type { ITableApiData } from '@/app/interface/tableApiData';
import { tableHeader } from '@/app/server/TableData/tableHeader';

import TableBody from './TableBody';
import TableHead from './TableHead';

const TableConstract = ({ tabelBody }: { tabelBody: ITableApiData[] }) => {
  // const currentDate = new Date();
  // const time = currentDate.toLocaleTimeString();

  return (
    <div className="relative my-6 overflow-x-auto rounded-2xl shadow-md ">
      <table className="w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
        <TableHead dataHead={tableHeader} />
        <TableBody dataBody={tabelBody} />
      </table>
    </div>
  );
};

export default TableConstract;
