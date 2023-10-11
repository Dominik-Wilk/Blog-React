import { useSelector } from 'react-redux';
import { posts } from '../../../redux/postsRedux';
import Post from '../../common/Post/Post';

const RenderPost = () => {
  const allPost = useSelector(posts);

  return (
    <div className='d-flex flex-wrap '>
      {allPost.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
export default RenderPost;
