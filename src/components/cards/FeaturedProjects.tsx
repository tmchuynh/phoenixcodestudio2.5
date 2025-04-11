import { Button } from "@headlessui/react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";


export function FeaturedProject() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661277655789-729793a27ccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="card-image"
          width={500}
          height={300}
          className="rounded-2xl w-full h-full object-cover object-center"
          priority
        />
      </CardHeader>
      <CardContent>
        <CardTitle color="blue-gray" className="mb-2">
          UI/UX Review Check
        </CardTitle>
        <CardDescription>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}