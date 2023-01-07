const ContentCard = ({
  title,
  content,
}: {
  title: string;
  content: string[];
}) => {
  return (
    <div className="w-full rounded-b-3xl border-t-4 border-t-red-600 p-3 shadow-lg shadow-gray-300 transition-all duration-300 ease-linear hover:scale-[1.02] dark:shadow-md dark:shadow-black">
      <p className="text-xl text-red-600">{title}</p>
      <ul className="px-4">
        {content.map((item, i) => {
          return (
            <li key={i} className="my-1 list-disc dark:text-white">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContentCard;
