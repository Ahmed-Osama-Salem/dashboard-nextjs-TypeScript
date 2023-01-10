import { useEffect } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';

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
        <MdLightMode
          onClick={() => {
            setLightMode();
          }}
          size={30}
          className="hover:animate-spin dark:text-white"
        />
      ) : (
        <BsMoonFill
          onClick={() => dispatch(setTheme('dark'))}
          size={30}
          className="hover:animate-pulse"
        />
      )}
    </div>
  );
}
