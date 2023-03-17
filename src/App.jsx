
import { Store } from './Store'
import { Provider } from 'react-redux'
import MenuPizza from './components/MenuPizza/MenuPizza'
import './App.css'
import PizzaPicked from './components/PizzaPicked/PizzaPicked'
import Panier from './components/Panier/Panier'
import Navbar from './components/Navbar/Navbar'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
} from 'react-router-dom'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<MenuPizza/>}/>
      <Route path='pizzapick/:ID' element={<PizzaPicked/>}/>
      <Route path='panier' element={<Panier/>}/>
    </Route>
  ))
  return (
    <div className="App">
      <Provider store={Store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  )
}

export default App
