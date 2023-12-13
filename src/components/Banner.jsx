import React from 'react';
// import
// icon
import { FaGithub, FaYoutube, FaDribbble, FaFacebook, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';
const Banner = () => {
  return (
    <section className=' min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-y-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              SUPAPIT <span>INPANG</span>
            </motion.h1>

            <motion.div variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[50px] font-semibold uppercase leading-[1]'>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Web Developer',
                  2000,
                ]}
                speed={20}
                className='text-accent'
                repeat={Infinity}
              // wrapper='span'
              />
            </motion.div>

            <motion.p variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-7 max-w-lg mx-auto lg:mx-0'>
              Hi, I'm Supapit Inpeng, a recent graduate actively seeking opportunities in the field of Front-End Developer.
            </motion.p>

            <motion.div variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'>
                <Link to='contact' smooth={true} spy={true} className='btn-link rounded-full'>
              <button className='btn btn-lg'>
                contact me
                </button>
                </Link>
              <Link to='work' smooth={true} spy={true} className='text-gradient btn-link rounded-full' >
              <button className='hover:bg-black/30 py-4 px-6 rounded-full border-2 border-white/40 hover:border-black/5 '>
                See All Project
              </button>
              </Link>
            </motion.div>

            {/* socials */}
            <motion.div variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.facebook.com/profile.php?id=100006311357469" target="_blank" title="Facebook" className='hover:text-sky-400'>
                <FaFacebook size={25}/>
              </a>
              <a href="https://github.com/Supapit-Pim" target="_blank" title="Github" className='hover:text-sky-400'>
                <FaGithub size={25}/>
              </a>
              <a href="https://www.linkedin.com/in/supapit-inpang-55095929b/" target="_blank"  title="Linkedin" className='hover:text-sky-400'>
                <FaLinkedin size={25}/>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] justify-center '>
            <div className='rounded-full h-96 w-96 bg-banner bg-center bg-cover' >
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
