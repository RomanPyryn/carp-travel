import CareerForm from './CareerForm';

export default function Career() {
  return (
    <>
      <section className="section career">
        <div className="container space-y-9 md:space-y-1 xl:space-y-6">
          <div className="smOnly:space-y-6 md:flex md:justify-between">	
            <h2 className="section-title">
              <span className="font-thin">Choose</span> US
            </h2>
            <p className="section-text max-w-[180px] ml-auto md:text-[13px] md:leading-[1.54] md:max-w-[225px] xl:text-[18px] xl:leading-[1.33] xl:text-justify xl:max-w-[300px] xl:mt-2">
              Your chance to join our passionate team in Carpathian tourism. Seeking talented
              professionals to share our common mission.{' '}
            </p>
          </div>
          
            <div className="space-y-9 xl:space-y-12">
              <h3 className="font-extralight text-[30px] uppercase leading-[1.33] max-w-[180px] ml-auto md:ml-[86px] xl:text-[36px] xl:leading-[1.08] xl:ml-[180px]">
                Why us ?
              </h3>
              <div className="md:flex md:gap-5 xl:justify-end xl:gap-8">
                <ul className="text-right space-y-4 max-w-[180px] md:space-y-6 md:max-w-[225px] xl:max-w-[540px] xl:text-start">
                  <li className="whyUs-item">
                    <h3 className="whyUs-subtitle">Professional development</h3>
                    <p className="whyUs-text">
                      We offer growth opportunities and a creative environment to nurture your
                      talents.
                    </p>
                  </li>
                  <li className="whyUs-item">
                    <h3 className="whyUs-subtitle">Teamwork</h3>
                    <p className="whyUs-text">
                      Join our close-knit family, where support and inspiration abound.
                    </p>
                  </li>
                  <li className="whyUs-item">
                    <h3 className="whyUs-subtitle">Stimulating work environment</h3>
                    <p className="whyUs-text">
                      Flexibility and remote options for a comfortable experience.
                    </p>
                  </li>
                  <li className="whyUs-item">
                    <h3 className="whyUs-subtitle">Exciting challenges</h3>
                    <p className="whyUs-text">
                      Unleash your potential through unforgettable projects showcasing Carpathian
                      beauty.
                    </p>
                  </li>
                </ul>
                <div className="hidden md:block w-full xl:w-[600px] xl:-mt-[100px]">
                  <CareerForm />
                </div>
              </div>
            </div>
          
        </div>
      </section>
      <section className="section career py-14 md:hidden">
        <div className="container">
          <CareerForm />
        </div>
      </section>
    </>
  );
}
