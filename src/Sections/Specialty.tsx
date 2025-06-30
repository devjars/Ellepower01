import image1 from "../assets/special1.webp"
import image2 from "../assets/special2.webp"
import image3 from "../assets/special3.webp"
import image4 from "../assets/special4.webp"
import image5 from "../assets/special5.webp"
import image6 from "../assets/special6 (1).webp"
import image7 from "../assets/special7.webp"

   type specialtytype = {
    img : string,
    text: string
  }
function Specialty() {
  

  const specialty : specialtytype [] = [
    {img : image1, text :"REMANUFACTURING OF DISTRIBUTION TRANSFORMERS"},
    {img : image2, text :"REWINDING OF POWER TRANSFORMER"},
    {img : image3, text :"REWINDING OF DISTRIBUTION TRANSFORMER"},
    {img : image4, text :"REWINDING OF AUTOMATIC RECLOSER"},
    {img : image5, text :"CONSTRUCTION & DESIGN"},
    {img : image6, text :"DISTRIBUTION & DESIGN"},
    {img : image7, text :"SUBSTATION"},
  ]
  return (
   <section className="h-full text-center bg-base-100 pt-24 ">
    <h2 className="text-xl font-bold ">Elle Power Specialty </h2>
        <div className="w-full mt-8 h-screen grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-8 gap-4">

        <figure  className="w-full bg-green-500  lg:row-span-4 ">
          <img src={image1} alt="REMANUFACTURING OF DISTRIBUTION TRANSFORMERS" />
           <figcaption className="text-white font-primary text-lg font-semibold">
          REMANUFACTURING OF DISTRIBUTION TRANSFORMERS
  </figcaption>
        </figure >
        <div className="w-full bg-pink-500   lg:row-span-3"></div>
        <div className="w-full bg-blue-500   lg:row-span-4"></div>
        <div className="w-full bg-amber-500  lg:row-span-5"></div>
        <div className="w-full bg-purple-500 lg:row-span-2"></div>
        <div className="w-full bg-red-500    lg:row-span-4"></div>
        <div className="w-full bg-red-500    lg:row-span-2 "></div>

        </div>
   </section>
  )
}

export default Specialty
