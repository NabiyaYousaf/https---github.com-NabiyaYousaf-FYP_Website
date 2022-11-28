import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
const Header = () => {
  return (
    <>
      <header>
            <div  className="main-container">
                <div className='main'>
                        <motion.h1 className='display-2' initial={{y:'-100vh'}}
                     animate={{y:0}}
                     transition={{ ease: "easeOut", duration: 2 }}>
                          <span>
                              {/* Style will be inherited from the parent element */}
                              <Typewriter
                                words={['Learn Math With Us 📝 ', 'Nothing is Impossible ✌️','Keep Smiling 🥰']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                              />
                          </span>
                        </motion.h1>
                        <p className='main-hero-para'
                         
                        >“For the things we have to learn before we can do them, we learn by doing them.” “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” “The beautiful thing about learning is that nobody can take it away from you.”</p>
                        <h3>“Learning never exhausts the mind.” </h3>
                        
                        <button className="btn btn-style mt-3" style={{width:"20rem"}} type="submit" initial={{x:'-100vw'}}
                     animate={{x:0}}
                     transition={{ ease: "easeOut", duration: 2 }}>Your First Choice</button>
 
                </div>
            </div>
      </header>
    </>
  )
}

export default Header
