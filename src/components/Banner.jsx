import leftImg from "../assets/hero-leaf1.png";
import rightImg from "../assets/hero-leaf2.png";

const Banner = () => {
  return (
    <>
      <div className="h-screen w-full bg-green-500 ralative">
        <div className="flex justify-between  absolute bottom-0 w-full">
          <img className="w-95" src={leftImg} alt="" />
          <img className="w-95" src={rightImg} alt="" />
        </div>

        <div className="flex justify-center items-center flex-col">
          <h1 className="text-6xl font-bold text-black mt-80">
            Plant a Tree, Grow a Future
          </h1>
          <p className="text-xl font-semibold text-center text-black ">
            Join our mission to plant 1 million trees and make the Earth greener
            for future generations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;

<section className="relative w-full bg-[#d5f3e3] py-16 md:py-24 px-6 flex items-center justify-center overflow-hidden">
  {/* বাম পাশের পাতার ছবি */}
  <div className="absolute left-0 bottom-0 w-1/4 max-w-[250px] md:max-w-[350px] pointer-events-none select-none origin-bottom-left transform translate-y-4">
    <img
      src="../assets/hero-leaf1.png" // আপনার বাম পাশের পাতার ইমেজ পাথ এখানে দিন
      alt="Leaf Left"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* মাঝখানের টেক্সট এবং কন্টেন্ট সেকশন */}
  <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
    <h1 className="text-3xl md:text-5xl font-bold text-[#1b332b] mb-4 tracking-tight">
      Plant a Tree, Grow a Future
    </h1>

    <p className="text-sm md:text-base text-[#2a4d40] font-medium mb-8 max-w-lg leading-relaxed">
      Join our mission to plant 1 million trees and make the Earth greener for
      future generations.
    </p>

    <button className="bg-[#fcb305] hover:bg-[#e5a204] text-[#1b332b] font-bold px-8 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95">
      Get Involved
    </button>
  </div>

  {/* ডান পাশের পাতার ছবি */}
  <div className="absolute right-0 bottom-0 w-1/4 max-w-[250px] md:max-w-[350px] pointer-events-none select-none origin-bottom-right transform translate-y-4">
    <img
      src="../assets/hero-leaf2.png" // আপনার ডান পাশের পাতার ইমেজ পাথ এখানে দিন
      alt="Leaf Right"
      className="w-full h-auto object-contain"
    />
  </div>
</section>;
