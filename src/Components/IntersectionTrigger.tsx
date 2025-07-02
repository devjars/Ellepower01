import { useEffect, useRef, useState } from 'react'

function IntersectionTrigger() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible,setvisible] = useState(false)
    useEffect(()=>{

        const observer = new IntersectionObserver(([entry]) =>{
            if(entry.isIntersecting){
                setvisible(true)
                console.log(ref.current)
                observer.disconnect()
            } {
    threshold: 0.5 
  }
  {
    threshold: 0.5 
    rootMargin: '0px 0px -100px 0px'
  }
        })
        if(ref.current){
            observer.observe(ref.current)
        }
        return ()=> observer.disconnect()

    },[])

    return [ ref, visible] as const
}

export default IntersectionTrigger
