import Typography from "@material-ui/core/Typography";
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";
function Contact(props) {
  return (
    <>
      <Typography component='h1' variant='h3' gutterBottom>
        Contact
      </Typography>

      <Typography component='h2' variant='h5' gutterBottom>
        Full-stack developer from Toronto
      </Typography>
      <Typography variant='body1' paragraph>
        Feel free to send me an email, or reach out through any of the following
        platforms. Or drop me a line right here! Resume Links HERE:
        <ContactMeForm />
      </Typography>
    </>
  );
}
export default Contact;
