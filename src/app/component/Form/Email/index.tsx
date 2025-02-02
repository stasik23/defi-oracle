import { TextField, InputAdornment, Stack, Typography } from "@mui/material";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

interface IEmailProps {
  register: any;
  errors: any;
}

export const Email: React.FC<IEmailProps> = ({ register, errors }) => {
  return (
    <Stack>
      <TextField
        {...register("email")}
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
          endAdornment: (
            <InputAdornment position='end'>
              <LocalPostOfficeOutlinedIcon sx={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        placeholder='Email'
      />
      {errors.email && (
        <Typography variant='h5' color='white'>
          {errors.email.message}
        </Typography>
      )}
    </Stack>
  );
};
