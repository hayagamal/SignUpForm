import React, {useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import Succeed from '../components/Succeed'
import Welcome from '../components/Welcome'
function Page() {
    const [user, setUser] = useState({})
    const SignUpSuccess=(details)=>{
        setUser(details)
        
    }
  return (
    <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/signup" element={<SignUpForm SignUp={SignUpSuccess}/>}/>
        <Route path="/success" element={<Succeed user={user}/>}></Route>
    </Routes>
  )
}

export default Page