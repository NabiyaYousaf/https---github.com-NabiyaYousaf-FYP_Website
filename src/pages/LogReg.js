import React,{useState} from 'react';
import {Box,Grid,Tabs,Tab,Card,Typography} from '@mui/material';
import Navbar from './Navbar';
import Login from './Login';
import RegisterPage from './RegisterPage';

const TabPanel=(props)=>{
    const { children, value, index, ...other } = props;
    return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const LogReg = () => {
  const[value,setValue]=useState(0);
    const handleChange=(e,newValue)=>{
      setValue(newValue);  
    }
  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className="row">
          <div className="col-md-6 logReg mt-5">
            <img src='./images/login.svg' alt='Random-Image' className='img-fluid logSign'/>
          </div>
          <div className="col-md-6 mt-5">
            {/* <Grid container sx={{height:'80vh'}}>
              <Grid item lg={12} > */}
                  <Card sx={{width:'100%',height:'100%'}}>
                      <Box>
                          <Box sx={{borderBottom:1,borderColor:'divider'}}>
                              <Tabs textColor='secondary' indicatorColor='secondary' value={value} onChange={handleChange}>
                                  <Tab label='Login' sx={{textTransform:'none',fontWeight:'bold',fontSize:'1.4rem'}} />
                                
                                  <Tab label='Registration' sx={{textTransform:'none',fontWeight:'bold',fontSize:'1.4rem'}}  />
                              </Tabs>
                              
                          </Box>
                          <TabPanel value={value} index={0}><Login/></TabPanel>
                          <TabPanel value={value} index={1}><RegisterPage/></TabPanel>
                      </Box>
                  </Card>
              {/* </Grid>
            </Grid> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default LogReg
