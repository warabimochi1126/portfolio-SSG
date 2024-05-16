import { AnimationWrapper } from "./component/home/AnimationWrapper";
import { Mainpage } from "./component/home/Mainpage";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AnimationWrapper> 
        <Mainpage />
      </AnimationWrapper>
    </div>
  )
}