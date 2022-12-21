import type { RootState } from '@/app/redux/store/store';
import { useSelector } from '@/app/redux/store/store';
import { tableHeader } from '@/app/server/TableData/tableHeader';

import Modal from '../Modal/Modal';
import TableBody from './TableBody';
import TableHead from './TableHead';

const TableConstract = () => {
  const { isTouched } = useSelector((state: RootState) => state.modal);
  // const dispatch = useDispatch();
  console.log(isTouched);

  return (
    <>
      <div className="px-10">
        <div className="relative my-6 overflow-x-auto  rounded-2xl  shadow-md">
          <table className="relative w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
            <TableHead dataHead={tableHeader} />
            <TableBody />
          </table>
        </div>
      </div>
      {isTouched ? <Modal /> : null}
    </>
  );
};

export default TableConstract;
