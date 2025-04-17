"use client";

import DynamicButton from "@/components/button/button-dynamic";
import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/interfaces/blogs";
import { convertToDate } from "@/lib/utils/convert";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
                <div className="flex md:flex-row-reverse flex-col md:justify-between items-center space-x-6">
                  <div className="flex space-x-2">
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
                  className="shadow-lg mx-auto md:mt-4 xl:mt-0 mb-2 rounded-2xl w-full h-full object-cover object-center self-center aspect-video"
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
                      ) : null}{" "}
                      <p>{subList.description && subList.description}</p>
                      {subList.list &&
                        subList.list.map((innerList, innerIndex) =>
                          innerList.title ? (
                            <div key={innerIndex}>
                              <p>
                                {innerList.title && (
                                  <>
                                    <strong className="text-secondary">
                                      {innerList.title}:
                                    </strong>{" "}
                                  </>
                                )}
                                {innerList.description && innerList.description}
                              </p>

                              {innerList.list && (
                                <ul className="mt-0 list-decimal list-inside">
                                  {innerList.list.map((b_list, b_index) => (
                                    <li key={b_index}>
                                      {b_list.title && (
                                        <strong className="text-foreground">
                                          {b_list.title}:{" "}
                                        </strong>
                                      )}
                                      {b_list.description}

                                      {b_list.list && (
                                        <ul className="mt-2 ml-4">
                                          {b_list.list.map(
                                            (c_list, c_index) => (
                                              <li key={c_index}>
                                                {c_list.title && (
                                                  <strong className="text-tertiary">
                                                    {c_list.title}:{" "}
                                                  </strong>
                                                )}
                                                {c_list.description}

                                                {c_list.list && (
                                                  <ul className="mt-2 list-decimal list-inside">
                                                    {c_list.list.map(
                                                      (d_list, d_index) => (
                                                        <li key={d_index}>
                                                          {d_list.title && (
                                                            <strong>
                                                              {d_list.title}:{" "}
                                                            </strong>
                                                          )}
                                                          {d_list.description}

                                                          {d_list.list && (
                                                            <ul className="ml-5">
                                                              {d_list.list.map(
                                                                (
                                                                  e_list,
                                                                  e_index
                                                                ) => (
                                                                  <li
                                                                    key={
                                                                      e_index
                                                                    }
                                                                  >
                                                                    {e_list.title && (
                                                                      <strong className="text-foreground">
                                                                        {
                                                                          e_list.title
                                                                        }
                                                                        :{" "}
                                                                      </strong>
                                                                    )}
                                                                    {
                                                                      e_list.description
                                                                    }
                                                                  </li>
                                                                )
                                                              )}
                                                            </ul>
                                                          )}
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                )}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <ul key={innerIndex}>
                              <li>
                                {innerList.description && innerList.description}
                              </li>
                            </ul>
                          )
                        )}
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
