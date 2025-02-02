import { useForm } from "react-hook-form"
import { TextField, InputAdornment, Stack, Typography } from "@mui/material"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

type Field = { userName: string }

export const UserName = () => {
    const { register, formState: { errors } } = useForm<Field>()
    return (
        <Stack>
            <TextField
                {...register("userName", {required: "Username is required"})}
                sx={{ input: { color: "white", width: "300px", padding: "10px", borderColor: "#A8A196", bgcolor: "#101011" } }}
                InputProps={{ endAdornment: <InputAdornment position="end"><PermIdentityOutlinedIcon sx={{ color: "white" }} /></InputAdornment> }}
                variant="outlined"
                placeholder="Username"
            />
            {errors.userName && <Typography variant="h5" color="white">{errors.userName.message}</Typography>}
        </Stack>
    )
}
