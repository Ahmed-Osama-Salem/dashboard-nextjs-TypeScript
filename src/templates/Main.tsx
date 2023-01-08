import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full  text-gray-700 antialiased dark:bg-dark-gray">
    {props.meta}

    <div className="">{props.children}</div>
  </div>
);

export { Main };
