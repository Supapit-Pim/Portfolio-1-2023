import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

// img
import Img1 from '../assets/work-1.png'
import Img2 from '../assets/work-2.png'
import Img3 from '../assets/work-3.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work.</h2>
              <p className='max-w-sm mb-24'>
              This is an example of the appearance of my work, which consists of a total of 3 projects together.
              {/* นี้คือตัวอย่างที่แสดงภาพลักษณ์ของงานของฉัน ซึ่งประกอบด้วยทั้งหมด 3 โปรเจกต์ร่วมกัน.  */}
              </p>

              <button>
                <Link to='services' smooth={true} spy={true} className='active-button btn btn-sm'>
                  See all project details
                </Link>
              </button>

            </div>
            {/* image1 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* oversay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img1} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 
              group-hover:bottom-32 transition-all duration-500 z-50'>
                <span className='text-gradient'>Full Stack</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Centralized Web Management System For Internal Services Of Office : CWMISO </span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6'>
            {/* image2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* oversay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img2} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 
              group-hover:bottom-32 lg:group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Pa Sang Mae Chan Management System Website  </span>
              </div>
            </div>

            {/* image3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* oversay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img3} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 
              group-hover:bottom-32 lg:group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Chiang Rai Tourism and Sports Office Website</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
