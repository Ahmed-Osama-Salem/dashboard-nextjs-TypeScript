import type { RootState } from '@/app/redux/store/store';
import { useSelector } from '@/app/redux/store/store';
import { tableHeader } from '@/app/server/TableData/tableHeader';

import Modal from '../Modal/Modal';
import UpdateModal from '../Modal/UpdateModal';
import TableBody from './TableBody';
import TableFilters from './TableFilters/TableFilters';
import TableHead from './TableHead';

const TableConstract = () => {
  const { isTouched, isUpdateModal } = useSelector(
    (state: RootState) => state.modal
  );
  const { table } = useSelector((state: RootState) => state.tableData);
  console.log(table);

  // const dispatch = useDispatch();

  return (
    <>
      <div className="px-10">
        <TableFilters />
        <div className="relative my-6 overflow-x-auto  rounded-2xl  shadow-md">
          <table className="relative w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
            <TableHead dataHead={tableHeader} />
            <TableBody />
          </table>
        </div>
      </div>
      {isTouched ? <Modal /> : null}
      {isUpdateModal ? <UpdateModal /> : null}
    </>
  );
};

export default TableConstract;
