import { Component } from "react";
import "./ContactMeForm.css";

import TextField from "@material-ui/core/TextField";
import MuiAlert from "@material-ui/lab/Alert";
import { Button, Container, Snackbar } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={3} variant='filled' {...props} />;
}

class ContactMeForm extends Component {
  state = {
    newContact: { name: "", email: "", message: "" },
    snackbar: { open: false, severity: "success", innerText: "" },
  };
  handleChange = (e) => {
    e.persist();
    this.setState((ps) => {
      let t = ps.newContact;
      t[e.target.name] = e.target.value;
      return { newContact: t };
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.addContact();
  };

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

  addContact = async () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.newContact),
    };
    try {
      let response = await fetch("/api/contact", options);
      let res = await response.json();
      console.log(res);

      console.log("SUCCESS");
      let newSnackbar = this.state.snackbar;
      newSnackbar.open = true;
      if (response && response.ok) {
        newSnackbar.severity = "success";
        newSnackbar.innerText = "Thanks for your message!";
      } else {
        newSnackbar.severity = "error";
        newSnackbar.innerText = "I'm sorry, there was an error on our end";
      }

      this.setState({
        newContact: { name: "", email: "", message: "" },
        snackbar: newSnackbar,
      });
    } catch (err) {
      console.log(err);

      let newSnackbar = this.state.snackbar;
      newSnackbar.open = true;
      newSnackbar.severity = "error";
      newSnackbar.innerText = "I'm sorry, there was an error on our end";
      this.setState({ snackbar: newSnackbar });
    }
  };

  render() {
    return (
      <Container>
        <form
          className='ContactMeForm'
          onSubmit={this.handleSubmit}
          autoComplete='off'>
          <div>
            <TextField
              id='outlined-basic'
              name='name'
              label='Name'
              onChange={this.handleChange}
              value={this.state.newContact.name}
              required
            />
          </div>
          <div>
            <TextField
              id='outlined-basic'
              type='email'
              name='email'
              label='E-Mail'
              onChange={this.handleChange}
              value={this.state.newContact.email}
              required
            />
          </div>
          <div>
            <TextField
              id='outlined-basic'
              name='message'
              label='Message'
              onChange={this.handleChange}
              value={this.state.newContact.message}
              required
              multiline
            />
          </div>
          <Button component='button' type='submit'>
            Submit
          </Button>
        </form>
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
      </Container>
    );
  }
}

export default ContactMeForm;
