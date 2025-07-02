import SectionFrame from "../Components/SectionFrame"
import type { IconType } from "react-icons"
import Commersial from "../assets/commservice.webp"
import Commersialblurr from "../assets/commservice-blurr.webp"
import residential from "../assets/resiservice.webp"
import residentialblurr from "../assets/resiservice-blurr.webp"
import industrial from "../assets/industrial.webp"
import industrialblurr from "../assets/industrial-blurr.webp"
import { RiBuildingFill } from "react-icons/ri";
import { BsHousesFill } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";





type servicecard = {
    img : string,
    imgblurr : string
    headline : string
    subheadline : string
    icon  : IconType

}
function Services() {

    const service : servicecard [] = [
        {img :Commersial,
          imgblurr : Commersialblurr,
             headline : "Commercial Services", 
             subheadline:"Comprehensive wiring, lighting, and power system installations tailored for office buildings, retail spaces, and other commercial establishments.", icon :RiBuildingFill },
              {img :residential,
          imgblurr : residentialblurr,
             headline : "Residential  Services", 
             subheadline:"Reliable, safe, and energy-efficient electrical solutions designed to meet the unique needs of modern homes and improve daily living.", icon :BsHousesFill },
               {img :industrial,
          imgblurr : industrialblurr,
             headline : "Industrial   Services", 
             subheadline:"Expert installation, maintenance, and support for heavy-duty electrical systems used in factories, warehouses, and other industrial facilities.", icon :FaIndustry },
    ]

    

  return (
   <SectionFrame
   
    label="Our Services"
    link="notfound"
        headline=" Services"
      subheadline="Our experienced electricians expertly handle commercial, residential, and industrial electrical projects, delivering fast, reliable, and professional solutions tailored to your specific needs."
      buttonlabel="Book a Service"
      buttonlink="/notfound">

        <div className="w-full   grid grid-cols-1 gap-8 px-4 mt-16 justify-items-center lg:grid-cols-3 lg:gap-4">   
                {service.map((serv,index)=>(
                    <div key={index} className="bg-base-200  rounded-2xl overflow-hidden border border-base-300 max-w-[550px] " >
                          <div className="w-full">
                            <LazyLoadImage
                        src={serv.img}
                         placeholderSrc={serv.imgblurr} 
                         effect="blur" 
                         alt={`${serv.headline} image`}
                          className="h-[300px] w-[550px]  object-cover" 
                           />
                          </div>
                        <div className="w-full text-center p-4 relative">
                            <h2 className="mt-8 font-medium font-primary text-xl">{serv.headline}</h2>
                            <p className="mt-2 font-tertiary text-sm  md:text-base">{serv.subheadline}</p>
                            <serv.icon className="absolute top-0 left-1/2 -translate-x-1/2 p-4 bg-primary rounded-full text-6xl text-base-100 mt-[-2rem]" />

                        </div>
                       
                    </div>
                ))}
        </div>
   </SectionFrame>
  )
}

export default Services
