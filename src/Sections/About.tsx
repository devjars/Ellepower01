import Image1 from "../assets/team.webp"
import Image2 from "../assets/workwithus.jpg"


import { FaPeopleGroup,FaBolt,FaAward  } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import Label from "../Components/Label";
function About() {
  return (
    <section className="w-full  grid grid-cols-1 gap-16 px-2 bg-base-100 pt-8 md:px-12 lg:px-4 lg:gap-6 lg:grid-cols-2 xl:gap-12 lg:pt-16 xl:px-24 ">
        <div className="w-full  relative flex flex-col items-center gap-4 sm:w-[90%] lg:w-full  mx-auto xl:items-end ">
            <article className="w-full   rounded-2xl overflow-hidden md:min-h-[300px]"
            style={{backgroundImage:`url(${Image1})`, backgroundSize:'cover',backgroundPosition :'center',}}
             > 
             <div className="w-full h-full bg-black/70 p-6 ">
                <h2 className="flex items-center gap-2 font-medium text-2xl text-base-100 font-primary ">  <span className="bg-primary p-2 rounded-full text-xl"><FaPeopleGroup className="text-base-100 flex"/></span>
                 Elle Power Team</h2>
                <p className="text-base-100 mt-6  font-tertiary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis optio velit illum esse illo, cupiditate rem ab repellendus cum aspernatur vitae quaerat incidunt nulla ad in. Minima, veritatis. Amet, autem!</p>
             </div>
             </article>
           
           <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
             <div className="w-full  rounded-2xl overflow-hidden"
            style={{backgroundImage:`url(${Image2})`, backgroundSize:'cover',backgroundPosition :'center'}}
             > 
             <div className="w-full h-full bg-black/70 p-6 ">
                <h2 className="flex items-center gap-2 font-medium text-2xl text-base-100 font-primary lg:text-xl">  <span className="bg-primary p-2 rounded-full text-xl"><FaBolt className="text-base-100 flex"/></span>
                 Fast Service for Electrical</h2>
                <p className="text-base-100 mt-6  font-tertiary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis optio velit illum esse illo, cupiditate rem ab repellendus </p>
             </div>
             </div>
            <div className="w-full bg-base-200  p-4 rounded-2xl"> 
                <FaAward className="text-3xl text-primary"/>
                <h2 className="font-primary text-xl font-medium mt-2 ">20+ Best Awards Wining</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
           </article>

        </div>
        
        <div className="w-full lg:pr-8  ">
                <div className="flex flex-col  items-center text-center lg:text-left lg:items-start">
                    <Label link="/about" label="About"/>
         <h2 className="mt-8 font-bold text-2xl px-4 font-primary sm:text-2xl md:text-3xl lg:mt-4 ">Your trusted electrical <span className="text-primary">service partner</span></h2>
         <p className="mt-6 px-4 font-tertiary lg:px-0">With years of hands-on experience, our team provides reliable and top-quality electrical services for residential, commercial, and industrial needs. From installations to emergency repairs, we are committed to powering your projects with expertise and integrity.</p>
                    
                </div>


                <hr className="mt-8 text-base-200 mx-4" />

                <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:mt-4  ">
                     <FaHistory  className="text-4xl text-primary" />
                    <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left  ">
                    <h2 className="text-2xl font-medium font-primary">Our Story</h2>
                    <p className="mt-4 px-4 lg:px-0 lg:text-sm">Elle Power started with a simple goal — to deliver dependable and efficient electrical solutions backed by a team that values precision, safety, and customer satisfaction. What began as a small operation has grown into a trusted name in the industry.</p>
                    </div>
                </div>
                 <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:mt-4 ">
                     <LuGoal  className="text-4xl text-primary" />
                    <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left  ">
                    <h2 className="text-2xl font-medium font-primary">Our Mission</h2>
                    <p className="mt-4 px-4 lg:px-0 lg:text-sm">Our mission is to provide safe, efficient, and innovative electrical solutions that exceed client expectations. We aim to power homes and businesses with integrity, professionalism, and a strong commitment to quality service.</p>
                    </div>
                </div>
                 
        </div>

        
            

    </section>
  )
}

export default About
