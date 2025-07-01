import Partnership from './Components/Partnership'
import ServicesMarquee from './Components/ServicesMarquee'
import About from './Sections/About'
import ContactUs from './Sections/ContactUs'
import Hero from './Sections/Hero'
import Product from './Sections/Product'
import Services from './Sections/Services'
import Specialty from './Sections/Specialty'
import Testimonials from './Sections/Testimonials'

function Home() {
  return (
    <main className='w-full min-w-[300px] max-w-[1536px] mx-auto  '>
        <Hero/>
        <About/>
        <Partnership/>
        <ServicesMarquee/>
        <Services/>
        <Specialty/>
        <Product/>
        <Testimonials/>
        <ContactUs/>
    </main>
  )
}

export default Home
