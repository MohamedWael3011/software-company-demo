import { Facebook, Instagram, Menu, Twitter, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";

import NavList from './NavList';
import { PRODUCTS, SOLUTIONS } from '../../Footer/data';

export default function NavBar() {
    const [sideBar,setSideBar] = useState(false);
    const navRef = useRef(null);
    const handleSideBar = ()=>{
        setSideBar(prev =>!prev);
    }

    useEffect(()=>{
    const tl = gsap.timeline();

    const ctx = gsap.context(() => {
        tl.from(navRef.current,{
            y:-20,
            opacity:0,
            duration:1
        })
    },navRef)

    return () => ctx.revert(); 

    },[])
  return (
    <div className='fixed top-0 w-full z-20  flex justify-center'>
    <div ref={navRef} className='flex  xl:max-w-[1280px] w-full justify-between items-center max-w-[1240px] mx-auto p-5 text-white bg-primary md:mt-4  rounded-xl'>
        <h2 className='text-3xl font-bold w-full'>LOGO</h2>
        <ul className='hidden md:flex'>
            <li className='flex items-center navitem px-4 whitespace-nowrap hover:bg-secondary hover:rounded-xl  hover:duration-300 hover:ease-in'><a href='#'>Contact us</a></li>
            <li className='flex items-center navitem px-4 whitespace-nowrap'><NavList title='Solutions' listItems={SOLUTIONS}/></li>
            <li className='flex items-center navitem px-4 whitespace-nowrap'><NavList title='Products' listItems={PRODUCTS}/></li>
            <div className='flex items-center gap-4 navitem px-4 whitespace-nowrap'>
                <a href='#' className='hover:bg-secondary hover:duration-300 hover:rounded-xl hover:ease-in p-2'><Facebook/></a>
                <a href='#' className='hover:bg-secondary hover:duration-300 hover:rounded-xl hover:ease-in p-2'><Twitter/></a>
                <a href='#' className='hover:bg-secondary hover:duration-300 hover:rounded-xl hover:ease-in p-2'><Instagram/></a>
            </div>



        </ul>
        <div onClick={handleSideBar} className='block md:hidden'>
            { !sideBar? <Menu size={20}/>:<X size={20}/>}
        </div>
        <div className={sideBar?`fixed left-0 top-0 w-[80%] h-screen border-r bg-primary text-white ease-in-out duration-500`:'fixed left-[-100%]'}>
        <h2 className='text-3xl font-bold w-full m-4 bg-'>LOGO</h2>

            <ul className='uppercase flex flex-col gap-10 p-4'>
            <li className='border-b'><a>contact us</a></li>
            <li className='border-b'><NavList title='SOLUTIONS' listItems={SOLUTIONS}/></li>
            <li className='border-b'><NavList title='PRODUCTS' listItems={PRODUCTS}/></li>
            </ul>
        </div>
    </div>
    </div>
  )
}
