import {
  FaBahai,
  FaCartPlus,
  FaDiceTwo,
  FaGetPocket,
  FaTty,
} from "react-icons/fa";

export default function IconAnimation() {
  return (
    <div className="flex justify-center isolate">
      <div className="relative top-0 left-4.5 place-items-center grid bg-muted shadow-lg rounded-xl ring-1 ring-black/[0.08] w-12 h-12 transition group-hover:-translate-x-10 group-hover:-translate-y-0.5 duration-500 group-hover:duration-200 -rotate-6 group-hover:-rotate-12">
        <FaTty />
      </div>
      {/* --------------------------- */}

      <div className="relative top-1.5 left-2.5 place-items-center grid bg-muted shadow-lg rounded-xl ring-1 ring-black/[0.08] w-12 h-12 transition group-hover:-translate-x-5 group-hover:-translate-y-0.5 duration-500 group-hover:duration-200 -rotate-6 group-hover:-rotate-12">
        <FaGetPocket />
      </div>
      {/* --------------------------- */}

      <div className="z-10 place-items-center grid bg-muted shadow-lg rounded-xl ring-1 ring-black/[0.08] w-12 h-12 transition group-hover:-translate-y-0.5 duration-500 group-hover:duration-200">
        <FaDiceTwo />
      </div>

      {/* --------------------------- */}

      <div className="relative top-1.5 right-2.5 place-items-center grid bg-muted shadow-lg rounded-xl ring-1 ring-black/[0.08] w-12 h-12 transition group-hover:-translate-y-0.5 group-hover:translate-x-5 duration-500 group-hover:duration-200 rotate-6 group-hover:rotate-12">
        <FaBahai />
      </div>
      {/* --------------------------- */}
      <div className="relative top-0 right-4.5 place-items-center grid bg-muted shadow-lg rounded-xl ring-1 ring-black/[0.08] w-12 h-12 transition group-hover:-translate-y-0.5 group-hover:translate-x-10 duration-500 group-hover:duration-200 rotate-6 group-hover:rotate-12">
        <FaCartPlus />
      </div>
    </div>
  );
}
