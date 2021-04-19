import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import StickyNote from "../StickyNote/StickyNote";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  let [darkMode, setDarkMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const toggleLightDark = () => {
    setDarkMode(darkMode ? false : true);
    console.log(darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            onClick={() => {
              toggleLightDark();
            }}
            aria-label='toggle dark mode'>
            <InvertColorsIcon />
          </IconButton>
          <Typography variant='h5' className={classes.grow} align='center'>
            Doug Jones
          </Typography>
          <Button component={Link} to={"/"} color='inherit'>
            About
          </Button>
          <Button component={Link} to={"/work"} color='inherit'>
            Work
          </Button>
          <Button component={Link} to={"/contact"} color='inherit'>
            Contact
          </Button>
          <Button component={Link} to={"/sticky"} color='inherit'>
            Sticky Note
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.grow} align='center'>
        <Switch>
          <Route path='/work' render={(props) => <Work {...props} />} />
          <Route path='/contact' render={(props) => <Contact {...props} />} />
          <Route path='/sticky' render={(props) => <StickyNote {...props} />} />
          <Route path='/' render={(props) => <About {...props} />} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}
export default App;

/*         <Switch>
          <Route path='/' render={(props) => <Grid item>Hello, World!</Grid>} />
        </Switch> */
