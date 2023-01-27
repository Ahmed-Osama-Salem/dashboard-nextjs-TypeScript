import UsersTableHead from '@/ui/component/Table/usersTable/UsersTableHead';

const UsersTable = () => {
  return (
    <div className="mt-[100px] px-10">
      <div className="relative my-6 overflow-x-auto rounded-2xl shadow-md  print:overflow-auto">
        <table className="relative w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
          <UsersTableHead />
        </table>
      </div>
    </div>
  );
};
export default UsersTable;
