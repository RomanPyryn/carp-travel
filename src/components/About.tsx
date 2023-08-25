export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container space-y-10 md:space-y-16">
        <div className="relative md:flex md:justify-between md:gap-6">
          <h2 className="section-title smOnly:mb-2">
            <span className="font-thin">WHO</span>WE ARE
          </h2>
          <div className="space-y-5 max-w-[180px] md:max-w-[220px] md:space-y-4 xl:max-w-[300px] md:mt-4 xl:mb-[148px]">
            <p className="section-text">
              <span className="bold">a team of enthusiasts</span> who are fully committed to the
              mission of creating unforgettable and extraordinary trips to the most beautiful parts
              of the Carpathians. Our goal is not just to show you the natural wonders of the
              mountains, but to provide you with a deep immersion in their magical atmosphere.
            </p>
            <p className="section-text">
              <span className="bold">We believe</span> that nature has the power to inspire,
              strengthen character and provide new perspectives. Therefore, each of our tours is
              aimed at unlocking your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
          <div className="section-text smOnly:ml-auto smOnly:max-w-[180px] smOnly:mt-10 mdOnly:absolute mdOnly:left-0 mdOnly:bottom-0 xl:self-end  xl:max-w-[300px]">
            <h3 className="uppercase font-normal">From vacationers </h3>
            <h3 className="uppercase font-normal text-end">to active travelers</h3>
            <p className="-tracking-[0.14px] xl:tracking-[2.16px]">we have a tour for everyone.</p>
          </div>
        </div>
        <p className="section-text text-justify md:max-w-[480px] mdOnly:ml-auto xl:absolute xl:left-[80px] xl:bottom-0 xl:max-w-[610px]">
          <span className="bold">We use methods</span> that are time-tested and proven. Our expert
          guides with in-depth knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.{' '}
        </p>
      </div>
    </section>
  );
}
