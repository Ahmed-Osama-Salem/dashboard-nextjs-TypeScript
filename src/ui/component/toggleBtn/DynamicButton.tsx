import SpinnerLoader from '../preloader/SpinnerLoader';

const DynamicButton = ({
  label,
  width,
  type,
  loader,
  handleClick,
  isDisabled,
}: {
  label: string;
  width: string;
  type: 'submit' | 'button' | 'reset';
  loader: boolean;
  handleClick?: () => any;
  isDisabled?: boolean;
}) => {
  return (
    <div className="">
      <button
        onClick={handleClick}
        type={type}
        className="mx-auto mt-3 flex h-16 w-fit items-center justify-center duration-300"
        disabled={isDisabled}
      >
        <div
          className={
            isDisabled
              ? `absolute h-[40px] ${width}  cursor-not-allowed items-center overflow-hidden rounded-xl  bg-gradient-to-br from-gray-400 to-gray-600 shadow-2xl transition duration-1000 ease-out`
              : `absolute h-[40px] ${width} cursor-pointer items-center overflow-hidden rounded-xl bg-gradient-to-br  from-red-400 to-red-600 shadow-2xl transition duration-1000 ease-out hover:scale-x-110 hover:scale-y-105`
          }
        ></div>
        <div className=" pointer-events-none z-10 flex items-center gap-2 text-center font-semibold text-white">
          <span>{loader ? <SpinnerLoader /> : null}</span> {label}
        </div>
      </button>
    </div>
  );
};

export default DynamicButton;
