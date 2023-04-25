
import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from "@react-oauth/google";
import './App.css';
import { Route,Routes, useNavigate } from 'react-router-dom';


function App() {

  return (
    <GoogleOAuthProvider clientId="402173687449-d34d6ntcbig1k9qv76qk0ihndl01erq6.apps.googleusercontent.com">
      <div className="App">
        <Routes>
          <Route
            path="/hello"
            element={<div id="signInDiv">Hello World</div>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App
