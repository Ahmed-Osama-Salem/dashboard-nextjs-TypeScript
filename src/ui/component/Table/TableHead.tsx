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
      <tr>
        {dataHead.map((headers) => {
          return (
            <th key={headers.id} className={headers.classname} scope="col">
              {headers.title}
            </th>
          );
        })}
        {TechHeaders.map((head) => {
          return (
            <th key={head.id} className={head.classname} scope="col">
              {head.title}
            </th>
          );
        })}
        {MosadNumbersHead.map((head) => {
          return (
            <th key={head.id} className={head.classname} scope="col">
              {head.title}
            </th>
          );
        })}
        {MosadHeaders.map((head) => {
          return (
            <th key={head.id} className={head.classname} scope="col">
              {head.title}
            </th>
          );
        })}
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
