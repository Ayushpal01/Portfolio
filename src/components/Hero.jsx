import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import insta from "../assets/insta.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Scroll Down<br className='sm:block hidden' />
            To know more about me !!
          </p>
        </div>
      </div>
      <div class ="fixed right-4 top-1/4 z-50 flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/ayush-pal-436104228/" title="LinkedIn" target="_blank" rel="noopener noreferrer" class="flx items-centre justify-centre bg-orange-900 hover:bg-slate-600 w-11 h11 text-white rounded-full">
          <img src={linkedin} alt="LinkedIN"/>
        </a>
        <a href="https://www.github.com/Ayushpal01" title="Github" target="_blank" rel="noopener noreferrer" class="flx items-centre justify-centre bg-blue-900 hover:bg-slate-600 w-11 h11 text-white rounded-full">
          <img src={github} alt="Github"/>
        </a>
        <a href="https://www.instagram.com/ayushpal_91" title="Instagram" target="_blank" rel="noopener noreferrer" class="flx items-centre justify-centre bg-green-900 hover:bg-slate-600 w-11 h11 text-white rounded-full">
          <img src={insta} alt="Instagram"/>
        </a>

      </div>
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
