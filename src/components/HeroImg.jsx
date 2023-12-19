function HeroImg({ backgroundImage, title, subtitle }) {
  
    return (
      <section className="relative bg-deep-purple-accent-700 ">
        <img src={backgroundImage} alt="Background" className="absolute xl:h-[70vh] top-0 bottom-0 left-0 right-0 object-cover w-full h-auto" />
        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <div className="px-4 flex items-center xl:h-[70vh] content-above-overlay py-16 mx-auto my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white transition-transform duration-200 xl:text-6xl sm:text-6xl md:mx-auto">
                    {title}
                </h1>
                  <p className="relative z-10 text-xl text-white">
                      {subtitle}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroImg;
  