import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({onSearch}) {
  return (
    <Paper
      component="form"
      sx={{p: "2px 4px", display: "flex", alignItems: "center", width: 400}}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        sx={{ml: 1, flex: 1}}
        placeholder="Search Users"
        onChange={(e) => onSearch(e.target.value)}
      />
      <IconButton type="button" sx={{p: "10px"}}>
        <SearchIcon />
      </IconButton>

      <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />
    </Paper>
  );
}
