import React from 'react'
import styled from 'styled-components'
import img2 from '../images/1.png'
function Succeed(props) {
    
  return (
    <div>
            <Container>
                <div>
                    <img src ={img2} alt="welcome"/>
                </div>
                <div>
                    <h1>Successfully logged in</h1>
                    <p>{props.user.email}</p>
                   
                </div>
            </Container>
        </div>
  )
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
    height: 456px;
  
        @media(max-width: 1000px){
        width: 300px;
        height: 250px;
        padding: 20px;
        
}
`
export default Succeed