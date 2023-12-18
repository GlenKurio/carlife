import Content from "./Content";
import Partners from "./Partners";
import Reveal from "../animations/Reveal";

function About() {
  return (
    <section className=" w-full flex flex-col md:flex-row p-4">
      <Reveal>
        <Content />
      </Reveal>
      <Partners />
    </section>
  );
}

export default About;
