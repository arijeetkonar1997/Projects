import React, { useState,useRef } from 'react'
import Header from './Header'
import validateCredentials   from '../utils/validate'

const Login = () => {

  const [signInForm,setSignInForm] = useState(true)
  const [showErrorMessage,setShowErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignForm = () => {
      setSignInForm(!signInForm);
  }
  const handleValidation = () => {
    console.log(email.current.value, password.current.value);
    const errorMessage = validateCredentials(email.current.value,password.current.value);
    setShowErrorMessage(errorMessage);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bg" />
        </div>
        <div className="rounded-md absolute w-1/3 h-auto px-16 mx-auto my-36 py-14 bg-black opacity-90 font-extrabold right-0 left-0">
            {signInForm?<h1 className='font-bold text-3xl text-white'>Sign In</h1>:<h1 className='font-bold text-3xl text-white'>Sign Up</h1>}
            <form onSubmit={(e)=>{e.preventDefault()}} className='pt-10 text-white' action="">
                {!signInForm && <input className="mb-3 p-2  bg-gray-700 rounded-sm w-full" type="text" placeholder='Full Name' />}
                <input ref={email} className="mb-3 p-2  bg-gray-700 rounded-sm w-full" type="text" placeholder='Email' />
                <input ref={password} className="mb-3 p-2  bg-gray-700 rounded-sm w-full" type="text" placeholder='Password'/>
                {signInForm ?<input type="button" value="Sign In" className='text-white font-normal mt-5 bg-red-600 rounded-sm p-2 w-full' onClick={handleValidation}/>
                :<input type="button" value="Sign Up" className='text-white font-normal mt-5 bg-red-600 rounded-sm p-2 w-full' onClick={handleValidation}/>}
            </form>
            <p className='font-bold text-red-700 pt-2'>{showErrorMessage}</p>
            {signInForm? <p className='py-4 text-white cursor-pointer'onClick={toggleSignForm}>New to Netflix?Sign Up Now</p>:
            <p className='py-4 text-white cursor-pointer'onClick={toggleSignForm}>Already Signed Up?Sign In Now</p>}
        </div>
    </div>
  )
}

export default Login