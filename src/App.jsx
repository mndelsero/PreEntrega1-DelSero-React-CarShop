import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import ContadorProductos from './components/ContadorProducto'
import Mostrador from './components/ItemListContainer'
import Navbar from './components/Navbar'
// import Text from './components/Text'

function App() {



  return (
    <div >
      <Navbar />

      <div className='main'>
        <Mostrador />
      </div>
      {/* <ContadorProductos />  */}

      {/* <Text/> */}
    </div>
  )
}

export default App
