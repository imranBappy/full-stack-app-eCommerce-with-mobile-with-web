import { useEffect, useState } from 'react';
import Input from '../components/UI/Input';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/UI/SubmitBtn';

const inputData = [{
    label: '',
    type: 'img',
    name: "url",
    placeholder: 'Upload Image'
},
{
    label: 'Name',
    type: 'text',
    name: "name",
    placeholder: 'Full Name'
},
{
    label: 'Email',
    type: 'email',
    name: "email",
    placeholder: 'Email',
    disabled: true
}
]

import { useNavigate } from "react-router-dom";
const Profile = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'url') {
                setFile(URL.createObjectURL(value.url[0]));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const formData = new FormData()
    const onSubmit = ({ url, ...rest }) => {
        const data = { ...rest, url: url[0] }
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        });
        // return navigate("/teachers");
    };
    return (
        <div className='theme_component  p-10  max-w-5xl  mx-auto '>
            <h1 className=''>Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    inputData.map((input, i) => {
                        return (
                            <Input
                                file={file}
                                errors={errors} register={register}
                                key={i}
                                {...input}
                            />

                        )
                    })
                }
                <SubmitBtn value="Update" />
            </form>

        </div>
    );
};



export default Profile;