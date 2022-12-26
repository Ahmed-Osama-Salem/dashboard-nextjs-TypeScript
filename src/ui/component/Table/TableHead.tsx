import { useState } from 'react';
import { FaSortUp } from 'react-icons/fa';

import type { RootState } from '@/app/redux/store/store';
import { useSelector } from '@/app/redux/store/store';
import type { ITableHeader } from '@/app/server/TableData/tableHeader';
import {
  LastHeaders,
  MosadHeaders,
  MosadNumbersHead,
  TechHeaders,
} from '@/app/server/TableData/tableHeader';

const TableHead = ({ dataHead }: { dataHead: ITableHeader[] }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { table } = useSelector((state: RootState) => state.tableData);
  const handelSortTable = () => {
    setIsClicked(!isClicked);
    const sortTable = [...table].sort((a, b) =>
      a.allText.techNumber < b.allText.techNumber ? -1 : 1
    );
    return sortTable.map((s) => console.log(s.allText.techNumber));
  };
  return (
    <thead className=" rounded-xl bg-gray-300/40 text-xs uppercase text-gray-700 dark:bg-red-700 dark:text-gray-400">
      <tr className="">
        {dataHead.map((headers) => {
          return (
            <th key={headers.id} className={headers.classname} scope="col">
              <span className="flex -translate-x-6 translate-y-6  ">
                <FaSortUp
                  onClick={handelSortTable}
                  className={
                    isClicked
                      ? 'inline rotate-180 cursor-pointer transition-all duration-300 ease-linear'
                      : 'inline rotate-0 cursor-pointer transition-all duration-300 ease-linear'
                  }
                />
              </span>
              {headers.title}
            </th>
          );
        })}
        <th
          className="flex translate-y-6 flex-row items-center justify-center"
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
              <span className="flex -translate-x-6 translate-y-6  ">
                <FaSortUp className="inline cursor-pointer" />
              </span>
              {head.title}
            </th>
          );
        })}
        <th
          className="flex translate-y-6 flex-row items-center justify-center"
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
              <span className="flex -translate-x-6 translate-y-6  ">
                <FaSortUp className="inline cursor-pointer" />
              </span>
              {head.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
