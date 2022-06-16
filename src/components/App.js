import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './views/Layout/Header'
import Joinpage from './views/JoinPage/JoinPage'
import Landingpage from './views/LandingPage/LandingPage'
import Loginpage from './views/LoginPage/LoginPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>        
          <Route path= "/" element={<Landingpage/>}/>            
          <Route path= "/login" element={<Loginpage/>}/>            
          <Route path= "/join" element={<Joinpage/>}/>                      
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
