import { useSelector } from 'react-redux';

import type { RootState } from '@/app/redux/store/store';

const NoteCard = ({
  content,
  lightImg,
  darkImg,
  style,
  specialNote,
}: {
  content: string[];
  lightImg: string;
  darkImg: string;
  style: string;
  specialNote?: string;
}) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div className={`flex w-full ${style}  items-center gap-5 p-10`}>
      <img
        src={theme === 'light' ? lightImg : darkImg}
        alt="img"
        className="h-[14rem] w-[60%] rounded-xl shadow-lg shadow-gray-300 dark:shadow-md dark:shadow-black"
      />
      <div>
        <ul className="px-4">
          {content.map((item, i) => {
            return (
              <li key={i} className="list-disc dark:text-white">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="font-semibold text-red-600">{specialNote}</p>
      </div>
    </div>
  );
};

export default NoteCard;
