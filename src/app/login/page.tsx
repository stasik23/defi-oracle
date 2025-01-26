"use client";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { Link, Typography, Stack, TextField, Button, InputAdornment, Alert } from "@mui/material";
import { ReactNode, useState } from "react";

interface IProps {
    placeholder: string;
    icon: ReactNode;
    field: string;
}

const Login = () => {
    const inputs: IProps[] = [
        {
            placeholder: "Email Address",
            icon: <LocalPostOfficeOutlinedIcon sx={{ color: "white" }} />,
            field: "email",
        },
        {
            placeholder: "Password",
            icon: <LockOutlinedIcon sx={{ color: "white" }} />,
            field: "password",
        },
        {
            placeholder: "Username",
            icon: <FolderSharedIcon sx={{ color: "white" }} />,
            field: "username",
        },
    ];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "", username: "" });

    const validateEmail = (val: string) => {
        const emailCheck = /@/;
        return emailCheck.test(val);
    };
    const validatePassword = (val: string) => {
        const passwordCheck = /^[A-Za-z0-9]+$/;
        return passwordCheck.test(val);
    };
    const validateUsername = (val: string) => {
        return val.length >= 3;
    };

    const handleChange = (field: string, value: string) => {
        switch (field) {
            case "email":
                setEmail(value);
                setErrors((prev) => ({
                    ...prev,
                    email: validateEmail(value) ? "" : "Invalid email address",
                }));
                break;
            case "password":
                setPassword(value);
                setErrors((prev) => ({
                    ...prev,
                    password: validatePassword(value)
                        ? ""
                        : "Password must be at least 8 characters long, include letters and numbers",
                }));
                break;
            case "username":
                setUsername(value);
                setErrors((prev) => ({
                    ...prev,
                    username: validateUsername(value) ? "" : "Username must be at least 3 characters",
                }));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email) || !validatePassword(password) || !validateUsername(username)) {
            alert("Please fix the errors before submitting");
            return;
        }
        alert("Login successful");
    };

    return (
        <div className="h-screen w-screen bg-[#101011] p-20">
            <form onSubmit={handleSubmit}>
                <Stack spacing={5} width={400} bgcolor="#323232" alignItems="center" padding={5} margin="0 auto">
                    <img src="/images/logo.png" alt="logo" className="w-[30px] h-[30px]" />
                    <Stack alignItems="center" color="white">
                        <Typography variant="h5">Welcome Back</Typography>
                        <Typography>
                            Don't have an account yet? <Link href="#">Sign up</Link>
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        {inputs.map((el) => (
                            <TextField
                                key={el.placeholder}
                                placeholder={el.placeholder}
                                value={
                                    el.field === "email"
                                        ? email
                                        : el.field === "password"
                                            ? password
                                            : username
                                }
                                onChange={(e) => handleChange(el.field, e.target.value)}
                                sx={{
                                    input: {
                                        color: "white",
                                        width: "300px",
                                        padding: "10px",
                                        borderColor: "#A8A196",
                                        bgcolor: "#101011",
                                    },
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{el.icon}</InputAdornment>,
                                }}
                                variant="outlined"
                                error={Boolean(errors[el.field as keyof typeof errors])}
                                helperText={errors[el.field as keyof typeof errors] || ""}
                            />
                        ))}
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ bgcolor: "white", color: "#323232", width: "360px", mt: 2 }}
                    >
                        Login
                    </Button>
                </Stack>
            </form>
        </div>
    );
};

export default Login;
