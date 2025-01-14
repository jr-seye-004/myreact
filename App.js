// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
const App = () => {
  const prenom = "It's Junior Seye"; // Remplacez par votre prénom

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
            <Image />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {prenom ? (
          <>
            <p>Bonjour, {prenom} !</p>
            <img src="https://via.placeholder.com/150" alt="Votre image" />
          </>
        ) : (
          <p>Bonjour, là !</p>
        )}
      </div>
    </Container>
  );
}

export default App;

