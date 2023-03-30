import './App.css';
import react,{Suspense,lazy} from "react"
const Navbar=lazy(()=>import('./components/Navbar'))


function App() {
  return (
    <Suspense fallback={<div className='spinner-border ' style={{marginLeft:"45%",marginTop:'20%'}}></div>}>

      <Navbar/>
    </Suspense>
  );
}

export default App;
