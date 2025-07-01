import AnimationData from "../assets/Animation - 1751370299303.json"
import Player from 'lottie-react';
import { Link } from "react-router-dom";

function FallBackPage() {
   
  return (
    <div  className='fixed z-50 top-0 w-screen h-screen flex justify-center items-center'>
      <div className='bg-base-100 p-4 w-full h-screen relative flex justify-center items-center'> 
      <Player
          autoplay
          loop
          animationData={AnimationData}
        />
        <div className="absolute bottom-[30%] left-[10%] pr-8">
          <Link to="/" className="btn btn-accent font-medium font-primary">
            Home Page
          </Link>
          <p className="mt-2 text-sm text-gray-500">We're still working on this page — check back soon!</p>

        </div>
      </div>
    </div>
  )
}

export default FallBackPage
