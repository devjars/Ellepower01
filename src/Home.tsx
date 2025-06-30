import Partnership from './Components/Partnership'
import ServicesMarquee from './Components/ServicesMarquee'
import About from './Sections/About'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Specialty from './Sections/Specialty'

function Home() {
  return (
    <main className='w-full min-w-[300px] max-w-[1536px] mx-auto  '>
        <Hero/>
        <About/>
        <Partnership/>
        <ServicesMarquee/>
        <Services/>
        <Specialty/>
    </main>
  )
}

export default Home
