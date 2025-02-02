"use client";
import { Form } from "../component/Form/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    userName: yup.string().required("Username is required"),
  })
  .required();

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("Success", data);
  };

  return (
    <div className='h-screen w-screen bg-[#101011] p-20'>
      <Form
        buttonText='Registration'
        welcomeText='Welcome to Defi-Oracle'
        submit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default Login;
