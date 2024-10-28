
import './App.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/action'
import { productData } from './assets/ProductsData'
function App() {
  const dispatch = useDispatch()
  return (
    <>
      <button type="button" onClick={() => dispatch(addToCart(productData))} className='font-bold text-red-500 text-2xl border-2 border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white ' >Add to Cart</button>
    </>
  )
}

export default App
