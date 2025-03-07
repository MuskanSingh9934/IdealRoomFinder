import { CgProfile } from "react-icons/cg";
export function Navigation() {
  return (
    <header>
      <div className="logo">
        <span className="logo-icon">
          <img src="image.png" alt="nt-v" className="img1"/>
          </span>Matez 
          <div class="loading">
   <span>.</span><span>.</span><span>.</span>
</div>

      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Find Rooms</a>
          </li>
          <li>
            <a href="#">Find Roommates</a>
          </li>
          <li>
            <a href="#">Listing-Room</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="/login" className="btn btn-outline">
          Login
        </a>
        <a href="/register" className="btn btn-filled">
          Sign Up
        </a>
        <a href="./pages/register.html" >
        <CgProfile className="profile"/>
        </a>
      </div>
    </header>
  );
}

