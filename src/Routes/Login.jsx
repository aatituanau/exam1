import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Outlet, Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <Box sx={{"& > :not(style)": {m: 1}}}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Password"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
      </Box>
      <Button variant="contained" component={Link} to="/pokeapi">
        Link
      </Button>
    </>
  );
}
