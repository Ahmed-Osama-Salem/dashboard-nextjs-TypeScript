import { useEffect } from 'react';

import { setTheme } from '@/app/redux/store/slice/darkThemeSlice';
import type { RootState } from '@/app/redux/store/store';
import { useDispatch, useSelector } from '@/app/redux/store/store';

export default function ToogleBtn() {
  const { theme } = useSelector((state: RootState) => state.theme);
  // const [theme, setTheme] = useState<string>(
  //   typeof window !== 'undefined' ? localStorage.theme : 'dark'
  // );
  const dispatch = useDispatch();
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const setLightMode = () => {
    return dispatch(setTheme('light'));
  };

  return (
    <div className="cursor-pointer">
      {colorTheme === 'light' &&
      colorTheme !== undefined &&
      colorTheme !== null ? (
        <svg
          onClick={() => {
            setLightMode();
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 transition-all duration-300 ease-linear"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => dispatch(setTheme('dark'))}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </div>
  );
}
