import { Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import PostDetails from './components/pages/PostDetails/PostDetails';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<PostDetails />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='/post/edit/:id' element={<EditPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
