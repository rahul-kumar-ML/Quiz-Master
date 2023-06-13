
'use client'
import {Button, Card} from '@mui/material'
import { useRouter } from 'next/navigation'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import  { Questions }  from './Questions';

export default function MainPage() {
    const[topic,setTopic]=React.useState('');
    const[Answer,setAnswer]=React.useState('');
    const[UserAnswer,setUserAnswer]=React.useState('');
    const[Question,setQuestion]=React.useState('');
    const[score,setScore]=React.useState(0);
    const[Wscore,setWscore]=React.useState(0);
    const router = useRouter();
    
    const handleClick=()=>{
      // React.useEffect(()=>{
        
        console.log("fetch questions")
        fetch("http://localhost:5000/topic",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"topic": topic}),
        })
          .then(response => response.json())
          .then(responseData => {
            // Handle the response from the Flask server
            console.log(responseData);
            setAnswer(responseData.answer);
            setQuestion(responseData.question);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      // },[])
    }

    const handleAnswer=()=>{
      if(Answer==UserAnswer)
      setScore(score+1);
      else
      setWscore(Wscore+1);
    }
  
    return (

    <div>
       <div style={{width:'100vw',height:'40px',padding:'10px 5px 10px 20px',top:'0px', position:'sticky' ,backgroundColor:'black', textShadow: '1px 1px grey', color:'white'}}>QUIZ MASTER</div>
      <Card variant="outlined" style={{margin:'40px',display:'flex-box' ,flexDirection: 'column',padding:'50px', justifyContent:'center'}}>
        <TextField id="outlined-basic" label="Topic" variant="outlined" style={{margin: '20px', width:'80vw'}} onChange={(e) => {
                  setTopic(e.target.value)
                }}/>
        <Button onClick={handleClick} style={{backgroundColor:'blue', color: 'white', margin:'20px',paddingInline:'20px'}}>Get Question</Button>
        
      </Card>
      <Card variant="outlined" style={{margin:'40px',display:'flex-box' ,flexDirection: 'column',padding:'50px', justifyContent:'center'}}>
        <div>{Question}</div>
        <TextField id="outlined-basic" label="Write Answer Here..." variant="outlined" style={{margin: '20px', width:'80vw'}} onChange={(e) => {
                  setUserAnswer(e.target.value)
                }}/>
        <Button onClick={handleAnswer} style={{backgroundColor:'blue', color: 'white', margin:'20px',paddingInline:'20px'}}>Submit</Button>
        <div style={{backgroundColor:'grey', padding:'10px'}}>Score: +{score} AND -{Wscore}</div>
      </Card>
    </div>
  )
}