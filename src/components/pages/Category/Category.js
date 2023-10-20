import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import Post from '../../common/Post/Post';

const Category = () => {
  const category = useParams();
  const posts = useSelector(state => getPostsByCategory(state, category));
  return (
    <>
      <h1>Category: {category.name} </h1>
      <div className='d-flex flex-wrap '>
        {posts.map(post => (
          <Post {...post} />
        ))}
      </div>
    </>
  );
};
export default Category;
