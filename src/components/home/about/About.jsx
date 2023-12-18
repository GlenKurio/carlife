import Partners from "./Partners";

import Fleet from "./Fleet";
import Dedication from "./Dedication";

function About() {
  return (
    <section className=" w-full flex flex-col p-4 mb-16 mt-4">
      <h2 className="text-3xl text-blue-950 font-bold leading-[1.4] text-center mb-4 md:text-4xl">
        Welcome to world of luxury automotive experiences!
      </h2>

      <Partners />
      <Fleet />
      <Dedication />
    </section>
  );
}

export default About;
