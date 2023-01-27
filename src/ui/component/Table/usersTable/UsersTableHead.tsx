import { userHeader } from '@/app/server/TableData/usersHeader';

const UsersTableHead = () => {
  return (
    <thead className=" rounded-xl bg-gray-300/40 text-xs uppercase text-gray-700 dark:bg-red-700 dark:text-gray-400">
      <tr className="">
        {userHeader.map((headers) => {
          return (
            <th key={headers.id} className={headers.classname} scope="col">
              {headers.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default UsersTableHead;
