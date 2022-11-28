import React,{useState} from 'react'
import {Box,Alert,TextField,Button} from '@mui/material';
import { NavLink,useNavigate } from 'react-router-dom';
const Login = () => {
    const [state,setState]=useState({
        status:false,
        msg:"",
        type:""
    })
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
        email:data.get('email'),
        password:data.get('password'),
        
        }
        if(actualData.email && actualData.password){
            setState({status:true,msg:"Login Successfull",type:'success'});
            // console.log(actualData);
            document.getElementById('login-form').reset();
            setTimeout(()=>{
              navigate('/');
            },2000)
            
        }else{
            setState({status:true,msg:"All Fields are Required",type:'error'});
        }
    }
  return (
    <>
      <Box component='form' noValidate sx={{mt:1}} id='login-form' onSubmit={handleSubmit}>
      <TextField
          margin='normal'
          required fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
        />
        <TextField
          required fullWidth
          margin='normal'

          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign='center'>
            {/* <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Login</Button> */}
            <button className="btn btn-style contactbtn mt-3 contactmedia" type="submit">Login</button>
        </Box>
        <div className='black'>
        <NavLink to='/forgetpass'> <h4 className='my-4'> Forgot Password ? </h4> </NavLink>
        {/* <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Forget Password ?</Button> */}
        </div>
        {
            state.status ? <Alert severity={state.type}><h4> {state.msg} </h4></Alert> : ''
        }
        
      </Box>
    </>
  )
}

export default Login
