import React, { useContext, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserProvider } from '../../context/AuthContext';
import auth from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import GoogleLogin from '../../common/SocialLogin/GoogleLogin';
import { Helmet } from 'react-helmet';
import { FaRegCopy } from 'react-icons/fa';


const Login = () => {
    const { signIn } = useContext(UserProvider)
    const [see, setSee] = useState(true)

    const location = useLocation()
    const navigate = useNavigate()

    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;
        if (!checkbox) {
            toast.error("Please add Check mark!")
            return
        }
        signIn(email, password)
            .then(() => {
                toast.success('Login successfully !')
                navigate(location?.state ? location.state : '/')
            }).catch(() => {
                toast.error("Login faild")
            })
    }

    const handelForgetPassword = () => {
        const email = document.getElementById('email').value;
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    swal("Good job!", "Check your email", "success");
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        } else {
            toast.error("Please provide your email")
        }
    }


    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`Copied: ${text}`, {
            duration: 2000,
            position: "top-right",
        });
    };

    const users = [
        { role: "Admin Login", email: "sudiptabiswas506@gmail.com", password: "123456" },
        { role: "Tour Guide", email: "avi@gmail.com", password: "Avi@gmail.com" },
        { role: "Tourist", email: "tanvir@gmail.com", password: "Tanvir@gmail.com" },
    ];



    return (
        <div>
            <Helmet>
                <title>TripsTravel | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <section>
                <div className="flex flex-col items-center justify-center h-fit py-10 mx-auto rounded-lg shadow md:flex-row lg:px-6 dark:border dark:bg-gray-800 dark:border-gray-700" >
                    <div className="w-full bg-white rounded-lg shadow-none backdrop-blur-xl lg:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="space-y-4 p-7 lg:p-6 md:space-y-6">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                               
                            </h1>
                            {/* <GoogleLogin></GoogleLogin> */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center max-w-md mx-auto">
                           

                                {users.map((user, index) => (
                                    <div key={index} className="mb-6">
                                        <p className="text-2xl font-bold text-gray-800 drop-shadow-md">{user.role}</p>

                                        <div className="flex items-center justify-between bg-white p-3 rounded-md mt-2 shadow-sm">
                                            <h5 className="text-lg font-semibold text-gray-700">
                                                Email: <span className="text-blue-600">{user.email}</span>
                                            </h5>
                                            <FaRegCopy
                                                className="text-gray-500 cursor-pointer hover:text-blue-600 transition-all"
                                                onClick={() => handleCopy(user.email)}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between bg-white p-3 rounded-md mt-2 shadow-sm">
                                            <h6 className="text-md text-gray-600">
                                                Password: <span className="text-red-500">{user.password}</span>
                                            </h6>
                                            <FaRegCopy
                                                className="text-gray-500 cursor-pointer hover:text-red-500 transition-all"
                                                onClick={() => handleCopy(user.password)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <form onSubmit={handelLogin} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                                </div>
                                <div className='relative'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type={see ? 'password' : 'text'} name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                    <span className='absolute cursor-pointer bottom-3 right-3' onClick={() => setSee(!see)}>{!see ? <AiOutlineEye className='dark:text-white'></AiOutlineEye > : <AiOutlineEyeInvisible className='dark:text-white'></AiOutlineEyeInvisible>} </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" name='checkbox' className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link onClick={handelForgetPassword} className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-center dark:text-white">Don't have an account? <Link to='/registration' className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-blue-600">Sign up</Link></p>
                            </form>
                        </div>
                    </div>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/80b3aeab-a4c3-4d6a-a606-4474a4566658/vTUzzNjHb6.json"
                        className='w-full lg:w-[500px]'
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </section>
        </div>
    );
};

export default Login;