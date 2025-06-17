import "../styles/App.css";
export function Navigation({ style }) {
  return (
    <header style={style}>
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
        <a href="/login" class="Authbtn btn-outline">
          Login
        </a>
        <a href="/register" class="Authbtn btn-filled">
          Sign Up
        </a>
      </div>
    </header>
  );
}
