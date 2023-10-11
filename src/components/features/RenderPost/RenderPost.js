import { useSelector } from 'react-redux';
import { getPosts } from '../../../redux/postsRedux';
import Post from '../../common/Post/Post';

const RenderPost = () => {
  const allPost = useSelector(getPosts);

  return (
    <div className='d-flex flex-wrap '>
      {allPost.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
export default RenderPost;
