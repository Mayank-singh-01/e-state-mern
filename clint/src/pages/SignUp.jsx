import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-8 font-semibold font-serif'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='email' id='email' className='border p-3 rounded-lg' />
        <input type="password" placeholder='password' id='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700 font-bold'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
