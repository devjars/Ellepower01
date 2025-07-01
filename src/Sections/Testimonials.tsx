import Label from "../Components/Label"
import TestimonialCard from "../Components/TestimonialCard"
import prof1 from "../assets/fakeprof.webp"

export type testimonials = {
    message : string
    image : string,
    name : string,
    position : string
}
function Testimonials() {
       const client:testimonials [] = [
        {image : prof1,
         message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse cum quod eaque quis veritatis ab magnamis veritatis ab magnamis veritatis ab magnamis veritatis ab magnam sunt mol" ,
          name: "john doe",
        position : "electrical engineer"},
                {image : prof1,
         message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse cum quod eaque quis veritatis ab magnamis veritatis ab magnamis veritatis ab magnamis veritatis ab magnam sunt mol" ,
          name: "john doe",
        position : "electrical engineer"},
          {image : prof1,
         message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse cum quod eaque quis veritatis ab magnamis veritatis ab magnamis veritatis ab magnamis veritatis ab magnam sunt mol" ,
          name: "john doe",
        position : "electrical engineer"}
       
    ]
  return (
  <section className="w-full py-24 bg-base-100 flex flex-col items-center">

        <Label label="Testimonials" link="/" />
        <h2 className="mt-8 text-2xl font-bold px-4 lg:text-4xl">What Our <span className="text-primary">Client</span> Say About Us</h2>


     <div className='w-screen xl:w-full flex justify-center  mt-16 overflow-hidden '>
         <div className='w-[90%] md:w-[80%] lg:w-[95%]  flex  gap-4 overflow-y-auto no-scrollbar lg:justify-center lg:overflow-hidden '>
            {client.map((person)=>(
                <TestimonialCard message={person.message} image={person.image} name={person.name} position={person.position} />
            ))}
        </div>
       </div>

  </section>
  )
}

export default Testimonials
