import React from 'react';
// import HeroImage from '../assets/heroImage.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {Link} from 'react-scroll'

const HeroImage = 'https://avatars.githubusercontent.com/u/62291769?v=4';

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-10'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:pt-16 '>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold '>I'm a Front-End Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>I am highly interested in Tech like React and also interested in modern looking performance based development</p>

                    <div>
                        <Link to='portfolio' smooth={true} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                
                <div>
                    <img src={HeroImage} alt="person" className='rounded-2xl mx-auto w-2/3 md:w-full  ' />
                </div>
            </div>
        </div>
    )
}

export default Home;