import Item from "../assets/Item"
import SectionFrame from "../Components/SectionFrame"
import { Link } from "react-router-dom"

function Product() {
  return (
       <SectionFrame
    label="Our Product"
    link="services"
        headline=" Product"
      subheadline="We supply a wide range of high-quality electrical products, carefully selected to meet the demands of both residential and commercial applications, ensuring safety, efficiency, and long-lasting performance."
      buttonlabel="Contact us to Inquire"
      buttonlink="/services">



<div className="w-full carousel carousel-center  rounded-box  space-x-4 p-4 mt-16 mx-4 lg:hidden">
  
  {Item.map((item,index)=>(
    <figure key={index} className="carousel-item flex flex-col items-center justify-center bg-white p-2 rounded-2xl">
    <img
      src={item.image}
      className="w-[300px] h-[300px] object-contain bg-white rounded-xl" />

      <figcaption>
        <h3 className="mt-4 text-xl font-medium font-primary text-accent">{item.name}</h3>
      </figcaption>
  </figure>
  ))}
   

</div>
 <div className="w-full flex justify-center items-center mt-8 lg:hidden">
    <Link to="/product" className="btn btn-wide btn-primary btn-outline   mx-auto font-bold font-primary py-6 uppercase">
        View All
    </Link> 
 </div>

<div className="hidden w-full lg:grid grid-cols-4 gap-2 mt-16">
    {Item.map((item,index)=>(
        <figure key={index} className={`${index === 8 ? "col-start-2" : ""} max-h-[400px] h-full bg-white p-3 flex flex-col items-center text-center rounded-lg`}>
            <img src={item.image} alt={item.name} loading="lazy" className="max-h-[200px] object-contain bg-white" />
            <figcaption>
                <h2 className="font-medium text-lg mt-2 text-primary">{item.name}</h2>
                <p className="text-sm font-tertiary mt-4">{item.description}</p>
            </figcaption>
        </figure>
    ))}
</div>


        
   </SectionFrame>
  )
}

export default Product
