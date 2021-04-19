import Typography from "@material-ui/core/Typography";

function Work(props) {
  return (
    <>
      <Typography component='h1' variant='h3' gutterBottom>
        Work
      </Typography>

      <Typography component='h2' variant='h5' gutterBottom>
        Full-stack developer from Toronto
      </Typography>
      <Typography variant='body1' paragraph>
        I am interested in building clean, user friendly experiences using
        industry standard frameworks and methodology.
        <br />
        <br />
        My previous work as a chef and baker has instilled a strong work ethic
        and a customer-focused perspective. This means that I see problems from
        different angles and work relentlessly to find creative solutions. Check
        out my projects and profiles, and if you have any questions, don't
        hesitate to ask.
      </Typography>
    </>
  );
}
export default Work;
