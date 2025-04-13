import Image from "next/image";

export default function BentoGridPageHeader() {
  return (
    <div className="mx-auto py-24 md:py-32 w-11/12">
      <h4>This Is Where We've Been</h4>
      <h1>This Is Where We're Going</h1>
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 mt-10 sm:mt-16">
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] h-full overflow-hidden">
            <Image
              alt=""
              src="https://plus.unsplash.com/premium_photo-1683147779719-7455d190c982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-80 object-center object-cover"
              width={1200}
              height={800}
            />
            <div className="p-10 pt-4">
              <h4>Just a Dream</h4>
              <h2>The Vision</h2>
            </div>
          </div>
          <div className="absolute inset-px shadow-sm rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] ring-1 pointer-events-none" />
        </div>
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg lg:rounded-tr-[2rem]" />
          <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] h-full overflow-hidden">
            <Image
              alt=""
              src="https://plus.unsplash.com/premium_photo-1663091226871-2878f62a524d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-80 object-center object-cover"
              width={1200}
              height={800}
            />
            <div className="p-10 pt-4">
              <h4>Friends & Family Rallying Behind</h4>
              <h2>Encouragement & Support</h2>
            </div>
          </div>
          <div className="absolute inset-px shadow-sm rounded-lg lg:rounded-tr-[2rem] ring-1 pointer-events-none" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg lg:rounded-bl-[2rem]" />
          <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)] h-full overflow-hidden">
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-80 object-center object-cover"
              width={1200}
              height={800}
            />
            <div className="p-10 pt-4">
              <h4>The Blueprint</h4>
              <h2>Putting Pen to Paper</h2>
            </div>
          </div>
          <div className="absolute inset-px shadow-sm rounded-lg lg:rounded-bl-[2rem] ring-1 pointer-events-none" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg" />
          <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] h-full overflow-hidden">
            <Image
              alt=""
              src="https://plus.unsplash.com/premium_photo-1661418164801-4eb1fd33d5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-80 object-center object-cover"
              width={1200}
              height={800}
            />
            <div className="p-10 pt-4">
              <h4>Embracing Mistakes</h4>
              <h2>The First Steps</h2>
            </div>
          </div>
          <div className="absolute inset-px shadow-sm rounded-lg ring-1 pointer-events-none" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] h-full overflow-hidden">
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlb3BsZSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-80 object-center object-cover"
              width={1200}
              height={800}
            />
            <div className="p-10 pt-4">
              <h4>Even When Days Are Hard</h4>
              <h2>Taking It One Day at a Time</h2>
            </div>
          </div>
          <div className="absolute inset-px shadow-sm rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] ring-1 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
