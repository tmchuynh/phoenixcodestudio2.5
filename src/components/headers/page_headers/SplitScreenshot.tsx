import Image from "next/image";

export default function SplitScreenshot() {
  return (
    <div className="relative overflow-hidden isolate">
      <div className="lg:flex mx-auto px-6 lg:px-8 py-10 md:py-20 lg:py-24 pt-10 w-10/12">
        <div className="mx-auto lg:mx-0 lg:pt-8 max-w-2xl lg:shrink-0">
          <div className="mt-12 md:mt-18 lg:mt-20 xl:mt-32">
            <h4>Crafted With Purpose, Built With Passion</h4>
            <h1>Explore Our Portfolio of Successful Projects</h1>
            <p>
              Dive into our portfolio, a curated collection of projects where
              creativity meets functionality to produce outstanding results.
              Each piece of work reflects our commitment to pushing boundaries,
              solving complex challenges, and delivering solutions that are as
              innovative as they are effective. From bespoke web designs that
              capture the essence of a brand to high-performance applications
              that drive business growth, our portfolio showcases the depth and
              breadth of our expertise.
            </p>
            <p>
              Every case study tells a story of collaboration, problem-solving,
              and tailored solutions. We take pride in understanding the unique
              needs of each client, crafting digital experiences that not only
              meet their goals but exceed expectations. Whether it’s designing
              intuitive user interfaces, developing scalable platforms, or
              optimizing performance, our work is a testament to our dedication
              to quality, seamless user experiences, and measurable results.
            </p>
            <p>
              Our portfolio spans a variety of industries, highlighting our
              ability to adapt and innovate across different sectors. These
              projects demonstrate our proficiency in creating scalable,
              efficient, and visually stunning digital solutions that leave a
              lasting impact. Whether you’re looking for inspiration, exploring
              possibilities, or evaluating our capabilities, our portfolio is a
              reflection of the passion, expertise, and creativity we bring to
              every project. Let us show you how we can transform ideas into
              exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-none mx-auto mt-16 sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 xl:ml-32 max-w-2xl lg:max-w-none">
          <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
            <div className="bg-gray-900/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-900/10 ring-inset">
              <Image
                alt=""
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010123.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                width={2432}
                height={1442}
                className="shadow-2xl rounded-md ring-1 ring-gray-900/10 w-[76rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
