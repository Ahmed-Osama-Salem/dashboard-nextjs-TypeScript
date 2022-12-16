const Button = ({
  label,
  type,
}: {
  label: string;
  type: 'submit' | 'button' | 'reset';
}) => {
  return (
    <>
      <button
        type={type}
        className="mx-auto mt-3 flex h-16 w-full  items-center justify-center duration-300"
      >
        <div className=" absolute h-[40px] w-[170px] cursor-pointer items-center overflow-hidden rounded-xl bg-gradient-to-br  from-red-400 to-red-600 shadow-2xl transition duration-1000 ease-out hover:scale-x-110 hover:scale-y-105"></div>
        <div className=" pointer-events-none z-10 flex items-center text-center font-semibold text-white">
          <span className="">
            <svg
              className="relative right-1.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {label}
        </div>
      </button>
    </>
  );
};

export default Button;
