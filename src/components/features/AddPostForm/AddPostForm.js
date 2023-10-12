import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useState } from 'react';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [content, setContent] = useState('');
  const [shortDescription, setShortDescription] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(
  //     addPost({ title, author, publishedDate, content, shortDescription })
  //   );
  //   navigate('/');
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (title && author && publishedDate && content && shortDescription) {
      dispatch(
        addPost({ title, author, publishedDate, content, shortDescription })
      );
      navigate('/');
    } else {
      alert('Wszystkie pola muszą być wypełnione!');
    }
  };

  return (
    <Form className='mx-5'>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            isRequired
            type='text'
            placeholder='Enter title'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            isRequired
            type='text'
            placeholder='Enter author date'
            name='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Published</Form.Label>
          <Form.Control
            isRequired
            type='text'
            placeholder='Enter published date'
            name='published'
            value={publishedDate}
            onChange={e => setPublishedDate(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='10'>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            isRequired
            as='textarea'
            placeholder='Leave a comment here'
            name='descriptions'
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='10'>
          <Form.Label>Main description</Form.Label>
          <Form.Control
            isRequired
            as='textarea'
            placeholder='Leave a comment here'
            name='descriptions'
            style={{ height: '150px' }}
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Button type='submit' onClick={handleSubmit}>
        Add post
      </Button>
    </Form>
  );
};
export default AddPostForm;
