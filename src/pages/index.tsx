import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import RegistrationLayout from '@/templates/RegistrationLayout';
import UserRegistrtion from '@/ui/component/Auth/UserRegistrtion';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="EL-FiT Group"
          description="EL-FiT GROUP has been established since 2017 , in engineering training sector and general contracting ,the CEO & the founder of this company called Eng/ Mohamed Osama EL-FiT, we are providing engineering courses for training students and also providing concrete works items for genral contracting services. "
        />
      }
    >
      <main className=" flex h-screen  w-full items-center justify-center overflow-hidden bg-[#e6e8ea]">
        <RegistrationLayout authComponent={<UserRegistrtion />} />
      </main>
    </Main>
  );
};

export default Index;
