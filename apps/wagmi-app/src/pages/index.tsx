import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white">
        <span className=''>⚡</span>
      </div>
    </Main>
  );
};

export default Index;
