import { Timeline } from "@/components/ui/timeline";
import { TIMELINE_DATA } from "@/components/ui/TimeLineData";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white w-full">
      <Timeline data={TIMELINE_DATA} />
    </div>
  );
};

export default Home;
