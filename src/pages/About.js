import React,{useEffect} from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const About = () => {
    // useEffect(()=>{
    //     AOS.init();
    // },[]);
  return (
    <>
    <h1 className='text-center my-5 sh abh'>About Us</h1>
        <div className='container about py-4'>
        
            <div className='row bottom'>
            
                {/* <div className='col-10 col-lg-6 order-lg-first order-last pt-3 ' data-aos="fade-down-right" data-aos-delay="100"> */}
                <div className='col-10 col-lg-6 order-lg-first order-last pt-3'>
                    
                    <p><span>MathWithKids </span> your child can learn math .It is the building block for everything in our daily lives, including mobile devices, computers, software money, engineering and even sports.</p>
                    <p>
                    The more people in a society are educated, the more they can provide a beneficial contribution to their environment.Future jobs are directly linked to the education of today.
                    </p>
                    <p id="hide">
                    This is one of the biggest reasons why parents strive to make their kids attend school as long as possible. It is also why nations work toward promoting easier access to education for both children and adults.It helps people become better citizens, get a better-paid job, shows the difference between good and bad.
                    </p>
                </div>
                <div className='col-10 col-lg-6 about-img text-center order-lg-last order-first'>
                    <img src="./images/about.svg" alt="about" className='img-fluid' />
                </div>
            </div>
        </div>  
    </>
  )
}

export default About
