"use client";

import DynamicButton from "@/components/button/button-dynamic";
import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/interfaces/blogs";
import { cn } from "@/lib/utils";
import { convertToDate } from "@/lib/utils/convert";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RecursiveList = ({
  list,
  depth = 3,
}: {
  list: any[];
  depth?: number;
}) => {
  return (
    <ul
      className={cn("mt-2 list-[upper-roman] list-outside", {
        "mt-0 list-[upper-roman] list-outside": depth === 4,
        "mt-2 ml-4": depth === 5,
        "mt-2 list-[upper-roman] list-outside": depth === 6,
        "ml-5": depth >= 7,
        "list-none": depth === 3,
      })}
    >
      {list.map((item, index) => (
        <li
          key={index}
          className={cn("text-balance", {
            "ml-3": depth === 4,
          })}
        >
          {item.title && (
            <>
              <strong
                className={cn("text-foreground", {
                  "text-fancy": depth === 3,
                  "text-secondary underline underline-offset-2 decoration-1 decoration-tertiary":
                    depth === 5,
                })}
              >
                {item.title}
              </strong>
              :{" "}
            </>
          )}
          {item.description && <span>{item.description}</span>}
          {item.list && <RecursiveList list={item.list} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error("Blog post not found");
        }
        const data = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    fetchBlog();
  }, [slug, router]);

  if (error) return <CannotFind />;

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {post && (
        <div className="mx-auto py-6 w-10/12 md:w-11/12">
          <header>
            <h1>{post.title}</h1>
            <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 xl:py-6 border-b">
              <section>
                <div className="flex md:flex-row-reverse flex-col md:justify-between items-center gap-6">
                  <div className="flex flex-wrap justify-end gap-2 w-fit">
                    {post.topics.map((topic: string, index: number) => {
                      return (
                        <Badge
                          variant={"secondary"}
                          className="text-sm lowercase cursor-default"
                          key={index}
                        >
                          #&thinsp;{topic}
                        </Badge>
                      );
                    })}
                  </div>
                  {post.date && (
                    <p>
                      <strong>Date: </strong>
                      {convertToDate(post.date)}
                    </p>
                  )}
                </div>

                <div className="xl:flex xl:flex-col xl:justify-between">
                  <div>
                    {post.intro.map((intro: string, index: number) => (
                      <p key={index}>{intro}</p>
                    ))}
                  </div>
                </div>
              </section>

              <div className="lg:col-span-2">
                <Image
                  src={post.imageUrl}
                  width={1200}
                  height={800}
                  priority={true}
                  alt={`${post.title}-Main-Image`}
                  className="shadow-lg mx-auto md:mt-4 xl:mt-0 mb-2 rounded-2xl w-full h-full transform object-cover object-center self-center aspect-video"
                />
              </div>
            </section>
          </header>

          {/* Render Recursive List if it exists */}
          {post.list &&
            post.list.map((list, index) => (
              <section className="py-5" key={index}>
                <h2 className={!list.description ? "my-0" : ""}>
                  {list.title && list.title}
                </h2>
                <p>{list.description && list.description}</p>

                {list.list &&
                  list.list.map((subList, subIndex) => (
                    <div key={subIndex}>
                      {subList.title ? (
                        <h3 className={!list.description ? "pt-2" : ""}>
                          {subList.title}
                        </h3>
                      ) : // 2
                      null}
                      <p>{subList.description && subList.description}</p>
                      {subList.list && <RecursiveList list={subList.list} />}
                    </div>
                  ))}
              </section>
            ))}

          <section className="gap-3 lg:gap-5 xl:gap-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 md:mb-10 lg:mb-20 2xl:mb-30 xl:mb-24 py-3 lg:py-5 xl:py-7">
            <Image
              src={post.image2Url}
              width={800}
              height={800}
              priority={false}
              alt={`${post.title}-Supporting-Image`}
              className="shadow-lg rounded-2xl w-full h-full object-cover object-center self-center"
            />
            <div className="lg:col-span-2">
              <h2>Conclusion</h2>
              {post.conclusions.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <footer className="mx-auto xl:mt-0 py-3 md:py-4 lg:py-5 border-t lg:w-3/4 text-center">
            <p className="leading-3">
              Read more related posts about{" "}
              {post.topics.map((topic, index) => (
                <DynamicButton
                  onClick={() => router.push("/blogs")}
                  variant={"link"}
                  className="m-0 p-0"
                  key={index}
                >
                  <strong key={index} className="hover:text-tertiary">
                    # {topic}{" "}
                  </strong>
                </DynamicButton>
              ))}
              .
            </p>
            <p>
              Check out our other posts on our{" "}
              <DynamicButton
                onClick={() => router.push("/blogs")}
                variant={"link"}
              >
                Blog
              </DynamicButton>{" "}
              to stay informed about best practices and emerging trends.
            </p>
          </footer>
        </div>
      )}
    </>
  );
};

export default BlogPostPage;
