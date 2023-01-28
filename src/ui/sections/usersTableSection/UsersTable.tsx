import type { IUserData } from '@/app/redux/store/slice/userDataSlice';
import UsersTableBody from '@/ui/component/Table/usersTable/UsersTableBody';
import UsersTableHead from '@/ui/component/Table/usersTable/UsersTableHead';

const UsersTable = ({ users }: { users: IUserData[] }) => {
  return (
    <div className="mt-[40px] px-10">
      <div className="relative my-6 overflow-x-auto rounded-2xl shadow-md  print:overflow-auto">
        <table className="relative w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
          <UsersTableHead />
          <UsersTableBody users={users} />
        </table>
      </div>
    </div>
  );
};
export default UsersTable;
