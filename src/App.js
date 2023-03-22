
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './Pages/Home';
import Cart from './component/Cart';

function App() {
  // let userLogin= localStorage.getItem("token")
  
  return (
   <BrowserRouter >
     
      <Routes>
        
     <Route path="/" element={<Home/>}/>
     <Route path="/userId/:id" element={<Cart/>}/>

     </Routes>
   </BrowserRouter>
  );
}

export default App;
