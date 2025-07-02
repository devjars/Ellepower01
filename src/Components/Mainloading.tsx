import AnimationData from "../assets/Animation - 1751370504240.json"
import Player from 'lottie-react';

function Mainloading() {
  return (
    <div  className='fixed z-50 top-0 w-screen h-screen flex justify-center items-center'>
      <div className='bg-base-100 p-4 w-full h-screen relative flex justify-center items-center'> 
      <Player
          autoplay
          loop = {false}
          animationData={AnimationData}
        />
        <div className="absolute bottom-[30%] left-[10%] pr-8">
         

        </div>
      </div>
    </div>
  )
}

export default Mainloading


