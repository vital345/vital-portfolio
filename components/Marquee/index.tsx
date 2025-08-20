const Marquee = () => {
  return (
    <div className="marquee-verticle bg-black flex z-10">
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
