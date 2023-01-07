import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import UserRegistrtion from '@/ui/component/Auth/UserRegistrtion';

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
      <div className="overflow-x-hidden">
        <UserRegistrtion />
      </div>
    </Main>
  );
};

export default Index;
