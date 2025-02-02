import { Email } from "../Email"
import { Password } from "../Password"
import { UserName } from "../UserName"
import { Stack, Typography, Button } from "@mui/material"
import { useForm } from "react-hook-form"

interface IForm {
    buttonText: string,
    welcomeText: string,
    submit: any,
    register: any
}


export const Form: React.FC<IForm> = ({ submit, buttonText, welcomeText, register }) => {
    const { formState: { errors }, handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit(submit)} className="w-[450px] flex justify-center items-center flex-col p-[20px] gap-[30px] bg-[#09090a] my-0 mx-auto" >
            <img src="/images/logo.png" alt="logo" className="w-[30px] h-[30px]" />
            <Typography variant="h5" sx={{ color: "white" }}>{welcomeText}</Typography>
            <Stack sx={{ gap: "10px" }}>
                <Email register={register}/>
                <Password />
                <UserName />
            </Stack>
            <Button type="submit" variant="contained" sx={{ bgcolor: "white", color: "#323232", width: "360px", mt: 2 }}>
                {buttonText}
            </Button>
        </form>
    )
}