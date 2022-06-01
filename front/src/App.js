 import Home from "./pages/home/Home";
import TopBar from "./components/TopBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Quiz from "./pages/quiz/Quiz";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <TopBar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home/>:<Login/>} />
        <Route path="/register" element={user ? <Home/>: <Register/>} />
        <Route path="/setting" element={user ?<Setting/>:<Login/> } />
        <Route path="/post/:postid" element={<Single/>} />
        <Route path="write" element={user ? <Write/> : <Login/> } />
        <Route path="quiz" element={<Quiz/>} />


    </Routes>
        </Router>
  );
}

export default App;
