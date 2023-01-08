import type { ReactNode } from 'react';

const RegistrationLayout = ({
  authComponent,
}: {
  authComponent: ReactNode;
}) => {
  return (
    <section className="mx-auto flex max-h-[68%] w-[80%] flex-row-reverse items-center justify-between overflow-hidden rounded-3xl bg-white ">
      {authComponent}
      <video autoPlay src="/assets/vedio/authback.mp4" muted loop>
        kdskld
      </video>
    </section>
  );
};

export default RegistrationLayout;
