import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-img13 bg-contain bg-no-repeat h-[640px] mix-blend-screen bg-top'></motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              My name is Supapit Inpeng
            </h3>
            <p className='mb-6'>
              I am a new graduate with a background in frontend development. I recently graduated from computer engineering chiang rai rajabhat university with a degree in bachelor of engineering. <br/> <p className='mb-3'/>
              I have a 4 month internship experience at Chiangrai Enter Soft as a Front-End Developer and actively participated in a 7 month research project related to CMS within the same company. <br/> <p className='mb-3'/>
              I hope that you will give me the opportunity to join the team.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3.22} duration={3} decimals={2}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  GPA 
                </div>
              </div>
              {/* <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div> */}
            </div>
            {/* <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div> */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;