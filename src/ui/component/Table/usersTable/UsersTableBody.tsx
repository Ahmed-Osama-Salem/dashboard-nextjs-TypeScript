import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { IUserData } from '@/app/redux/store/slice/userDataSlice';
import type { RootState } from '@/app/redux/store/store';

const UsersTableBody = ({ users }: { users: IUserData[] }) => {
  const { userData } = useSelector((state: RootState) => state.userData);

  const currentDate = new Date();

  const timeLocal = currentDate.toLocaleDateString();
  const [currentTime] = useState(timeLocal);

  return (
    <tbody className="">
      {users.map((item: IUserData, i: number) => {
        return (
          <tr
            key={i}
            className={`border-b bg-white  text-center text-[1.1rem] text-gray-600 transition-all duration-300 ease-in-out  hover:transition-transform hover:duration-75 hover:ease-in-out dark:border-gray-700 dark:bg-light-gray ${
              item.role === 'Admin'
                ? 'hover:bg-gray-50 dark:hover:bg-gray-600/30'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-3  text-[#afa113]'
                  : 'py-8 px-3 '
              }
            >
              {i + 1}
            </td>
            <td className="py-8 px-7 text-center">
              <img
                src={item.image}
                className="w-[7rem] rounded-full text-center shadow-xl"
                alt={item.name}
              />
            </td>
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-11  text-[#afa113]'
                  : 'py-8 px-11 '
              }
            >
              {currentTime}
            </td>
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-3 capitalize text-[#afa113]'
                  : 'py-8 px-3 capitalize'
              }
            >
              {item.name}
            </td>
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-11 capitalize text-[#afa113]'
                  : 'py-8 px-11 capitalize'
              }
            >
              {item.job}
            </td>
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-11 text-[#afa113]'
                  : 'py-8 px-11 '
              }
            >
              {item.phone}
            </td>
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-11 text-[#afa113]'
                  : 'py-8 px-11 '
              }
            >
              {item.email}
            </td>
            <td
              scope="col"
              className={
                item.role === 'Admin'
                  ? 'py-8 px-3 text-[#afa113]'
                  : 'py-8 px-3 '
              }
            >
              {item.role === 'Admin' ? 'Admin' : 'Editor'}
            </td>
            {userData && userData.role === 'Admin' ? (
              <td className="flex items-center justify-between space-x-3 py-8 px-11 print:hidden">
                <button className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  تعديل
                </button>
                <button className="font-medium text-red-600 hover:underline dark:text-red-500">
                  ازالة
                </button>
              </td>
            ) : (
              <td className="flex items-center justify-between space-x-3 py-8 px-[2rem] capitalize text-red-600 print:hidden">
                only Eng.Mohamed osama can access this entity
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default UsersTableBody;
