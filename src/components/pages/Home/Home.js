import { Button } from 'react-bootstrap';
import RenderPost from '../../features/RenderPost/RenderPost';

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <h1>All posts</h1>
        <Button
          href={`/post/add`}
          variant='outline-primary'
          className='btn-lg d-flex align-items-center px-4'>
          Add post
        </Button>
      </div>
      <RenderPost />
    </>
  );
};
export default Home;
