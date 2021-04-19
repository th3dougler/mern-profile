import { Grid, Snackbar } from "@material-ui/core";
import NoteListItem from "./NoteListItem/NoteListItem";
import NoteListForm from "./NoteListForm/NoteListForm";
import MuiAlert from "@material-ui/lab/Alert";
import { Component } from "react";

function Alert(props) {
  return <MuiAlert elevation={3} variant='filled' {...props} />;
}

class UserList extends Component {
  state = {
    snackbar: { open: false, severity: "", innerText: "" },
    notes: [],
  };
  componentDidMount() {
    this.getNotes();
  }
  handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState((ps) => {
      let snackbar = ps.snackbar;
      snackbar.open = false;
      return { snackbar: snackbar };
    });
  };
  getNotes = async () => {
    let notes = await fetch("/api/note").then((res) => res.json());
    this.setState({
      notes: notes,
    });
  };
  setSnack = (innerText, severity = "success", open = true) => {
    this.setState({
      snackbar: { open: open, severity: severity, innerText: innerText },
    });
  };
  render() {
    return (
      <Grid container>
        <Grid item>
          <NoteListForm setSnack={this.setSnack} getNotes={this.getNotes} />
        </Grid>
        {this.state.notes ? (
          this.state.notes.map((note) => <NoteListItem note={note} />)
        ) : (
          <Grid item>
            <NoteListItem
              note={{
                name: "No Notes Available",
                message: "why not make one?",
              }}
              noButtons={true}
            />
          </Grid>
        )}
        <Snackbar
          open={this.state.snackbar.open}
          autoHideDuration={5000}
          onClose={this.handleClose}>
          <Alert
            onClose={this.handleClose}
            severity={this.state.snackbar.severity}>
            {this.state.snackbar.innerText}
          </Alert>
        </Snackbar>
      </Grid>
    );
  }
}

export default UserList;
