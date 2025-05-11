"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ResponsiveLogo({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn("md:max-w-lg 2xl:max-w-none mx-auto", className)}>
      <Image
        alt="PCS Logo"
        src="/images/logo_circle.png"
        className={cn("w-auto h-40 xl:h-52 object-contain", imgClassName)}
        priority={true}
        width={3600}
        height={1200}
      />
    </div>
  );
}
