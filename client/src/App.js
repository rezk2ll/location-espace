import './App.css';
import Navigation from './components/Navigation';
import {Routes,Route} from 'react-router-dom'
import LandPage from './pages/LandPage';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Annonce from './pages/Annonce';
import Profile from './pages/admin/Profile';
import PrivateRoute from './route/PrivateRoute';
import SignUpUser from './pages/user/SignupUser';
import SigninUser from './pages/user/SigninUser';
import Error from './pages/Error';
import SignInAdmin from './pages/admin/SignInAdmin';
import EditUser from './pages/admin/EditUser';
import DeleteUser from './pages/admin/DeleteUser';
import AddUser from './pages/admin/AddUser';
import DeleteAnnonce from './pages/admin/DeleteAnnonce';
import AddAnnonce from './pages/user/AddAnnonce';
import EditAnnonce from './pages/user/EditAnnonce';
import DeleteAnnonc from './pages/user/DeleteAnnonc';
import ProfileUser from './pages/user/ProfileUser';

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <h1> Location des espaces libres</h1> */}
      <Routes>
    {/* PUBLIC PAGES */}
        <Route path='/' element={<LandPage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/annonce' element={<Annonce/>} />
        <Route path='/*' element={<Error/>} />
    {/* user */}
        <Route path='/user/signup' element={<SignUpUser/>} />
        <Route path='/user/signin' element={<SigninUser/>} />
        <Route path='/addannonce' element={<AddAnnonce/>} />
        <Route path='/deleteannonce' element={<DeleteAnnonc/>} />
        <Route path='/editannonce' element={<EditAnnonce/>} />
        <Route path='/profileuser' element={<ProfileUser/>} />
        
    {/* admin */}
        <Route path='/admin/signin' element={<SignInAdmin/>} />
        <Route path='/edituser' element={<EditUser/>} />
        <Route path='/deleteuser' element={<DeleteUser/>} />
        <Route path='/adduser' element={<AddUser/>} />
        <Route path='/deleteannonce' element={<DeleteAnnonce/>} />
        <Route path='/profile' element={<Profile/>} />

    {/* ROUTE PAGE */}
        {/* <Route path='/profile' element={<PrivateRoute> <Profile/> </PrivateRoute>} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
