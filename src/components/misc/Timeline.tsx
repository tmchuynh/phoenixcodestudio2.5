import { Timeline } from "@/components/ui/timeline";
import { data } from "@/lib/constants/about/timeline.tsx";

export function TimelinePage() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
