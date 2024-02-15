function Hero({ backgroundImage, title, subtitle, showButton }) {
  const vimeoEmbedUrl =
    "https://player.vimeo.com/video/893901939?autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <section className="bg-deep-purple-accent-700">
      {/* Overlay */}
      <div className="bg-overlay"></div>
      {backgroundImage ? (
        <img src={backgroundImage} alt="Background" className="hero-image" />
      ) : (
        <iframe
          className="hero-iframe tall:top-[-235px]"
          src={vimeoEmbedUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="tall:max-h-[620px] px-4 flex items-center xl:h-[70vh] content-above-overlay pt-16 pb-0 md:py-16 mx-auto my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-6 sm:text-center md:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white transition-transform duration-200 xl:text-6xl sm:text-6xl md:mx-auto">
                    {title}
                </h1>
                <p className="relative z-10 text-xl font-medium text-white">
                    {subtitle}
                </p>
            </div>
            {showButton && (
              <div className="relative z-10">
                <a
                  href="#why"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide transition duration-200 bg-white shadow-md text-secondary hover:text-white hover:bg-primary focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
