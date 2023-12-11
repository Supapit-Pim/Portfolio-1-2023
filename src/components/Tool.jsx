import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

// icons
import { IoLogoVue, IoLogoJavascript } from "react-icons/io5";
import { FaNode, FaCss3Alt, FaHtml5, FaGitlab, FaGithub, FaSlack, FaTrello } from "react-icons/fa";
import { SiTailwindcss, SiVuetify, SiVisualstudiocode, SiGitextensions, SiPhpmyadmin, SiPostman, SiSwagger, SiMysql  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skills = [
  {
    icon: <IoLogoVue size={30} />,
    name: 'Vue JS',
  },
  {
    icon: <FaNode size={40} />,
    name: 'Node JS',
  },
  {
    icon: <FaCss3Alt size={30} />,
    name: 'CSS',
  },
  {
    icon: <FaHtml5 size={30} />,
    name: 'HTML',
  },
  {
    icon: <IoLogoJavascript size={30} />,
    name: 'JavaScript',
  },
  {
    icon: <SiMysql size={40} />,
    name: 'MySQL',
  },
  {
    icon: <SiTailwindcss size={30} />,
    name: 'Tailwind CSS',
  },
  {
    icon: <SiVuetify size={30} />,
    name: 'Vuetify',
  },
]

const tools = [
  {
    icon: <SiVisualstudiocode size={30} />,
    name: 'Visual Studio Code',
  },
  {
    icon: <GrMysql size={30} />,
    name: 'MySQL Workbench',
  },
  {
    icon: <SiPhpmyadmin size={30} />,
    name: 'phpMyAdmin',
  },
  {
    icon: <SiPostman size={30} />,
    name: 'Postman',
  },
  {
    icon: <SiSwagger size={30} />,
    name: 'Swagger UI',
  },
  {
    icon: <SiGitextensions size={30} />,
    name: 'Git Extensions',
  },
  {
    icon: <FaGitlab size={30} />,
    name: 'GitLab',
  },
  {
    icon: <FaGithub size={30} />,
    name: 'GitHub',
  },
  {
    icon: <FaSlack size={30} />,
    name: 'Slack',
  },
  {
    icon: <FaTrello size={30} />,
    name: 'Trello',
  },
]

const Tool = () => {
  return (
    <section className='section' id='tool' >
      <div className='container mx-auto '>
        <div className='flex flex-col space-y-28'>
          <motion.div 
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}>
            <h2 className='h2 text-accent flex justify-center'>SKILLS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
              {skills.map((skill, index) => {
                // destructure service
                const { icon, name } = skill
                return (
                  <div className='flex justify-center items-center text-2xl space-x-3 bg-black/30 p-4 rounded-2xl'>
                    {icon}<h3>{name}</h3>
                  </div>
                )
              })}
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}>
            <h2 className='h2 text-accent flex justify-center'>TOOLS</h2>
            {/* <div className='grid grid-cols-4 gap-4'> */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
              {tools.map((tool, index) => {
                // destructure service
                const { icon, name } = tool
                return (
                  <div className='flex justify-center items-center text-2xl space-x-3 bg-black/30 p-4 rounded-2xl'>
                    {icon}<h3>{name}</h3>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tool;