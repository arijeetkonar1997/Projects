import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bg" />
        </div>
        <div className="rounded-md absolute w-1/4 h-96 px-16 mx-auto my-36 pt-14 bg-black opacity-90 font-extrabold right-0 left-0">
            <h1 className='font-bold text-3xl text-white'>Sign In</h1>
            <form className='pt-10 opacity-100' action="">
                <input className="mb-3 p-2  bg-white rounded-sm w-full" type="text" placeholder='Email' />
                <input className="mb-3 p-2  bg-white rounded-sm w-full" type="text" placeholder='Password'/>
                <input type="button" value="Sign In" className='text-white font-normal mt-5 bg-red-600 rounded-sm p-2 w-full' />
            </form>
        </div>
    </div>
  )
}

export default Login