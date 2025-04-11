import Image from "next/image";
import { Badge } from "../ui/badge";

export default function FeaturedArticles() {
  return (
    <div className="shadow-md pb-3 border rounded-2xl max-w-sm overflow-hidden">
      <Image className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1683134153517-32015af21911?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwY29kaW5nfGVufDB8fDB8fHww" alt="Sunset in the mountains"
        width={1200} height={800} />
      <div className="px-6 py-4">
        <div className="mb-2 font-bold text-xl">The Coldest Sunset</div>
        <p className="text-base className=">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 px-6 py-2">
        <Badge>#photography</Badge>
        <Badge>#travel</Badge>
        <Badge>#winter</Badge>
      </div>
    </div>
  );
}