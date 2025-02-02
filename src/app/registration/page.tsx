"use client";
import { Form } from '../component/Form/Form';
import { default as axios } from 'axios';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    userName: yup.string().required("Username is required"),
}).required();


const Login = () => {
    // const sendData = async () => {
    //     try {
    //       const response = await axios.post(
    //         "http://localhost:9000/auth/registretion",
    //         {
    //           name: username,
    //           email: email,
    //           password: password,
    //         },
    //         { withCredentials: true },
    //       );
    //     } catch (error) {}
    //   };
    const { register, formState: { errors } } = useForm({resolver: yupResolver(schema),})
    const onSubmit = () => { console.log("Succes") }
    console.log(errors)

    return (
        <div className="h-screen w-screen bg-[#101011] p-20">
            <Form buttonText='Registration' welcomeText='Welcome to Defi-Oracle' submit={onSubmit} register={register}/>
        </div>
    );
};

export default Login;
