import Image from "next/image";

export default function DividerImage() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden isolate">
      {/* Decorative Background Image */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1664297844174-d7dfb8d0e7f1?w=800&auto=format&fit=crop&q=60"
        alt="Decorative coding background"
        fill
        className="-z-10 rounded-xl object-cover"
        priority
      />

      {/* Optional Gradient Overlay */}
      <div className="-z-10 absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />

      {/* Content Slot (Optional) */}
      <div className="text-center">
        <h2 className="font-bold text-3xl sm:text-4xl tracking-tight">
          Elevate Your Online Presence
        </h2>
        <p className="mt-4 text-lg leading-8">
          Experience thoughtful design with impactful visuals and seamless interaction.
        </p>
      </div>
    </div>
  );
}
