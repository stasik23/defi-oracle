import {BigCard} from "@/app/component/BigCard";
import {SmallCard} from "@/app/component/SmallCard";
export default function Home() {
  return (
    <div className={`flex flex-col`}>
      <BigCard  />
      <SmallCard/>
    </div>

  );
}
