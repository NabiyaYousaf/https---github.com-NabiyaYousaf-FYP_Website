import React,{useEffect} from 'react';
import {Box,Grid,Tabs,Tab,Alert,TextField,TextareaAutosize} from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact=()=>{
    useEffect(()=>{
        AOS.init();
    },[])
    return(
        <>
            <section className="contact pb-5">
                <div className="container-fluid">
                <h1 className='text-center mb-5 sh'>Contact Us</h1>
                    <div className="row contactmedia">
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'> 
                                <div className="col-10 col-lg-6  contactmedia" >
                                    <img src="./images/kidContact.svg" alt="ContactImage" className="img-fluid" />
                                </div>
                                <div className="col-10 col-lg-6 right-contact" data-aos="zoom-in-left" data-aos-delay="200">
                                <form>
                            <div className='row contactmedia'>
                                <div className='my-3 col-10 col-lg-6'>                               
                                    <input type="text" placeholder='First Name' className="form-control" />
                                    {/* <TextField
                                        required fullWidth
                                        margin='normal'
                                        id="fname"
                                        name="fname"
                                        label="Fisrt Name"
                                        type="name"
                                    /> */}
                                </div>
                                <div className='my-3 col-10 col-lg-6'>
                                    <input type="text" placeholder='Last Name' className="form-control" />
                                    {/* <TextField
                                        required fullWidth
                                        margin='normal'
                                        id="lname"
                                        name="lname"
                                        label="Last Name"
                                        type="name"
                                    /> */}
                                </div>
                            </div>
                            <div className='row contactmedia'>
                                <div className='my-3 col-10 col-lg-6'>                               
                                    <input type="text" placeholder='Mobile Number' className="form-control" />
                                    {/* <TextField
                                        required fullWidth
                                        margin='normal'
                                        id="phone"
                                        name="phone"
                                        label="Mobile Number"
                                        type="number"
                                    /> */}
                                </div>
                                <div className='my-3 col-10 col-lg-6'>
                                    <input type="text" placeholder='Email address' className="form-control" />
                                    {/* <TextField
                                        required fullWidth
                                        margin='normal'
                                        id="email"
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                    /> */}
                                </div>
                            </div>
                            <div className='row contactmedia'>
                                <div className=' my-3 col-10 col-lg-12'>                               
                                    <input type="text" placeholder='Address' className="form-control" />
                                    {/* <TextField
                                        required fullWidth
                                        margin='normal'
                                        id="address"
                                        name="address"
                                        label="Address"
                                        type="email"
                                    /> */}
                                    
                                </div>
                            </div>
                            <div className='row contactmedia'>
                                <div className='my-3 col-10 col-lg-12'>                               
                                    <textarea className="form-control" placeholder="Message"></textarea>
                                    {/* <TextareaAutosize
                                        aria-label="minimum height"
                                        margin='normal'
                                        minRows={5}
                                        placeholder="Message"
                                        // style={{ width: 200 }}
                                    /> */}
                                    {/* <Textarea label="Input 1" floatingLabel={true} /> */}
                                </div>
                                <button className="btn btn-style w-75 contactbtn mt-3 contactmedia" type="submit">Contact</button>
                            </div>
                           
                        </form>           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;