export function Navigation() {
  return (
    <header>
      <div className="logo">
        <span className="logo-icon">🏠</span>Ideal Stay
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
      <div className="auth-buttons">
        <a href="./pages/login.html" className="btn btn-outline">
          Login
        </a>
        <a href="./pages/register.html" className="btn btn-filled">
          Sign Up
        </a>
      </div>
    </header>
  );
}
