import type { ITableHeader } from '@/app/server/TableData/tableHeader';

const TableHead = ({ dataHead }: { dataHead: ITableHeader[] }) => {
  return (
    <thead className=" rounded-xl bg-gray-300/40 text-xs uppercase text-gray-700 dark:bg-red-700 dark:text-gray-400">
      <tr className="">
        {dataHead.map((headers) => {
          return (
            <th key={headers.id} className={headers.classname} scope="row">
              {headers.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
