import "../styles/App.css";
export function Navigation() {
  return (
    <header>
      <div class="logo">
        <img class="logo-icon" src="/image.png"></img>
        Ideal Stay
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
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <a href="/login" class="btn btn-outline">
          Login
        </a>
        <a href="/register" class="btn btn-filled">
          Sign Up
        </a>
      </div>
    </header>
  );
}
