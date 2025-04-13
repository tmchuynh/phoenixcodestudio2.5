import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  formatNumber,
  generateSlug,
  parseReadingTimeToMinutes,
} from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function BlogCard({ blog }: { blog: any }) {
  const router = useRouter();

  return (
    <Card className="shadow-lg hover:shadow-2xl border hover:border-gray-200 border-transparent rounded-2xl max-w-md transition">
      <CardHeader className="relative h-56">
        <Image
          src={`/images/blog_card_images/${generateSlug(blog.title)}.jpg`}
          alt={blog.title}
          layout="fill"
          className="rounded-t-2xl object-cover"
          priority
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2 font-bold text-2xl text-gray-900">
          {blog.title}
        </CardTitle>
        {(blog.wordCount || blog.time) && (
          <div className="flex justify-between mb-2 text-gray-500 text-sm">
            {blog.wordCount && (
              <span>
                <strong>Words:</strong> {formatNumber(blog.wordCount)}
              </span>
            )}
            {blog.time && (
              <span>
                <strong>Read:</strong> {parseReadingTimeToMinutes(blog.time)} m
              </span>
            )}
          </div>
        )}
        <CardDescription className="mb-4 text-gray-700">
          {blog.excerpt}
        </CardDescription>
        {blog.topics && blog.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.topics.sort().map((topic: string, index: number) => (
              <Badge key={index} variant="secondary" className="cursor-pointer">
                {topic}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pt-0 pb-4">
        <Button
          onClick={() => router.push(`/info/blogs/${generateSlug(blog.title)}`)}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
