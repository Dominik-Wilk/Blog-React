import { Button, Card } from 'react-bootstrap';

const Post = props => {
  return (
    <Card style={{ width: '20rem' }} className='m-3'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <b>Author:</b> {props.author}
          <br />
          <b>Published:</b> {props.publishedDate}
          <br />
          {props.shortDescription}
        </Card.Text>
        <Button href={`/post/${props.id}`} variant='primary'>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Post;
