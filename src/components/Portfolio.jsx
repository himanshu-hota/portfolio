import React from "react";

import NFT from '../assets/portfolio/NFT.png';
import Netflix from '../assets/portfolio/Netflix.png';
import Barber from '../assets/portfolio/Barber.png';
import Gravero from '../assets/portfolio/Gravero.png';
import XMDB from '../assets/portfolio/XMDB.png';
import Travel from '../assets/portfolio/Travel.png';
import Contacts from '../assets/portfolio/Contacts.png';
import Ecommerce from '../assets/portfolio/E-commerce.png';

const portfolios = [
  {
    id: 1,
    src: NFT,
    hostLink: 'https://nft-market-bc1da.web.app/',
    codeLink: 'https://github.com/himanshu-hota/nft-marketplace'
  },
  {
    id: 2,
    src: Netflix,
    hostLink: 'https://netflix-clone-3bbfc.web.app/',
    codeLink: 'https://github.com/himanshu-hota/Netflix-clone'
  },
  {
    id: 3,
    src: Contacts,
    hostLink: 'https://main--jocular-elf-15d6df.netlify.app/',
    codeLink: 'https://github.com/himanshu-hota/contacts'
  },
  {
    id: 4,
    src: Ecommerce,
    hostLink: 'https://e-com-c6253.web.app/',
    codeLink: 'https://github.com/himanshu-hota/ecommerce'
  },
  {
    id: 5,
    src: Barber,
    hostLink: 'https://himanshu-hota.github.io/Big-barber/',
    codeLink: 'https://himanshu-hota.github.io/Big-barber/'
  },
  {
    id: 6,
    src: Gravero,
    hostLink: 'https://himanshu-hota.github.io/Gravero/',
    codeLink: 'https://github.com/himanshu-hota/Gravero'
  },
  {
    id: 7,
    src: XMDB,
    hostLink: 'https://himanshu-hota.github.io/XMDB/',
    codeLink: 'https://github.com/himanshu-hota/XMDB'
  },
  {
    id: 8,
    src: Travel,
    hostLink: 'https://travel-some.firebaseapp.com/',
    codeLink: 'https://github.com/himanshu-hota/travel-some'
  },

];


const Portfolio = () => {
 
  const demoHandler = (e) => {
    const link = (e.target.attributes.getNamedItem("data-source").value);
    window.open(link, '_blank');
  }

  const codeHandler = (e) => {
    const link = (e.target.attributes.getNamedItem("data-source").value );
    window.open(link, '_blank');
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,codeLink,hostLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={src}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" data-source={hostLink} onClick={demoHandler} >
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" data-source={codeLink} onClick={codeHandler} >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
