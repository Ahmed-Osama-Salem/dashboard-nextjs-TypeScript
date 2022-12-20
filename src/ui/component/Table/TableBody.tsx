/* eslint-disable no-underscore-dangle */
import type {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import { useSelector } from 'react-redux';

import type { ITableApiData } from '@/app/interface/tableApiData';
import { removeCellTable } from '@/app/redux/store/slice/tableDataSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch } from '@/app/redux/store/store';

const TableBody = () => {
  const tableData = useSelector((state: RootState) => state.tableData.table);
  const dispatch = useDispatch();
  const handelRemoveCell = (id: string) => {
    // dispatch(
    //   setTableData(
    //     tableData.filter((_item: ITableApiData, i: number) => {
    //       console.log(_item);
    //       return i !== id;
    //     })
    //   )
    // );
    dispatch(removeCellTable(id));
  };

  return (
    <tbody className="">
      {tableData.map((item: ITableApiData, i: number) => {
        return (
          <tr
            key={item._id}
            className="border-b bg-white text-center text-[1.1rem] text-gray-600 hover:bg-gray-50 hover:transition-transform hover:duration-75 hover:ease-in-out dark:border-gray-700 dark:bg-light-gray dark:hover:bg-gray-800"
          >
            <td scope="col" className="py-4 px-24">
              {i + 1}
            </td>
            <td className="py-4 px-24">{item.allText.dateNow}</td>
            <td className="py-4 px-24">{item.time}</td>
            <td className="py-4 px-24">{item.allText.rkmElw7da}</td>
            <td className="py-4 px-24">{item.allText.elbnd}</td>
            <td className="py-4 px-24">{item.allText.topics}</td>
            <td className="py-4 px-24">{item.allText.contractType}</td>
            <td className="py-4 px-24">{item.allText.techNumber}</td>

            {item.text.map(
              (t: {
                text1:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                text2:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => {
                return (
                  // <ul key={i} className="w-full">
                  <>
                    <td className="py-4 px-24 text-center">{t.text1}</td>
                    <td className="py-4 px-24 text-center">{t.text2}</td>
                  </>

                  // </ul>
                );
              }
            )}
            <td className="py-4 px-24 text-center">
              {item.allText.mosadNumber}
            </td>
            {item.textMosad.map(
              (m: {
                mosadName:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                mosadJob:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => {
                return (
                  <>
                    <td className="py-4 px-24 text-center">{m.mosadName}</td>
                    <td className="py-4 px-24 text-center">{m.mosadJob}</td>
                  </>
                );
              }
            )}

            <td className="py-4 px-24">{item.allText.from}</td>
            <td className="py-4 px-24">{item.allText.to}</td>
            <td className="py-4 px-24">
              {/* {`${subtractTimes(
            item.allText.from,
            item.allText.to
          )}:${subtractMin(item.allText.from, item.allText.to)}`} */}
              fr2 el w2t
            </td>
            <td className="py-4 px-24">{item.allText.noteAdd}</td>
            <td className="py-4 px-24">{item.allText.kmiatMon}</td>
            <td className="py-4 ">{item.allText.tnfizState}</td>
            <td className="py-4 px-24">{item.allText.angaz} %</td>
            <td className="py-4 ">{item.allText.notes}</td>
            <td className="py-4 px-24">{item.allText.twqi3}</td>
            <td className="flex items-center space-x-3 py-4 px-24">
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
              <button
                onClick={() => {
                  if (item._id !== undefined) handelRemoveCell(item._id);
                }}
                className="font-medium text-red-600 hover:underline dark:text-red-500"
              >
                Remove
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
