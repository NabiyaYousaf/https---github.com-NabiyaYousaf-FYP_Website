import React,{useEffect} from 'react'
import ServiceData from '../Data/ServiceData';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    useEffect(()=>{
        AOS.init();
    },[]);
  return (
    <>
            <h1 className='text-center mb-5 sh abh'>Our Services</h1>
    <center>
        <section className='services'>
            <div className='container'>
                <div className='row gy-3 mediaservice'>
                {
                    ServiceData.map((curElement)=>{
                        return(
                            <>
                                <div className='col-10 col-md-6 col-xl-4 '>
                                    <div className="box">
                                        <div className="icon">0{curElement.id}</div>
                                        <div className="content">
                                            <h3>{curElement.className}</h3>
                                            <p>{curElement.description}.</p>
                                            <a href="#" className='classNameNo '>{curElement.className}</a>
                                        </div>
                                    </div>                                 
                                </div>
                            </>
                        )
                    })
                }
                   


                </div>
            </div>
        </section>
    </center>
    </>
  )
}

export default Services
