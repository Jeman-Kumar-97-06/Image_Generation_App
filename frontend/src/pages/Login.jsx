import {Link} from 'react-router-dom';
import {useLogin} from '../hooks/useLogin';
import { useState } from 'react';
import {motion} from 'framer-motion';

const Login = () => {
    const [username,setUsername]  = useState(null);
    const [password,setPassword]  = useState(null);
    const {error,isloading,login} = useLogin();
    const [err,setErr]            = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErr('all fields must be filled!');
            return;
        }
        await login(username,password);
    }

    return (
        <div
         style={{
            fontFamily : 'GeoSansLight',
            fontSize: '2.5vh', // Fits the height of h-32 (~128px) dynamically
            lineHeight: '1',
            // textShadow: '0 0 5px white, 0 0 15px white',
            }}
         className="login_page w-[100vw] h-[100vh] content-center text-white">
            <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-black m-auto backdrop-blur-md bg-blue-500/30 flex flex-col w-[400px] p-8 pt-10 rounded-lg" onSubmit={handleLogin}>
                <input 
                    type='text' 
                    className="p-3 bg-white rounded-lg mb-5" 
                    placeholder="Username" 
                    onChange={e=>{setUsername(e.target.value)}}
                    value={username}
                    />
                <input 
                    type='password' 
                    className="p-3 bg-white rounded-lg mb-5" 
                    placeholder='Password'
                    onChange={e=>{setPassword(e.target.value)}}
                    value={password}
                    />
                <button type='submit' className="cursor-pointer shadow-sm bg-radial from-pink-400 from-40% to-fuchsia-700 w-[100px] p-2 rounded-lg text-white">Login</button>
                <p className='mt-3 text-white'>Already have an account ? <Link to='/signup' className='text-purple-400'>Signup</Link></p>
                {error && <span className='text-red-500'>{error}*</span>}
                {err && <span className='text-red-500'>{err}*</span>}
                {isloading && <span className='text-white'>Please wait, the server is bit slow. 😿</span>}
            </motion.form>
        </div>
    )
}

export default Login;