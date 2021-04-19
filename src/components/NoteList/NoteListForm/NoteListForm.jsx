import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@material-ui/core";
import { Component } from "react";
import Typography from "@material-ui/core/Typography";

class NoteListForm extends Component {
  state = {
    newNote: { name: "", message: "" },
  };
  handleChange = (e) => {
    let newNote = this.state.newNote;
    newNote[e.target.name] = e.target.value;
    this.setState({ newNote: newNote });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.newNote),
    };
    try {
      let response = await fetch("/api/note", options);
      let res = await response.json();
      console.log(res);
      if (response && response.ok) {
        this.props.getNotes();
        this.props.setSnack("Thanks for the post!");
      } else this.props.setSnack("There was an error", "error");
      this.setState({
        newNote: { name: "", message: "" },
      });
    } catch (err) {
      console.log(err);
      this.props.setSnack("There was an error", "error");
    }
  };
  render() {
    return (
      <Card variant='outlined'>
        <form onSubmit={this.handleSubmit}>
          <CardContent>
            <Typography variant='h5' component='h3' gutterBottom>
              Create a new note
            </Typography>
            <div>
              <TextField
                label='Name'
                id='name'
                name='name'
                type='text'
                value={this.state.newNote.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <TextField
                label='Message'
                id='message'
                name='message'
                type='text'
                value={this.state.newNote.message}
                onChange={this.handleChange}
                multiline
              />
            </div>
          </CardContent>
          <CardActions>
            <Button component='button' type='submit'>
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default NoteListForm;
