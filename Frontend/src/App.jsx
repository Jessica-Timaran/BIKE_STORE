import './App.css'
import Catalogo from './assets/components/Catalogo/Catalogo'
import Filtro from './assets/components/Filtro/Filtro'
import FondoBici from './assets/components/FondoBici/FondoBici'
import Footer from './assets/components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Catalogo/>
        <Filtro/>
        <FondoBici/>
        <Footer/>
   
      </div>
     
    </>
  )
}

export default App
