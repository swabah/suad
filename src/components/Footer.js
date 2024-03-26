import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'
import logo from './ahlussuffalogo1.png'
import links from '../assets/Links'
import { footeritems } from '../data/FooterData';
import { Link } from 'react-router-dom';



function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <div class=" px-3 md:px-7 lg:px-20 bg-[#070307] py-8 md:py-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="flex justify-center text-[#fdfbfe] sm:justify-start" >
              <Link to='/'>
                <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                  src={logo} className='w-16 md:w-20' alt="" />
              </Link>
            </div>
            <p class="mt-2.5 md:mt-5  text-sm md:text-base max-w-md text-center opacity-80 leading-relaxed text-[#fdfbfe]  sm:max-w-xs sm:text-left" >
              Ahlussufla travelling on the right way to forge potential products by conducting effective trainings and developmenta bootcamps
            </p>
            <div className='mt-2.5 md:mt-5 flex justify-center text-[#fdfbfe] gap-6 sm:justify-start md:gap-5'>
              <a className='text-2xl transition hover:text-[#ebd6f5]/75 opacity-80' href={links.youtube.url}><FaYoutubeSquare /></a>
              <a className='text-2xl transition hover:text-[#ebd6f5]/75 opacity-80' href={links.instagram.url}><FaInstagram /></a>
              <a className='text-2xl transition hover:text-[#ebd6f5]/75 opacity-80 pr-5' href={links.facebook.url}><FaFacebook /></a>
            </div>
          </div>

          <div class="text-center mt-5 md:mt-0 sm:text-left grid grid-cols-2 gap-5 md:gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {footeritems.map((data) => (
              <li
                className="text-lg text-start font-medium text-[#fdfbfe] drop-shadow-lg shadow-[#72bf44] list-none opacity-90 capitailze"
              >
                {data.head}
                <nav aria-label="Footer About Nav" class="mt-2 md:mt-4">
                  {data.subhead.length > 0 && (
                    <ul
                      className="space-y-2 text-start md:space-y-4 text-sm md:text-base"
                    >
                      {data.subhead.map((subitem) => (
                        <Link to={subitem.url}>
                          <li onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                            className="text-[#fdfbfe] opacity-80 transition font-normal hover:text-[#fdfbfe]/75 capitalize pt-3">
                            {subitem.item}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </nav>
              </li>
            ))}
          </div>
        </div>

        <div class="mt-12 border-t border-gray-100 pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-[#fdfbfe]">
              <span class="block sm:inline opacity-80">All rights reserved.</span>

              <a
                class="inline-block text-[#fdfbfe] underline transition hover:text-[#fdfbfe]/75 "
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                class="inline-block text-[#fdfbfe] underline transition hover:text-[#fdfbfe]/75 "
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p
              class="mt-4 text-sm text-[#fdfbfe] opacity-80 sm:order-first sm:mt-0"
            >
              &copy; 2023 Suffa Coder's
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;