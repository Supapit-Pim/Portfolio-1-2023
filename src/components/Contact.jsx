import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

// icons
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaPhone />,
    detail: '080-791-3846',
  },
  {
    icon: <MdEmail />,
    detail: 'supapit.3pim@gmail.com',
  },
  {
    icon: <FaLocationDot />,
    detail: 'Chiang Rai, Thailand',
  },
]
const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row h-[800px] lg:h-[740px]'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div className='w-full'>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 text-accent'>
                Let's work <br />
                together
              </h2>
              <div className='mb-20 lg:mb-52'>
                {contacts.map((contact, index) => {
                  const { icon, detail } = contact
                  return (
                    <div className='text-xl flex space-x-4 space-y-2 items-center '>
                      {icon}
                      <p>{detail}</p>
                    </div>
                  )
                })}

              </div>
              {/* socials */}
              <motion.div variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.7 }}
                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-10'>
                <a href="https://www.facebook.com/profile.php?id=100006311357469" target="_blank" title="Facebook" className='hover:text-sky-400'>
                  <FaFacebook size={25} />
                </a>
                <a href="https://github.com/Supapit-Pim" target="_blank" title="Github" className='hover:text-sky-400'>
                  <FaGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/supapit-inpang-55095929b/" target="_blank" title="Linkedin" className='hover:text-sky-400'>
                  <FaLinkedin size={25} />
                </a>
              </motion.div>
              <motion.div
               variants={fadeIn('up', 0.8)}
               initial='hidden'
               whileInView='show'
               viewport={{ once: false, amount: 0.3 }} 
              className=' mb-40 lg:mb-0 text-center lg:text-left  '>
                Design inspired by Cristian Mihai's YouTube.
                {/* ดีไซน์ได้รับแรงบันดาลใจจาก YouTube ของ Cristian Mihai  */}
              </motion.div>
            </div>
          </motion.div>
          {/* from */}

          <motion.div variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='lg:bg-no-repeat flex-1 bg-contact bg-contain bg-no-repeat h-[640px] mix-blend-screen bg-top mb-12 lg:mb-6 hidden lg:block'>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
