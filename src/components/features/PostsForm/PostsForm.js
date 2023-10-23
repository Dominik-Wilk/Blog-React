import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from '../../../utils/dateToStr';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoryRedux';

const PostsForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');
  const allCategories = useSelector(getCategories);

  const handleSubmit = () => {
    setDateError(!publishedDate);
    if (publishedDate) {
      action({
        title,
        author,
        publishedDate: dateToStr(publishedDate),
        category,
        content,
        shortDescription,
      });
    }
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Form className='mx-5' onSubmit={validate(handleSubmit)}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 4 })}
            type='text'
            placeholder='Enter title'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          {errors.title && (
            <small className='d-block form-text text-danger mt-2'>
              Title should contain at least 4 characters.
            </small>
          )}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register('author', { required: true, minLength: 4 })}
            type='text'
            placeholder='Enter author date'
            name='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className='d-block form-text text-danger mt-2'>
              Author should contain at least 4 characters.
            </small>
          )}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6'>
          <Form.Label>Published</Form.Label>
          <DatePicker
            selected={publishedDate}
            onChange={date => setPublishedDate(date)}
            dateFormat='dd/MM/yyyy'
          />
          {dateError && (
            <small className='d-block form-text text-danger mt-2'>
              Date must be selected
            </small>
          )}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='10'>
          <Form.Label>Category</Form.Label>
          <select
            {...register('category', { required: true })}
            className='d-block w-100'
            defaultValue={category}
            onChange={e => setCategory(e.target.value)}>
            <option value='' disabled>
              Select category
            </option>
            {allCategories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <small className='d-block form-text text-danger mt-2'>
              Category must be selected
            </small>
          )}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='10'>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 20 })}
            as='textarea'
            placeholder='Leave a comment here'
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required and should contain at least 20 characters.
            </small>
          )}
        </Form.Group>
      </Row>
      <Row className='mb-5'>
        <Form.Group as={Col} md='10'>
          <Form.Label>Main description</Form.Label>
          <Form.Control
            {...register('content', { required: true, minLength: 20 })}
            as='textarea'
            placeholder='Leave a comment here'
            name='descriptions'
            style={{ height: '150px' }}
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          {errors.content && (
            <small className='d-block form-text text-danger mt-2 mx-2'>
              Main description can not be empty.
            </small>
          )}
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
  publishedDate: PropTypes.instanceOf(Date),
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};

export default PostsForm;
