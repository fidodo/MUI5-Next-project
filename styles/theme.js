import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber, yellow } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: yellow,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;