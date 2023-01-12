import type { ITableHeader } from '@/app/server/TableData/tableHeader';
import {
  LastHeaders,
  MosadHeaders,
  MosadNumbersHead,
  TechHeaders,
} from '@/app/server/TableData/tableHeader';

const TableHead = ({ dataHead }: { dataHead: ITableHeader[] }) => {
  return (
    <thead className=" rounded-xl bg-gray-300/40 text-xs uppercase text-gray-700 dark:bg-red-700 dark:text-gray-400">
      <tr className="">
        {dataHead.map((headers) => {
          return (
            <th key={headers.id} className={headers.classname} scope="col">
              {headers.title}
            </th>
          );
        })}
        <th
          className="flex translate-y-3 flex-row items-center justify-center"
          scope="col"
        >
          {TechHeaders.map((head) => {
            return (
              <a key={head.id} className={head.classname}>
                {head.title}
              </a>
            );
          })}
        </th>
        {MosadNumbersHead.map((head) => {
          return (
            <th key={head.id} className={head.classname} scope="col">
              {head.title}
            </th>
          );
        })}
        <th
          className="flex translate-y-3 flex-row items-center justify-center"
          scope="col"
        >
          {MosadHeaders.map((head) => {
            return (
              <a key={head.id} className={head.classname}>
                {head.title}
              </a>
            );
          })}
        </th>
        {LastHeaders.map((head) => {
          return (
            <th key={head.id} className={head.classname} scope="col">
              {head.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
