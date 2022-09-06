import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './components/Layout';
import LoginRedux from './components/LoginRedux';
import ProfileRedux from './components/ProfileRedux';
import { store } from './store';
import {Provider} from "react-redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Layout>
     <Routes>
  <Route path='signin' element={<SignIn />} />
  <Route path='signup' element={<SignUp />} />
  <Route path='loginredux' element={<LoginRedux />} />
  <Route path='profileredux' element={<ProfileRedux />} />
</Routes>
</Layout>
</Provider>
    </div>
  );
}

export default App;
