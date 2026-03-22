import React from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const ChangePassword = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Change Password</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField fullWidth label="Old Password" type="password" margin="normal" {...register("oldPassword")} />
          <TextField fullWidth label="New Password" type="password" margin="normal" {...register("newPassword")} />
          <Button type="submit" variant="contained" fullWidth>Change</Button>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePassword;