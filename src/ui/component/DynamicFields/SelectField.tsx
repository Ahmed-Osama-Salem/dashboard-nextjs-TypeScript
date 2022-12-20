import { ErrorMessage, Field } from 'formik';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const SelectField = ({
  data,
  label,
  showErrors,
  width,
  required,
  setFieldValue,
  name,
}: {
  data: { name: string; id: number }[];
  label: string;
  showErrors?: boolean;
  width: string;
  required: boolean;
  setFieldValue?: any;
  name: string;
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<number>(0);
  const [showSelectItem, setShowSelectItem] = useState<string>(label);
  const [connectField, setConnectField] = useState<string>('');

  const handelDeleteItem = () => {
    setSelectItem(0);
    setFieldValue(name, '');
    setConnectField('');
    setShowSelectItem('');
    setShowList(false);
  };

  useEffect(() => {
    handelDeleteItem();
  }, [connectField, selectItem]);

  return (
    <main className={`${width} relative min-w-[250px] max-w-[500px]`}>
      <p className="flex justify-end text-xl dark:text-white">{label}</p>
      {showErrors && (
        <div className="text-red-500">
          <ErrorMessage name={name} />
        </div>
      )}
      <div
        onClick={() => {
          setShowList((prev) => !prev);
        }}
        className=" relative flex h-[40px] cursor-pointer items-center gap-2 rounded-[10px] bg-[#f0ececb0] pl-2  shadow-sm shadow-gray-500 dark:bg-black/30"
      >
        <BsFillCheckCircleFill
          className={
            !selectItem
              ? 'text-[17px] text-gray-400 transition-all duration-300 ease-linear'
              : 'text-[20px] text-green-600 transition-all duration-300 ease-linear'
          }
        />
        <span className="transition-all duration-300 ease-linear dark:text-white">
          {selectItem ? showSelectItem : ` ${label}`}
        </span>
        <div className="absolute right-3">
          <AiFillCloseCircle
            onClick={handelDeleteItem}
            className={
              selectItem
                ? 'z-30 text-[25px] text-red-600 opacity-100 transition-all duration-300 ease-linear'
                : ' text-[25px] text-red-600 opacity-0 duration-300 ease-linear'
            }
          />
        </div>
      </div>

      <div
        className={
          showList
            ? `absolute left-5 z-40 mx-auto mt-1 h-[220px] w-[90%] max-w-[450px] translate-y-0 scale-[1]  overflow-y-scroll rounded-[10px] bg-white opacity-100  shadow-lg shadow-black/50 transition-all duration-200 ease-linear dark:bg-light-gray`
            : `absolute left-5 z-40 mx-auto mt-1 h-[0px] w-[90%] max-w-[450px] translate-y-[-20px] scale-[0.5] overflow-y-scroll rounded-[10px] bg-white opacity-0  transition-all duration-300 ease-linear dark:bg-light-gray`
        }
      >
        <ul className="w-full dark:bg-light-gray">
          {data.map((item) => {
            return (
              <label key={item.id} htmlFor={item.name}>
                <div
                  onClick={() => {
                    setSelectItem(item.id);
                    setShowSelectItem(item.name);
                    setConnectField(item.name);
                    setShowList(false);
                  }}
                  key={item.id}
                  className={
                    selectItem === item.id
                      ? ' flex cursor-pointer items-center bg-red-700 p-2 transition-colors duration-150 ease-linear hover:bg-red-600'
                      : ' flex cursor-pointer items-center bg-white p-2 transition-colors duration-150 ease-linear hover:bg-red-600 dark:bg-light-gray dark:hover:bg-red-600'
                  }
                >
                  <span>
                    <BiCheck
                      className={
                        selectItem === item.id
                          ? 'scale-100 text-white opacity-100 transition-transform duration-200 ease-in dark:text-white'
                          : 'scale-0 opacity-0 transition-transform duration-200 ease-in dark:text-white'
                      }
                    />
                  </span>
                  <li
                    key={item.id}
                    className={
                      selectItem === item.id
                        ? 'my-1 translate-x-[15px] cursor-pointer font-medium text-white transition-transform duration-200 ease-in dark:text-white'
                        : 'my-1 translate-x-[0px] cursor-pointer transition-transform duration-200 ease-in dark:text-white'
                    }
                  >
                    {item.name}
                  </li>
                  <Field
                    type="radio"
                    required={required}
                    id={item.name}
                    name={name}
                    value={selectItem !== 0 ? connectField : ''}
                    className="opacity-0"
                  />
                </div>
              </label>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default SelectField;
