import GalSlider from './GalSlider';

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container space-y-6 md:space-y-16 xl:space-y-4">
        <h2 className="section-title mdOnly:text-center">
          <span className="font-thin">OUR</span> GALLERY
        </h2>

        <GalSlider />
      </div>
    </section>
  );
}
