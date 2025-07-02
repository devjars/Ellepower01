import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type props = {
    img: string,
    blurrimg : string
    title : string
    classname : string
    imgclass : string

}
function SpecialtyCard({img,blurrimg,title,classname,imgclass} : props) {
  return (
   <figure className={`${classname} w-full relative rounded-xl overflow-hidden max-h-[350px] lg:max-h-full max-w-[550px] shadow-md `}>
          <div className="absolute inset-0 w-full bg-black/50 z-10" />
                <LazyLoadImage
            src={img}
            placeholderSrc={blurrimg}
            effect="blur"
            loading="lazy"
            alt={title}
            className={`${imgclass} lg:w-[500px] object-cover`}
          />
           <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl"> {title}</p>
</figcaption>
        </figure>
  )
}

export default SpecialtyCard
