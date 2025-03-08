export default function Hero() {
  return (
    <section className="grid lg:grid-cols-3 gap-8 min-h-[500px]">
      {/* Left Column with Background Image */}
      <div className="lg:col-span-2 min-h-[400px] lg:min-h-[500px]">
        <div className="relative h-full w-full shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full p-4 md:p-8 lg:p-20 flex flex-col justify-center text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 capitalize">
              World News
            </h2>
            <div className="w-full h-[1px] md:h-[2px] bg-white mt-2 mb-4 md:mt-4 md:mb-8"></div>
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
              Amazing places in America to visit
            </h3>
            <p className="text-sm md:text-lg mb-4 md:mb-6 max-w-2xl">
              For some reason — this country, this city, this neighborhood, this
              particular street — is the place you are living a majority of year
              life in.
            </p>
            <button className="self-start text-sm md:text-base bg-pink-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-600 transition-colors capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - More News */}
      <div className="lg:col-span-1 min-h-[500px] p-4 md:p-0">
        <div className="mx-auto flex flex-col justify-center max-w-[500px] lg:w-[300px] h-full">
          <div className="flex justify-between items-center">
            <p className="capitalize font-bold md:font-extrabold text-lg md:text-xl">
              More News
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-1 md:p-2 hover:bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 stroke-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="p-1 md:p-2 hover:bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 stroke-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-200 my-4 md:my-6"></div>

          {/* News Items */}
          <div className="space-y-6 md:space-y-8">
            {[1, 2].map((item) => (
              <div key={item}>
                <h3 className="text-base md:text-lg font-bold text-pink-400">
                  {item === 1 ? 'Travel' : 'Technology'}
                </h3>
                <h4 className="text-sm md:text-base font-medium text-black mt-2">
                  Article title
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-1 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident nam tempore a voluptas doloremque, deleniti...
                </p>
                <div className="flex items-center mt-2 md:mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 md:w-4 md:h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-xs md:text-sm text-gray-500">
                    2 min ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
