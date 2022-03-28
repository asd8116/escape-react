import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Article from './pages/Article';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:articleId" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
