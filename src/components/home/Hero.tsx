import HeroImg from "../../assets/Hero.png.png";

function Hero() {
  return (
    <section className="relative text-white text-center">
      
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="AI Hero"
        className="w-full"
      />

      {/* Overlay Content */}
      <article className="absolute top-40 left-40  flex flex-col ">
        <h1 className="text-[64px] w-[580px] text-left font-bold mb-4">
          Transform AI Ideas into <span className="text-yellow-400">Reality</span>
        </h1>
        <p className="text-gray-300 mb-6 text-2xl text-left">
          Learn. Build. Deploy.
        </p>
        <button className="text-xl bg-white w-fit text-black px-6 py-3 rounded-lg cursor-pointer hover:scale-95 transition-all duration-200">
          Enroll Now
        </button>
      </article>

    </section>
  );
}

export default Hero;