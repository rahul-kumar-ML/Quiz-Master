
'use client'
import {Button, Card} from '@mui/material'
import { Carme } from 'next/font/google';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Form from 'react-bootstrap/Form';
export default function MainPage() {
    const[topic,setTopic]=React.useState('');
    const[Answer,setAnswer]=React.useState('');
    const[Question,setQuestion]=React.useState('');
  return (
    <div>
       
      <Card variant="outlined" style={{margin:'40px',display:'flex', height:'80vh',padding:'20px', width:'80vw', justifyContent:'center'}}>
        <TextField id="outlined-basic" label="Topic" variant="outlined" style={{margin: '20px', width:'3000px'}}/>
        <Button style={{backgroundColor:'blue', color: 'white', margin:'20px' ,width:'3000px'}}>Get Question</Button>
        <TextField id="outlined-basic" label="Answer" variant="outlined" style={{margin: '20px', width: '3000px'}}/>

      </Card>
    
    </div>
  )
}