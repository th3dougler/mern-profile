import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function NoteListItem(props) {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='h3' gutterBottom>
          {props.note.name}
        </Typography>
        <Typography variant='body1'>{props.note.message}</Typography>
        <Typography variant='body2'>Created: {props.note.createdAt}</Typography>
      </CardContent>
      {props.noButtons ? (
        <CardActions></CardActions>
      ) : (
        <CardActions>
          <Button component='button' type='submit'>
            Update
          </Button>
          <Button component='button' type='submit'>
            Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
