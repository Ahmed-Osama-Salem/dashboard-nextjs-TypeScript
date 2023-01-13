import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import RegistrationLayout from '@/templates/RegistrationLayout';
import Login from '@/ui/component/Auth/Login';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="EL-FiT Group"
          description="Suiiz Tech Team Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <main className=" flex h-screen w-full items-center justify-center overflow-hidden ">
        <RegistrationLayout authComponent={<Login />} />
      </main>
    </Main>
  );
};

export default Index;
