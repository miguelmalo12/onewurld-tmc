
function CTA() {
  return (
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-28">
      <h1 class="mb-4 mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl max-w-xl">
        Ready to Transform Your Business Travel Experience?
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Embark on a journey of seamless corporate travel management with
        oneWurld. Say goodbye to the complexities and inefficiencies of
        traditional travel booking. Our cutting-edge platform offers a
        streamlined, user-friendly experience, ensuring your business
        travels are both cost-effective and comfortable.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="/contact"
          class="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="/about"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 font-medium text-center text-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a>
      </div>
    </div>
  </section>
  )
}

export default CTA