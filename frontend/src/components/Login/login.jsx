import React, { useState } from "react";
import "./Login.css";
import mockupImage from "../../assets/login_hero.svg"; // ภาพ mockup ด้านบน
import awardsImage from "../../assets/awards.svg"; // ภาพสำหรับข้อมูลรางวัลด้านล่าง
import googleIcon from "../../assets/google-icon.svg"; // ไอคอน Google
import appleIcon from "../../assets/apple-icon.svg"; // ไอคอน Apple
import facebookIcon from "../../assets/facebook-icon.svg"; // ไอคอน Facebook

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="main-container">
      {/* Left Section */}
      <div className="left-container">
        <div className="mockup-content">
          <img src={mockupImage} alt="Mockup" className="mockup-image" />
        </div>
        <div className="awards-content">
          <img src={awardsImage} alt="Awards" className="awards-image" />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-container">
        <div className="language-switch">
          <select>
            <option value="en">EN</option>
            <option value="th">TH</option>
          </select>
        </div>
        <div className="login-box">
          <h2>{isRegister ? "Register" : "Sign In"}</h2>
          <div className="form-toggle">
            <button
              className={!isRegister ? "active" : ""}
              onClick={() => setIsRegister(false)}
            >
              Sign In
            </button>
            <button
              className={isRegister ? "active" : ""}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>
          <form>
            {isRegister && (
              <div className="form-group">
                <input type="text" placeholder="Full Name" />
              </div>
            )}
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn-primary">
              {isRegister ? "Register" : "Sign In"}
            </button>
          </form>
          <p>or sign in with</p>
          <div className="social-login">
            <button className="social-btn google">
              <img src={googleIcon} alt="Google" />
            </button>
            <button className="social-btn apple">
              <img src={appleIcon} alt="Apple" />
            </button>
            <button className="social-btn facebook">
              <img src={facebookIcon} alt="Facebook" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
