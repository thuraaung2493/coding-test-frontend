import NewsCard from '@/components/NewsCard';

export default function HappeningNow() {
  return (
    <section className="w-full bg-slate-50 pt-3 pb-12">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold capitalize">HAPPENING NOW</h2>
          <div className="flex justify-between items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 stroke-2 stroke-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3  stroke-3 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div className="col-span-2 flex flex-col gap-8">
            <div
              className="relative shadow-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('https://picsum.photos/1600/900')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative h-[350px] p-8 flex flex-col justify-between text-white">
                <div>
                  <h4 className="text-lg font-bold">CITY</h4>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Large article title</h4>
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident nam tempore a voluptas doloremque, deleniti...
                  </p>
                  <span className="text-xs italic flex space-x-1 items-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    2 min ago
                  </span>
                </div>
              </div>
            </div>

            <div
              className="relative shadow-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('https://picsum.photos/1600/900')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative h-[350px] p-8 flex flex-col justify-between text-white">
                <div>
                  <h4 className="text-lg font-bold">TRAVEL</h4>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Large article title</h4>
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident nam tempore a voluptas doloremque, deleniti...
                  </p>
                  <span className="text-xs italic flex space-x-1 items-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    2 min ago
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-8">
            <NewsCard
              title="Small title"
              image="https://picsum.photos/500/300"
              time="3 hr ago"
              username="John Doe"
            />
            <NewsCard
              title="Small title"
              image="https://picsum.photos/500/300"
              time="4 hr ago"
              username="Jane Doe"
            />
            <NewsCard
              title="Small title"
              image="https://picsum.photos/500/300"
              time="5 hr ago"
              username="Mary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
