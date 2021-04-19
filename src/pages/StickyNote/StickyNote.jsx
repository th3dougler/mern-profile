import Typography from "@material-ui/core/Typography";
import NoteList from "../../components/NoteList/NoteList";

function StickyNote(props) {
  return (
    <>
      <Typography component='h1' variant='h4' gutterBottom>
        StickyNote
      </Typography>
      <Typography component='h2' variant='h5' gutterBottom>
        For gods sake, moderate yourselves
      </Typography>
      <NoteList />
    </>
  );
}
export default StickyNote;
