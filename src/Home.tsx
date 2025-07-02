import Partnership from './Components/Partnership'
import ServicesMarquee from './Components/ServicesMarquee'
import About from './Sections/About'
import ContactUs from './Sections/ContactUs'
import Hero from './Sections/Hero'

import { FaAngleDoubleUp } from "react-icons/fa";
import { lazy, Suspense, useEffect,  useState } from "react";
import IntersectionTrigger from './Components/IntersectionTrigger'
    const Services = lazy(()=> import('./Sections/Services'))
    const Specialty = lazy(()=> import('./Sections/Specialty'))
    const Product = lazy(()=> import('./Sections/Product'))

    const Testimonials = lazy(()=> import('./Sections/Testimonials'))


function Home() {
   const [showScrollTop, setShowScrollTop] = useState(false);

   const [serviceRef, isserviceVisible] = IntersectionTrigger()
   const [productRef, isproductVisible] = IntersectionTrigger()
   const [specialtyRef, isspecialtyVisible] = IntersectionTrigger()
   const [TestimonialRef, istestimonialVisible] = IntersectionTrigger()







  useEffect(() => {                                           
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollToTop = ():void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(()=>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  },[])

  
  return (
    <main className='w-full min-w-[300px] max-w-[1536px] mx-auto bg-base-100 '>
        <Hero/>
        <About/>
        <Partnership/>
        <ServicesMarquee/>
        <div className='h-1 mt-32' ref={serviceRef} />
       {isserviceVisible && <Suspense fallback={<div className="skeleton h-[30vh] w-full"></div>}>
         <Services/></Suspense>}

        <div  className='h-1 mt-32'   ref={specialtyRef} />
       {isspecialtyVisible &&  <Suspense fallback={<div className="skeleton h-[30vh] w-full"></div>}>
        <Specialty/>
        </Suspense>}

         <div  className='h-1 mt-32'  ref={productRef} />
       {isproductVisible &&  <Suspense fallback={<div className="skeleton h-[30vh] w-full"></div>}>
        <Product/>
        </Suspense> }

       <div  className='h-1 mt-32'  ref={TestimonialRef} />
       { istestimonialVisible &&   <Suspense fallback={<div className="skeleton h-[30vh] w-full"></div>}>
        <Testimonials/>
        </Suspense>}
        

       
        <ContactUs/>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-primary p-2 rounded-full fixed bottom-0 right-0 m-8 z-50 flex justify-center items-center shadow-lg hover:scale-110 transition cursor-pointer"
        >
          <FaAngleDoubleUp className="text-accent text-3xl" />
        </button>
      )}
    </main>
  )
}

export default Home
