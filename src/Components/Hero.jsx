export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="
        max-w-[1450px]
        mx-auto
        px-6
        pt-4
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[55px]
          h-[760px]
          bg-[#efecfa]
        "
      >
        {/* Soft Glow */}
        <div
          className="
            absolute
            bottom-[100px]
            left-1/2
            -translate-x-1/2
            w-[1200px]
            h-[500px]
            bg-[#cfc6ff]
            opacity-50
            blur-[180px]
            rounded-full
          "
        />

        {/* TEXT */}
        <div
          className="
            absolute
            top-[45px]
            left-1/2
            -translate-x-1/2
            text-center
            z-30
            w-full
            px-10
          "
        >
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#7465a5]
              font-medium
            "
          >
            CREATIVE DEVELOPER
          </p>

          <h1
            className="
              mt-5
              text-[72px]
              md:text-[96px]
              leading-[0.9]
              font-black
              text-[#221445]
            "
          >
            Bold Ideas That
            <br />
            Start With Vision.
          </h1>

          <p
            className="
              mt-6
              max-w-[720px]
              mx-auto
              text-[20px]
              leading-[1.8]
              text-[#6c648b]
            "
          >
            We help modern brands craft digital stories
            that inspire action and drive results.
          </p>

          <button
            onClick={handleScroll}
            className="
              mt-8
              bg-gradient-to-r
              from-[#8168d2]
              to-[#5d458e]
              text-white
              px-10
              py-5
              rounded-full
              hover:scale-105
              transition
              shadow-[0_20px_60px_rgba(129,104,210,.35)]
            "
          >
            Get In Touch ↗
          </button>
        </div>

        <img
          src="/hero.png"
          alt="Hero"
          className="
            absolute
            bottom-[-150px]
            left-1/2
            -translate-x-1/2
            w-[1500px]
            max-w-none
            object-contain
            z-10
            opacity-95
            mix-blend-screen
          "
        />
      </div>
    </section>
  );
}