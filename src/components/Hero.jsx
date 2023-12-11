
function Hero() {
    const vimeoEmbedUrl = "https://player.vimeo.com/video/892775103?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

  return (
    <div className="bg-deep-purple-accent-700 h-screen">
        {/* <iframe 
            src={vimeoEmbedUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        ></iframe> */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 group">
                <h1 className="max-w-lg mb-6 font-sans text-8xl font-bold leading-none tracking-tight text-dark sm:text-4xl md:mx-auto transition-transform duration-200 group-hover:rotate-12">
                  <span className="relative inline-block">
                    <span className="relative">Corporate</span>
                  </span>{' '}
                  Travel Simplified
                </h1>
                <p className="text-base text-dark md:text-lg">
                Wherever you want to go next, see what’s possible with LetsGoThere.
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-white hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero