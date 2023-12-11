import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

import Img1 from '../assets/service.png'

// servers data
const services = [
  {
    name: 'Pa Sang Mae Chan Management System Website  ',
    description:
      'Responsive Design : Design and create a responsive login page for both Desktop and Mobile sizes.' +
      ' Operations : Develop CRUD functionalities for managing department types and personal account settings.' +
      ' Front-End Development : Create the front-end using PHP, Vue.js, and Tailwind CSS.',
    link: 'Learn more'
  },
  {
    name: 'Chiang Rai Tourism and Sports Office Website',
    description:
      'Responsive Design : Create a website that is responsive in 3 sizes Desktop, Tablet, and Mobile.' +
      ' Operations : Implement CRUD functionalities to manage all processes on the website, utilizing the Ajax technique for API calls.' +
      ' Front-End Development : Create the front-end using PHP, Vue.js, and Tailwind CSS.',
    link: 'Learn more'
  },
  {
    name: 'Centralized Web Management System For Internal Services Of Office : CWMISO',
    description:
      'Design : Design the database and UX/UI for Desktop size only.'+
      'Operations : Implemented backend API with Authentication and front-end CRUD operations covering the entire website system, utilizing the Axios API calling technique.'+
      'Back-End Development : Use Node JS and MySQL following the MVVM pattern.' +
      'Front-End Development : Utilize JavaScript, Vue.js, Tailwind CSS, and Vuetify.',
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          {/* text & image*/}
          <motion.div variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-6'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <p className='max-w-sm mb-16'>
            This is the details of my project work, comprising a total of 3 projects.
            {/* "นี้คือรายละเอียดของงานในโปรเจกต์ของฉัน ที่ประกอบด้วยทั้งหมด 3 โปรเจกต์ */}
            </p>
            <button>
              <Link to='work' smooth={true} spy={true} className='active-button btn btn-sm'>
              View all project
              </Link>
              </button>
              <img src={Img1} alt='' className='h-[460px] w-auto hidden lg:block'/>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service
                return (
                  <div className='' key={index}>
                    <div className='mb-6'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                      <div className='border-b border-white/20 my-5'></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
