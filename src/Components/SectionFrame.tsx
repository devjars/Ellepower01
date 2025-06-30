import type { ReactNode } from "react"
import Label from "./Label"
import { Link } from "react-router-dom"
import { RxArrowTopRight } from "react-icons/rx";


type props = {
    label : string
    link : string
    highlight : string
    headline : string
    subheadline : string
    buttonlabel : string
    buttonlink : string
    children : ReactNode
}
function SectionFrame({label,link,headline,highlight,subheadline,buttonlabel,buttonlink,children} : props) {
  return (
    <section className="w-full  bg-base-100">
      <div className=" sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%]  mx-auto ">

        <div className="w-full flex flex-col items-center gap-6 lg:flex-row lg:items-start">
        <div className="w-full flex flex-col items-center lg:items-start">
            <Label link={link} label={label} />
            <h2 className="mt-8 font-bold text-2xl px-4 text-center  font-primary sm:text-2xl md:text-3xl lg:px-0 lg:text-5xl lg:text-left ">{headline} <span className="text-primary">{highlight}</span></h2>
        </div>
        <div className="w-full  flex flex-col items-center text-center gap-8 lg:items-end lg:text-end">
            <p className="font-tertiary px-4 text-sm md:text-base lg:px-0">{subheadline}</p>
            <Link to={buttonlink} className="flex items-center justify-center  btn btn-primary btn-wide rounded-full py-6 text-lg font-primary">
                {buttonlabel}
                <span><RxArrowTopRight/></span>
            </Link>
        </div>


      </div>

      <div>
        {children}
      </div>
      </div>
    </section>
  )
}

export default SectionFrame
