import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import CreateNotes from "./createNotes/createNotes";
import Notes from "./Notes/Notes";
import Layout from "./Layout/Layout";
import { purple } from "@mui/material/colors";
import "./App.css"
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  }
})

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme} >
          <Layout>
            <Container>
              <Switch>
                <Route path="/" exact component={Notes}></Route>
                <Route path="/create" component={CreateNotes}></Route>
              </Switch>
            </Container>
          </Layout>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
