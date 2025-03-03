import './App.css'
import styled from 'styled-components';

function App() {


  return (
    <>
    {/* start Header Nav bar include wrapper contain all element */}
    <nav>
      <Wrapper>
        
          <ul>

          <li>Home</li>
          <li>About-US</li>
          <li>Contact-us</li>
          <li>Sign-Up</li>
          <li>Login</li>
          <li>Profile</li>
          
          </ul>
        
      </Wrapper>
</nav>
      {/* end Header Nav bar include wrapper contain all element */}
    </>
  )
}

export default App

const Wrapper = styled.div`

`;

