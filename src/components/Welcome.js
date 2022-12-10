import React,{useState} from 'react'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'
import img3 from '../images/3.png'
import { NavLink } from 'react-router-dom'
function Welcome() {
    const [user, setUser] = useState({username : '', email: ''})
 


    return (
        <div>
            <Container>
                <div>
                    <img src ={img3} alt="welcome"/>
                </div>
                <div>
                    <h1>Welcome</h1>
                    <p>We’re glad you’re here! Sign up to start</p>
                    <Button to={'/signup'}>Get Started</Button>
                </div>
            </Container>
        </div>
      
          //<SignUpForm SignUp={SignUp}/>
          
    
    );
}
const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 60px;
gap: 60px;
margin: auto;
margin-top: 50px;
width: 1000px;
height: 500px;

background: rgba(245, 247, 255, 0.85);
border-radius: 10px;
@media (max-width : 1000px){
    flex-wrap: wrap;
    max-width: 100%;
    height: 100%;
    padding: 0px;
    gap: 20px;
    text-align: center;
    background-color: transparent;
}
img{
    width: 450px;
    height: 315px;
    flex: 0;
    @media(max-width: 1000px){
    width: 300px;
    height: 250px;
    padding: 20px;
    }
}

`
const Button = styled(NavLink)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 50px;
gap: 12px;
width: 400px;
height: 60px;
border: none;
background: linear-gradient(113.87deg, #2663DF 14.81%, #758FF0 88.76%);
box-shadow: 0px 6px 18px #9CADF2;
border-radius: 10px;
color: white;
text-decoration: none;
margin-top: 50px;
@media (max-width: 1000px){
    height: 50px;
    width: 200px;
}
`
export default Welcome