import Image from 'next/image';

interface NewsCardProps {
  title: string;
  image: string;
  description?: string;
  time: string;
  username?: string;
}

export default function NewsCard({
  title,
  image,
  description,
  time,
  username,
}: NewsCardProps) {
  return (
    <div
      className={` overflow-hidden ${
        !description ? 'rounded-t' : 'shadow-md rounded bg-white'
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className={!description ? 'py-2' : 'p-4'}>
        <h4 className="text-sm font-bold text-black">{title}</h4>
        {description && (
          <p className="text-xs text-gray-400 leading-relaxed">
            {description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'}
          </p>
        )}
        <span className="text-xs text-gray-400 italic flex space-x-1 items-center mt-3">
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
          {time}
          {username && (
            <a href="#" className="underline pl-1">
              by {username}
            </a>
          )}
        </span>
      </div>
    </div>
  );
}
