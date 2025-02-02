import { useForm } from "react-hook-form"
import { TextField, InputAdornment, Stack, Typography } from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

type Field = { password: string }

export const Password = () => {
    const { register, formState: { errors } } = useForm<Field>()
    return (
        <Stack>
            <TextField
                {...register("password", {
                    required: "Password is required",
                    minLength: 8
                })}
                sx={{ input: { color: "white", width: "300px", padding: "10px", borderColor: "#A8A196", bgcolor: "#101011" } }}
                InputProps={{ endAdornment: <InputAdornment position="end"><LockOutlinedIcon sx={{ color: "white" }} /></InputAdornment> }}
                variant="outlined"
                placeholder="Password"
            />
            {errors.password && <Typography variant="h5" color="white">{errors.password.message}</Typography>}
        </Stack>
    )
}
