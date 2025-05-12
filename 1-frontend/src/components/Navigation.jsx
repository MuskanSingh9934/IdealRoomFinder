import React from "react";
import { useNavigate } from "react-router-dom";

export function Navigation() {
 const navigate = useNavigate();
 const user = JSON.parse(localStorage.getItem("user"));

 const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
 };

 const styles = {
  header: {
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   padding: "1rem 2rem",
   backgroundColor: "#1e1e2f",
   color: "white",
   position: "sticky",
   top: 0,
   zIndex: 100,
  },
  logo: {
   display: "flex",
   alignItems: "center",
   gap: "10px",
   fontSize: "1.5rem",
   fontWeight: "bold",
  },
  logoIcon: {
   width: "40px",
   height: "40px",
   borderRadius:"25px",
  },
  navList: {
   display: "flex",
   listStyle: "none",
   gap: "1rem",
   alignItems: "center",
   margin: 0,
   padding: 0,
  },
  link: {
   textDecoration: "none",
   color: "white",
   fontSize: "1rem",
   padding: "0.5rem 1rem",
   borderRadius: "20px",
   transition: "all 0.3s",
  },
  loginBtn: {
   backgroundColor: "#97bcf7",
   
  },
  signupBtn: {
   backgroundColor: "#97bcf7",
  },
  profileBtn: {
   backgroundColor: "#ffffff",
   color:"black",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   width: "40px",
   height: "40px",
   borderRadius: "50%",
   fontWeight: "bold",
   fontSize: "1rem",
   textTransform: "uppercase",
  },
  logoutBtn: {
   backgroundColor: "#ff4d4d",
   border: "none",
   cursor: "pointer",
  },
 };


 const firstLetter = user?.name?.charAt(0) || "";

 return (
 <header style={styles.header}>
   <div style={styles.logo}>
 <img src="/logo.png" alt="Logo" style={styles.logoIcon} />
 
 <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
 Matez
<span style={styles.dot} className="dot">.</span>
 <span style={{ ...styles.dot, animationDelay: "0.1s" }} className="dot">.</span>
 <span style={{ ...styles.dot, animationDelay: "0.2s" }} className="dot">.</span>
</span>
</div>


   <nav>
    <ul style={styles.navList}>
     <li><a href="/map" style={styles.link}>Find Rooms</a></li>
     <li><a href="/map" style={styles.link}>Find Roommates</a></li>
     <li><a href="/map" style={styles.link}>List Your Room</a></li>
     <li><a href="/about" style={styles.link}>About Us</a></li>

     {!user ? (
      <>
       <li><a href="/login" style={{ ...styles.link, ...styles.loginBtn }}>Login</a></li>
       <li><a href="/signup" style={{ ...styles.link, ...styles.signupBtn }}>Signup</a></li>
      </>
     ) : (
      <>
       <li>
        <a href="/profile" style={{ ...styles.link, ...styles.profileBtn }}>
         {firstLetter}
        </a>
       </li>
       <li>
        <button onClick={handleLogout} style={{ ...styles.link, ...styles.logoutBtn }}>
         Logout
        </button>
       </li>
      </>
     )}
    </ul>
   </nav>
  </header>
 );
}
