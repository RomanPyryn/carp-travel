import CareerForm from './CareerForm'

export default function Career() {
  return (
    <>
      <section className="section career py-14">
        <div className="container space-y-9">
          <div className="smOnly:space-y-6">
            <h2 className="section-title">
              <span className="font-thin">Choose</span> US
            </h2>
            <p className="section-text max-w-[180px] ml-auto">
              Your chance to join our passionate team in Carpathian tourism. Seeking talented
              professionals to share our common mission.{' '}
            </p>
          </div>
          <div className="space-y-9">
            <h3 className="font-extralight text-[30px] uppercase leading-[1.33] smOnly:max-w-[180px] smOnly:ml-auto">
              Why us ?
            </h3>
            <ul className="text-right space-y-4 max-w-[180px]">
              <li className="whyUs-item">
                <h3 className="whyUs-subtitle">Professional development</h3>
                <p className="whyUs-text">
                  We offer growth opportunities and a creative environment to nurture your talents.
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
          </div>
        </div>
      </section>
      <section className="section career py-14">
        <div className="container space-y-6">
          <p className="section-text max-w-[180px] ml-auto">
            Don&apos;t miss your opportunity! Fill out the form right now and join our team!
					</p>
					<CareerForm/>
        </div>
      </section>
    </>
  );
}
