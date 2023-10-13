import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const PostsForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && author && publishedDate && content && shortDescription) {
      action({ title, author, publishedDate, content, shortDescription });
    } else {
      alert('Wszystkie pola muszą być wypełnione!');
    }
  };

  return (
    <Form className='mx-5' onSubmit={handleSubmit}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
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
            required
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
            required
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
            required
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
            required
            as='textarea'
            placeholder='Leave a comment here'
            name='descriptions'
            style={{ height: '150px' }}
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Button type='submit'>{actionText}</Button>
    </Form>
  );
};

PostsForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};

export default PostsForm;
