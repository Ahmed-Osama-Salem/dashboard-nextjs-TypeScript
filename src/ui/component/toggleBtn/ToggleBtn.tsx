// import { useEffect } from 'react';
// import { BsMoonFill } from 'react-icons/bs';
// import { MdLightMode } from 'react-icons/md';
// import { useDispatch, useSelector } from 'react-redux';

// import { setTheme } from '@/app/redux/store/slice/darkThemeSlice';
// import type { RootState } from '@/app/redux/store/store';

// export default function ToogleBtn() {
//   const { theme } = useSelector((state: RootState) => state.theme);
//   // const [theme, setTheme] = useState<string>(
//   //   typeof window !== 'undefined' ? localStorage.theme : 'dark'
//   // );
//   console.log(theme, 'state');

//   const dispatch = useDispatch();
//   const colorTheme = theme === 'dark' ? 'light' : 'dark';

//   useEffect(() => {
//     const root = window.document.documentElement;

//     root.classList.remove(colorTheme);
//     root.classList.add(theme);

//     if (typeof window !== 'undefined') {
//       localStorage.setItem('theme', theme);
//     }
//   }, [theme]);

//   const setLightMode = () => {
//     dispatch(setTheme('light'));
//   };
//   return (
//     <div className="cursor-pointer">
//       {colorTheme === 'light' &&
//       colorTheme !== undefined &&
//       colorTheme !== null ? (
//         <MdLightMode
//           onClick={() => {
//             setLightMode();
//           }}
//           size={30}
//           className={` ${
//             theme === 'light'
//               ? 'text-[#999999]'
//               : ' text-[#000B40] dark:text-white'
//           } text-[30px]  hover:scale-105 hover:text-[#000B40] hover:dark:text-white`}
//         />
//       ) : null}
//       {colorTheme === 'dark' &&
//       colorTheme !== undefined &&
//       colorTheme !== null ? (
//         <BsMoonFill
//           onClick={() => dispatch(setTheme('dark'))}
//           size={30}
//           className="hover:animate-pulse"
//         />
//       ) : null}
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';

const isDark = () =>
  // Function that will return boolean if any of the condition is satisfied
  (localStorage && localStorage.theme === 'dark') || // Condition 1 - has local storage and theme = dark in local storage is found
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches); // Condition 2 - No theme key in local storage but media color scheme is dark

// eslint-disable-next-line @typescript-eslint/no-shadow
const getTheme = (isDark: any) => (isDark ? 'dark' : 'light'); // Function to return 'dark' or 'light' string

const ToogleBtn = () => {
  const [darkMode, setDarkMode] = useState(false); // State for holding theme status

  const toggleMode = () => {
    // onClick handler for changing theme on button press
    localStorage.theme = getTheme(!darkMode); // setting up local storage theme value
    if (localStorage.theme === 'dark') {
      // If theme is 'dark'
      document.documentElement.classList.remove('light'); // remove 'light' from html class
      document.documentElement.classList.add('dark'); // add 'dark' to html class
    } else {
      // if not 'dark'
      document.documentElement.classList.remove('dark'); // remove 'dark' from html class
      document.documentElement.classList.add('light'); // add 'light' to html class
    }
    setDarkMode(!darkMode); // set dark mode state to opposite of initial value
  };

  useEffect(() => {
    setDarkMode(isDark()); // before page mount set the value of dark mode by observing theme in local storage
  }, []);

  const darkModeActive =
    process.browser && document.documentElement.classList.contains('dark'); // returns true if its a client and 'dark' is present in html
  // process.browser is deprecated can be written as typeof window === 'undefined'
  return (
    <>
      <button className="h-10 w-10 focus:outline-none" onClick={toggleMode}>
        <span className="sr-only">Color mode switch button</span>
        {darkModeActive ? ( // switch mode icon according to html class 'dark' or 'light'
          <MdLightMode
            size={34}
            className="hover:animate-spin dark:text-white"
          />
        ) : (
          <BsMoonFill size={34} className="hover:animate-pulse" />
        )}
      </button>
    </>
  );
};
export default ToogleBtn;
