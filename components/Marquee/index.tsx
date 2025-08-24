const Marquee = () => {
  return (
    <div className="hidden lg:flex md:flex marquee-verticle bg-black z-10">
      <div className="track-verticle text-white gap-y-24">
        {[...Array(25)].map((_, idx) => (
          <div key={idx} className="marquee-text font-semibold">
            #open to be hired
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
