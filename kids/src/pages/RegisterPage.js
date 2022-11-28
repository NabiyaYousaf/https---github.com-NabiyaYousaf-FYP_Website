import React,{useState} from 'react'
import {Box,Grid,FormControl,FormLabel,Alert,TextField,FormControlLabel,Radio,RadioGroup,Select,InputLabel,MenuItem} from '@mui/material';
import { NavLink,useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const [state,setState]=useState({
        status:false,
        msg:"",
        type:""
    })
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
        name:data.get('name'),
        fname:data.get('fname'),
        email:data.get('email'),
        city:data.get('city'),
        password:data.get('password'),
        confirmpassword:data.get('confirm-password'),
        class:data.get('class'),
        gender:data.get('gender'),
        }
        if(actualData.email && actualData.password && actualData.name && actualData.confirmpassword && actualData.fname && actualData.city && actualData.class && actualData.gender){

            if(actualData.password === actualData.confirmpassword){
                setState({status:true,msg:"Register Successfull",type:'success'});
                // console.log(actualData);
                document.getElementById('register-form').reset();
                setTimeout(()=>{
                  navigate('/subscription');
                },2000)
            }else{
                setState({status:true, msg:"Password does not Match",type:'error'});
            }
            
            
        }else{
            setState({status:true,msg:"All Fields are Required",type:'error'});
        }
    }
  return (
    <>
      <Box component='form' noValidate sx={{mt:1}} id='register-form' onSubmit={handleSubmit}>
      <Grid container>
        <Grid item md={5} sm={12}>
            <TextField
                margin='normal'
                required fullWidth
                id="name"
                name="name"
                label="Student Name"
                type="text"
                />
        </Grid>&nbsp;
        <Grid item md={5} sm={12}>
        <TextField
          margin='normal'
          required fullWidth
          id="fname"
          name="fname"
          label="Father Name"
          type="text"
        />
        </Grid>

        <Grid item md={5} sm={12}>
        <TextField
          margin='normal'
          required fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
        />
        </Grid>&nbsp;
        <Grid item md={5} sm={12}>
        <TextField
          margin='normal'
          required fullWidth
          id="city"
          name="city"
          label="Your City"
          type="text"
        />
        </Grid>&nbsp;

        <Grid item md={5} sm={12}>
        <TextField
          required fullWidth
          margin='normal'
          required
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        </Grid>&nbsp;
        <Grid item md={5} sm={12}>
        <TextField
          required fullWidth
          margin='normal'
          required
          id="confirm-password"
          name="confirm-password"
          label="Confirm Password"
          type="password"
        />
        </Grid>&nbsp;

        <Grid item md={5} sm={12}>
        <Box sx={{ minWidth: 120 ,marginTop:'1.5rem' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          name='class'
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Thre</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </Grid>&nbsp;&nbsp;
        <Grid item md={5} sm={12}>
        <FormControl sx={{marginTop:'1.5rem'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />

      </RadioGroup>
    </FormControl>
        </Grid>
    
      </Grid> 
        
      
        
        
        <Box textAlign='center'>
            {/* <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Register</Button> */}
            <button className="btn btn-style contactbtn mt-5 contactmedia" type="submit">Register</button>
        </Box>
        {
            state.status ? <Alert severity={state.type}> <h4> {state.msg} </h4></Alert> : ''
        }
        
      </Box>
    </>
  )
}

export default RegisterPage
