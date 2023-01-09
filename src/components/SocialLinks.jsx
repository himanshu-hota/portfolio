import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs' 

const links = [
    {
        id: 1,
        child: (
            <>
                Linkedin <FaLinkedin size={30} />
            </>
        ),
        href: 'https://linkedin.com',
        style: 'rounded-tr-md'

    },
    {
        id: 2,
        child: (
            <>
                Github <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com',
        style: ''
    },
    {
        id: 3,
        child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:himanshuhota55@gmail.com',
        style: ''

    },
    {
        id: 4,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: 'resume.pdf',
        style: 'rounded-br-md',
        download: true
    },

]

const SocialLinks = () => {

 

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>

        <ul>

{
    links.map(link => (


            <li className={`flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500  ${link.style} `} key={link.id +'fcbhm'}><a href={link?.href} className='flex justify-between items-center w-full text-white '  download={link?.download} target='_blank' rel='noreferrer'>
               {link.child}
            </a>
            </li>
    ))}
        </ul>

    </div>
  )
}

export default SocialLinks;