import React,{useState} from 'react'
import Navbar from './Navbar';
import {Box,Grid,Alert,TextField,Button} from '@mui/material';
const ForgotPassword = () => {
  
    const [state,setState]=useState({
        status:false,
        msg:"",
        type:""
    })
    // const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
        email:data.get('email'),
        }
        if(actualData.email){
                setState({status:true,msg:"Check Your Email And Recover Your Password !!",type:'success'});
                // console.log(actualData);
                document.getElementById('forget-form').reset();
        }else{
            setState({status:true,msg:"Enter Valid Email Address",type:'error'});
        }
    }
  return (
    <>
    <Navbar/>
    <Grid container justifyContent='center' >
        <Grid item lg={6}>
            <Box component='form' noValidate sx={{mt:1}} id='forget-form' onSubmit={handleSubmit}>
                <TextField
                    margin='normal'
                    required fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    />
    
            <Box textAlign='center'>
                {/* <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Send</Button> */}
                <button className="btn btn-style contactbtn my-5 contactmedia" type="submit">Send</button>
            </Box>
            {
                state.status ? <Alert severity={state.type}><h4>{state.msg}</h4></Alert> : ''
            }
            
            </Box>
        </Grid>
    </Grid>
    
    </>
  )
}

export default ForgotPassword
