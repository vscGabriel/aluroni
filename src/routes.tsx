import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/aluroni' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='/aluroni/cardapio' element={<Cardapio />} />
            <Route path='/aluroni/sobre' element={<Sobre />} />
          </Route>
          <Route path='/aluroni/prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}