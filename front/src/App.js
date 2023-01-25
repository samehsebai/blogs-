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
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import Quiz from "./pages/quiz/Quiz";
import Acquisation from "./pages/acquisation/Acquisation";
import Artiste from "./pages/artiste/Artiste";
import Bibliographie from "./pages/bibliographie/Bibliographie";
import Exposition from "./pages/exposition/Exposition";
import Pret from "./pages/pret/Pret";
//import Redactionnoticeinventaire from "./pages/redactionNoticeInventaire/Redactionnoticeinventaire";
import Restauration from "./pages/restauration/Restauration";
import Signature from "./pages/signature/Signature";
import Artistes from "./pages/artistes/Artistes";
import Bibliographies from "./pages/bibliographies/Bibliographies";
import Expositions from "./pages/expositions/Expositions";
import Prets from "./pages/prets/Prets";
import Restaurations from "./pages/restaurations/Restaurations";
import Signatures from "./pages/signatures/Signatures";



/*
        <Route path="/redactionNoticeInventaire" element={<Redactionnoticeinventaire/>} />
        <Route path="/localisaionConservation" element={<Localisaionconservation/>} />

*/

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
        <Route path="/acquisation" element={<Acquisation/>} />
        <Route path="/artiste" element={<Artiste/>} />
        <Route path="/bibliographie" element={<Bibliographie/>} />
        <Route path="/exposition" element={<Exposition/>} />
        <Route path="/pret" element={<Pret/>} />
        <Route path="/restauration" element={<Restauration/>} />
        <Route path="/signature" element={<Signature/>} />
        <Route path="/artistes" element={<Artistes/>} />
        <Route path="/bibliographies" element={<Bibliographies/>} />
        <Route path="/expositions" element={<Expositions/>} />
        <Route path="/prets" element={<Prets/>} />
        <Route path="/restaurations" element={<Restaurations/>} />
        <Route path="/signatures" element={<Signatures/>} />

      


    </Routes>
        </Router>
  );
}

export default App;
