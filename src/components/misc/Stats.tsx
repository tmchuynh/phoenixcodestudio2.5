const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function Stats() {
  return (
    <dl className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-20 xl:mt-16 max-w-xl">
      {stats.map( ( stat ) => (
        <div
          key={stat.id}
          className="flex flex-col gap-y-3 pl-6 border-l"
        >
          <dt className="text-sm/6">{stat.name}</dt>
          <dd className="order-first font-semibold text-3xl tracking-tight">
            {stat.value}
          </dd>
        </div>
      ) )}
    </dl>
  );
}