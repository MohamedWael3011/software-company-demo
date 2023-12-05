import Typed from 'react-typed';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

export default function Hero() {
  const appRef = useRef(null);
  const heroText = useRef(null);
  const textAnimationRef = useRef(null);
  const imageRef = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    const ctx = gsap.context(() => {

    tl.from(heroText.current, {
      duration: 1.4,
      x: -1000,
      ease: "power4.out", 
    }).from(".btn",{
      opacity:0,
      duration:1,
      stagger:0.5,
      ease: "power4.out", 

    })
    .from(imageRef.current,{
      opacity:0,
      x:200,
      y:-200,
      duration:1,
      ease: "linear", 
      delay:-0.6,

    })
    .to("#turbulence",{
      attr:{baseFrequency:'0 0'},
      duration:1,
      ease: "linear", 
      delay:-0.8


    })
 
    .from(".animetext",{
      opacity:0,
      display:'none',
      duration:1.2,
      ease: "linear", 
      
    })

    ;
    }, appRef); 
    
    return () => ctx.revert(); 
  }, [tl]);


  return (
    <div className="w-full flex justify-center">

      <div ref={appRef} className="lg:grid lg:grid-cols-2 flex flex-col justify-evenly h-screen xl:max-w-[1280px] w-full mt-[15vw] relative z-10  m-0 overflow-hidden">
        <div className="md:text-6xl lg:text-5xl md:h-auto h-fit text-3xl text-white lg:text-start text-center flex flex-col items-center gap-10 ">
          <div ref={heroText} className='sm:py-16 py-6'>
            <p>Lets build your</p> <br />
            <span className='flex'>
              <p className='text-primary'>{"{"}</p>
              <Typed className='text-secondary animetext' strings={["Software","System","Website"]} typeSpeed={80} backSpeed={100} loop  />
              <p className='text-primary' ref={textAnimationRef}>{"}"}</p>
              <p>Together!</p>
            </span>
          </div>
          <div className='flex gap-5'>
            <Button  size="lg" className='btn'><div className='flex gap-4 items-center'>Get Started<ArrowRight  className='animate-fade-right animate-infinite animate-duration-[2000ms]'/> </div></Button>
            <Button  size="lg" variant="secondary" className='btn'>View Projects</Button>

          </div>
        </div>

        <div  ref={imageRef} className='flex  lg:items-start justify-center  h-full'>
        <svg className='hidden'>
        <filter id="noise" x='0%' y='0%' width='100%' height='100%'>
            <feTurbulence baseFrequency="0.02 0.03" result="NOISE" numOctaves="1" id="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20"></feDisplacementMap>
        </filter>
    </svg>
          <div className='heroImage w-3/4 h-3/5 lg:mx-[-150px]' >
          </div>
        </div>
      </div>
      </div>
  );
}
