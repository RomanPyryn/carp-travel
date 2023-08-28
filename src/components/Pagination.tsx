const Pagination = () => {
  return (
    <ul className="pagination-container text-white/20 uppercase text-[20px] leading-[0.85] space-y-4 smOnly:max-w-[190px] md:text-[18px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.86] xl:w-[280px] xl:space-y-6">
      <li className="pagination-el">ATVs Traveling</li>
      <li className="pagination-el">Rock climbing</li>
      <li className="pagination-el">Hot air ballooning</li>
      <li className="pagination-el">Skydiving</li>
      <li className="pagination-el">Rafting</li>
    </ul>
  );
};

export default Pagination;
