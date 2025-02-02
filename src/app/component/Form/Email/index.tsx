import { useForm } from "react-hook-form"
import { TextField, InputAdornment, Stack, Typography } from "@mui/material"
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

type Field = { email: string | undefined }

export const Email = ({register}:{register:any}) => {
    const { formState: { errors } } = useForm<Field>()
    return (
        <Stack>
            <TextField
                {...register("email")}
                sx={{ input: { color: "white", width: "300px", padding: "10px", borderColor: "#A8A196", bgcolor: "#101011" } }}
                InputProps={{ endAdornment: <InputAdornment position="end"><LocalPostOfficeOutlinedIcon sx={{ color: "white" }} /></InputAdornment> }}
                variant="outlined"
                placeholder="Email"
            />
            {errors.email && <Typography variant="h5" color="white">{errors.email.message}</Typography>}
        </Stack>
    )
}
