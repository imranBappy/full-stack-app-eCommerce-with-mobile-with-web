import Input from '../components/UI/Input';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/UI/SubmitBtn';
import { useLoginMutation } from '../features/auth/authApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, { isLoading, status }] = useLoginMutation()
    const navigate = useNavigate()
    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("Successfully logged in!");
            navigate('/')
        } else if (status === 'rejected') {
            toast.error("There was an error!")
        }
    }, [status, navigate])

    const onSubmit = (data) => {
        login(data);
    }
    return (
        <div className='theme_component p-10 m-auto  h-screen '>
            <div className=" w-96 m-auto">
                <h1 className='text-xl my-5 dark:text-white'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name="email"
                        label='Enter you email'
                        file={null}
                        register={register}
                        errors={errors}
                        type="email"
                        defaultValue={'imran@mangrove.edu.bd'}
                        placeholder="Email" />
                    <Input
                        defaultValue={'pass123'}
                        name="password"
                        label='Password you email'
                        register={register}
                        errors={errors}
                        type="password"
                        placeholder="Password" />
                    <SubmitBtn disabled={isLoading ? true : false} value={isLoading ? "Looding" : "Login"} />
                </form>
            </div>
        </div>
    );
};



export default Login;