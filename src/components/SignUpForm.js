import React, {useEffect, useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {RxEnvelopeClosed} from 'react-icons/rx'
import {BiLock} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import img1 from '../images/2.png'
function SignUpForm({SignUp}) {
    const [details, setDetails] = useState({username: '', email: '', password: '', password_confirmation: ''})
    const [errors, setErrors]  = useState({})
    const [isValid, setIsValid] = useState(false)
    const nav = useNavigate();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const submitHandler = async(e) =>{
            e.preventDefault();
            setErrors(validate(details)) 
    }
    const handleChange=(e) =>{
        switch(e.target.name){
            case 'name':
                setDetails({...details, username: e.target.value})
                
                if(e.target.value.length >= 5 && e.target.value.length <= 15){

                    (/^[A-Za-z0-9]*$/.test(e.target.value))?( (/^\d/.test(e.target.value) || /[0-9]+$/.test(e.target.value))? 
                    setErrors({...errors, username: 'Username cannot contain a number nor at the beginning nor at the end'}): 
                    setErrors({...errors, username: ''})):setErrors({...errors, username: 'Username must be of only letters and numbers'});
                }
                else{
                    setErrors({...errors, username: 'Username must consist of 5 to 15 characters.'})
                }
            
           
           break;
            case 'email':
               
                setDetails({...details, email: e.target.value})
                regex.test(e.target.value)? setErrors({...errors, email: ''}):setErrors({...errors, email: 'Email must be in a valid format.'})
                
            break;
            case 'password':
                
                    setDetails({...details, password: e.target.value})
                   e.target.value.length >=8?setErrors({...errors, password: ''}): setErrors({...errors, password: "Password must be at least 8 characters."}) 
              break;
            case 'password_confirmation':
               
                    setDetails({...details, password_confirmation: e.target.value})
                    if(e.target.value === details.password){
                        setErrors({...errors, password_confirmation: ''})
                    }
                    else{
                        setErrors({...errors, password_confirmation: 'Passwords do not match'})
                    }
               
                break;
            default: return 0
            

        }
    }
    
    useEffect(()=>{
        if(isValid){
            SignUp(details)
            fetch('https://goldblv.com/api/hiring/tasks/register',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(details)
            }).then((response)=>{
                nav('/success/')
            })
        }
    },[isValid])

    const validate = (details) =>{
        const errors ={}

       
        if(!details.username){
            errors.username = "Username is required"
        }
        if(!details.email){
            errors.email = "Email is required"
        }
        if(!details.password){
            errors.password = "Password is required"
        }
        if(!details.password_confirmation){
            errors.password_confirmation = "Confirm your password"
        }
       
        setIsValid(Object.values(errors).length === 0)
        
            return errors;   
     
    }
  return (
    <Container>
        <SignupScreen>
        <div>
            <Image src={img1} alt="signup" />
        </div>
        <form onSubmit={submitHandler}>
            <div className = "form=inner">
                <h1>Create Account</h1>
                    <span>Go ahead and sign up, let everyone know how awesome you are!</span>
                <Inputs>
                    <AiOutlineUser/>
                    <input placeholder="Username" type="text" name="name" id="name" value={details.username} onChange ={e=>handleChange(e)}/>
                    <p>{errors.username}</p>

                </Inputs>
                <Inputs>
                    <RxEnvelopeClosed/>
                    <input placeholder="Email" name="email" id="email" value={details.email} onChange ={e=> handleChange(e)}/>
                    <p>{errors.email}</p>
                </Inputs>
                <Inputs>
                    <BiLock/>
                    <input placeholder="Password" type="password" name="password" id="password" value={details.password} onChange={e=> handleChange(e)}/>
                    <p>{errors.password}</p>
                </Inputs>
                <Inputs>
                    <BiLock/>
                    <input placeholder="Confirm Password" type="password" name="password_confirmation" id="confirmpassword" value={details.password_confirmation} onChange={e=> handleChange(e)}/>
                    <p>{errors.password_confirmation}</p>
                </Inputs>
                <Button type ="submit" value ="Create Account" />
            </div>
        </form>
        </SignupScreen>
    </Container>
  )
}
const Container = styled.div`

p{
    color: red;
}

`

const Inputs = styled.div`
position: relative;
input{
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 20px;
gap: 12px;
padding-left: 50px;
width: 450px;
height: 60px;
background: #FFFFFF;
border: 1px solid #DBE3FF;
border-radius: 10px;
margin-top: 20px;
@media (max-width: 1000px){
    width: 450px;
    height: 60px;
    margin-left: 10px;
}

}
p{
    font-size: 12px
}
svg{
    position: absolute;
    top: 21px;
    left: 17px;
    color: rgba(156, 173, 242, 1)
   
}

`
const SignupScreen = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 60px;
gap: 60px;
background: rgba(245, 247, 255, 0.85);
border-radius: 10px;
height: 600px;
width: 1000px;
margin: auto;
margin-top: 20px;
@media (max-width : 1000px){
    flex-wrap: wrap;
    max-width: 100%;
    height: 100%;
    padding: 0px;
    gap: 20px;
    text-align: center;
    background-color: transparent;
}


`
const Image = styled.img`
width: 450px;
height: 536px;
border-radius: 10px;
@media(max-width: 1000px){
    width: 300px;
    height: 300px;
    padding: 20px;
    }
`
const Button = styled.input`
justify-content: center;
align-items: center;
gap: 12px;
width: 450px;
height: 60px;
border: none;
background: linear-gradient(113.87deg, #2663DF 14.81%, #758FF0 88.76%);
box-shadow: 0px 6px 18px #9CADF2;
border-radius: 10px;
color: white;
margin-top: 30px;
margin-bottom: 20px;
@media (max-width: 1000px){
    height: 50px;
    width: 200px;
}
`
export default SignUpForm