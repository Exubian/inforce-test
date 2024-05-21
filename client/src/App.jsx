import { fetchProducts } from '@/store/actions/product'
import ProductList from "@/components/products/ProductList"
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()

  function loadInitData() {
    dispatch(fetchProducts());
  }
  loadInitData()


  return (
    <ProductList></ProductList>
  )
}

export default App
