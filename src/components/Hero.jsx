function Hero() {
  const vimeoEmbedUrl =
    "https://player.vimeo.com/video/893901939?autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <div className="bg-deep-purple-accent-700">
      {/* Overlay */}
      <div className="bg-overlay"></div>
      <iframe
        className="hero-iframe"
        src={vimeoEmbedUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="px-4 flex items-center xl:h-[70vh] content-above-overlay py-16 mx-auto my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <div className="hero-title-container">
                    <h1 className="hero-title max-w-lg mb-6 font-sans text-4xl xl:text-6xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto transition-transform duration-200 group-hover:rotate-12">
                        Corporate Travel Simplified
                    </h1>
                </div>
                <p className="text-xl text-white relative z-10">
                    Wherever you want to go next, see what’s possible with
                    oneWurld.
                </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-secondary transition duration-200 shadow-md hover:text-white bg-white hover:bg-primary focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
