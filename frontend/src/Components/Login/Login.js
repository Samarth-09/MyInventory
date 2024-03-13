import { useState, React } from "react";
import "../AddStock/AddStock.css";
// import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  const [uid, setUid] = useState();
  const [pwd, setPwd] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    storeData();
  };

  const storeData = async () => {
    console.log(uid + pwd);
    const res = await axios.get(`http://localhost:8080/user/login?uid=${uid}&pwd=${pwd}`);
    console.log(res.data);
    if(res.data == null)
    {
        alert("Credentials incorrect");
    }
    else{
        localStorage.setItem("uid", res.data.uid);
        navigate("/inventory");
    }
  };


  return (
    <div className="back">
      <NavBar></NavBar>
      <hr className="addstock-hr"></hr>
      <div className="stock-input">
        <p>Login</p>
        <label className="label">
              User Id
              <input
                type="number"
                name="uid"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="input"
              />
            </label>
        
            <label className="label">
              Password
              <input
                type="text"
                name="pwd"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="input"
              />
            </label>
        <button type="submit" className="bttnn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

// Styles

export default Login;
