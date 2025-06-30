import Marquee from "react-fast-marquee";

function ServicesMarquee() {

    const service : string [] = ["RESIDENTIAL SERVICE","COMMERCIAL SERVICE","INDUSTRIAL SERVICE"]
  return (

        <Marquee direction="left" autoFill={true} speed={50} className="py-16 bg-base-100" pauseOnHover={true} >
                <ul className="py-6 bg-primary flex items-center gap-12">
            {service.map((serv,index)=>(
                <li key={index}  className="text-accent font-black text-xl mr-8">{serv}</li>
            ))}
              </ul>
        </Marquee>
      
  
  )
}

export default ServicesMarquee
