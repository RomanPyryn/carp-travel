export default function Hero() {
  return (
    <section className="section hero pt-28 pb-14 md:pt-32 md:pb-16 xl:pt-32 xl:pb-28">
      <div className="container smOnly:space-y-6 md:flex md:gap-12 xl:gap-[200px]">
        <div className="smOnly:pt-20 space-y-6 md:space-y-[68px] xl:space-y-[148px]">
          <h1 className="section-title">Uncover <span className="font-thin">Carpathian’s Secrets</span></h1>
          <p className="font-extralight text-[10px] leading-[1.6] max-w-[160px] md:text-[14px] md:leading-[1.15] md:tracking-[1.26px] md:max-w-[270px] xl:max-w-full xl:text-base xl:leading-[1.5] xl:tracking-[1.44px]">Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
        </div>
        <div className="space-y-6 md:mt-auto md:space-y-[28px]">
          <div className="absolute right-5 top-0 font-thin xl:right-[50px]">
            <h2 className="text-4xl leading-[1.33] tracking-[1.6992px] md:text-[67px] md:tracking-[8.71px] xl:text-[98px] xl:tracking-[0]"><span className="bold">7</span>DAYS</h2>
            <p className="font-light text-xs tracking-[9.4px] md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[36.48px]">JOURNEY</p>
          </div>
          <p className="section-text text-justify">
            We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
            stunning views, exciting expeditions, and the best service!
					</p>
					<button className="btn-join  relative bold uppercase bg-white/10 w-full py-[18px] text-[17px] leading-[1] md: text-lg md:py-[14px] md:leading-[1.22] xl:text-[32px] xl:py-[16px] transition-all duration-300 ease-in hover:bg-white/20">Join now</button>
        </div>
      </div>
    </section>
  );
}