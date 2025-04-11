import Image from "next/image";

export default function ArticleCard({
  post,
}: {
  post: {
    id: number;
    imageUrl: string;
    author: { imageUrl: string; href: string; name: string; role: string };
    href: string;
    title: string;
    datetime: string;
    date: string;
    description: string;
    category: { href: string; title: string };
  };
}) {
  return (
    <article
      key={post.id}
      className="flex flex-col justify-between items-start"
    >
      <div className="relative w-full">
        <Image
          alt=""
          src={post.imageUrl}
          className="bg-gray-100 rounded-2xl w-full aspect-video object-cover sm:aspect-2/1 lg:aspect-3/2"
          width={400}
          height={300}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
      </div>
      <div className="max-w-xl">
        <div className="flex items-center gap-x-4 mt-8 text-xs">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <a
            href={post.category.href}
            className="relative z-10 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full font-medium text-gray-600"
          >
            {post.category.title}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 font-semibold text-gray-900 text-lg/6 group-hover:text-gray-600">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 text-gray-600 text-sm/6 line-clamp-3">
            {post.description}
          </p>
        </div>
        <div className="relative flex items-center gap-x-4 mt-8">
          <Image
            alt=""
            src={post.author.imageUrl}
            className="bg-gray-100 rounded-full size-10"
            width={40}
            height={40}
          />
          <div className="text-sm/6">
            <p className="font-semibold text-gray-900">
              <a href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </a>
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
