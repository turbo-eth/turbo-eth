import { Meta } from "@/templates/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const About = () => (
  <Main
    meta={
      <Meta
        title={`${AppConfig.title} | ${AppConfig.description}`}
        description={AppConfig.description}
      />
    }
  >
    <section className="py-12">
      <div className="container mx-auto max-w-screen-md">
        <h3 className="text-6xl font-bold">Representative Democracy</h3>
      </div>
    </section>
  </Main>
);

export default About;
