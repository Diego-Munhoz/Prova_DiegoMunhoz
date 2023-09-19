import logo from './logo.svg';
import './App.css';
import Noticia from './componentes/Noticia';
import Categoria from './componentes/Categoria';

function App() {
  return (
    <div className="Container">
          <Noticia></Noticia>
          <Categoria categoria='Esporte'></Categoria>
    </div>
  );
}

export default App;
