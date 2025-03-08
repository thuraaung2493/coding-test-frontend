import NewsCard from '@/components/NewsCard';

export default function Trending() {
  return (
    <section className="w-full bg-slate-50 pt-3">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold capitalize">TRENDING</h2>
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
          <NewsCard
            title="Dolore magna aliqua"
            image="https://picsum.photos/500/300"
            description="Lorem ipsum dolor sit amet, ipsum dolor sit am consectetur adipiscing elit..."
            time="2 min ago"
          />
          <NewsCard
            title="Morbi eleifend a libero"
            image="https://picsum.photos/500/300"
            description="Lorem ipsum dolor sit amet, ipsum dolor sit am consectetur adipiscing elit..."
            time="4 min ago"
          />
          <NewsCard
            title="Morbi eleifend a libero"
            image="https://picsum.photos/500/300"
            description="Lorem ipsum dolor sit amet, ipsum dolor sit am consectetur adipiscing elit..."
            time="5 min ago"
          />
        </div>
      </div>
    </section>
  );
}
