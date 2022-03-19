import './App.css';
import Navigation from './components/Navigation';
import {Routes,Route} from 'react-router-dom'
import LandPage from './pages/LandPage';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Annonce from './pages/Annonce';
import Profile from './pages/Profile';
import PrivateRoute from './route/PrivateRoute';
import SignUpUser from './pages/SignupUser';
import SigninUser from './pages/SigninUser';
import Error from './pages/Error';
import SignInAdmin from './pages/admin/SignInAdmin';


function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <h1> Location des espaces libres</h1> */}
      <Routes>
        <Route path='/' element={<LandPage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/annonce' element={<Annonce/>} />
        <Route path='/user/signup' element={<SignUpUser/>} />
        <Route path='/user/signin' element={<SigninUser/>} />
        <Route path='/admin/signin' element={<SignInAdmin/>} />
        <Route path='/*' element={<Error/>} />

        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/profile' element={<Profile/>} />
        {/* <Route path='/profile' element={<PrivateRoute> <Profile/> </PrivateRoute>} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
