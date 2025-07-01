import { FaQuoteLeft,FaStar  } from "react-icons/fa";


export type testimonials = {
    message : string
    image : string,
    name : string,
    position : string
}
function TestimonialCard({image,name,position,message} : testimonials) {
  return (

    <div className='min-w-[85%] lg:min-w-0 lg:w-[30%]'>
        <div className='w-full flex flex-col items-center px-8 pt-8 pb-32 bg-white shadow-card'>
            <FaQuoteLeft className='text-6xl' />
         <blockquote className='py-8 font-secondary text-center'>
              “{message}”
        </blockquote>

            <div className='text-xl flex items-center'>
                 <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
                
            </div>
        </div>
        <div className='w-full grid place-items-center mt-[-3rem]'>
            <img className='w-[5rem] rounded-full' src={image} />
            <h1 className='text-2xl font-medium capitalize'>{name}</h1>
            <p className='font-secondary text-ctmred font-medium capitalize'>{position}</p>
        </div>
      
    </div>
  )
}

export default TestimonialCard
