"use client";
import { TimelineEntry } from "@/lib/interfaces/about";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="md:px-10 w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative space-y-30 mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10 pt-10">
            <div className="top-40 z-40 sticky flex md:flex-row flex-col items-center md:w-full max-w-xs lg:max-w-sm transition-all duration-700 ease-in-out self-start">
              <div className="left-3 md:left-3 absolute flex justify-center items-center bg-white dark:bg-black rounded-full w-10 h-10">
                <div className="bg-muted p-2 border border-neutral-300 dark:border-neutral-700 rounded-full w-4 h-4" />
              </div>
              <div className="relative flex flex-col mx-auto pl-20 md:w-full">
                {item.subtitle && <h5>{item.subtitle}</h5>}
                <h2 className="mt-0">{item.title}</h2>
              </div>
            </div>

            <div className="md:block relative hidden pr-4 pl-20 md:pl-4 w-full">
              <div>
                <div className="mb-4">
                  {item.caption && <h3>{item.caption}</h3>}
                  {item.description && <p>{item.description}</p>}
                </div>
                {item.list && (
                  <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7">
                    {item.list.map((listItem, listIndex) => (
                      <li key={listIndex} className="flex flex-col">
                        {listItem.title && <strong>{listItem.title}: </strong>}
                        <p>{listItem.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="top-0 left-8 md:left-8 absolute bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-[0%] from-transparent via-neutral-200 dark:via-neutral-700 to-[99%] to-transparent w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="top-0 absolute inset-x-0 bg-gradient-to-t from-[0%] from-primary via-[20%] via-tertiary/45 to-transparent rounded-full w-[2px]"
          />
        </div>
      </div>
    </div>
  );
};
