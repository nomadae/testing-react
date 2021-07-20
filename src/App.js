// import logo from './logo.svg';
import './App.css';
import LoginComponent from "./components/login/login";
import NavbarComponent from "./components/navbar/navbar";
import FooterComponent from "./components/footer/footer";


function App() {
  return (
      <>
          {/*<NavbarComponent />*/}
          <LoginComponent name='Mundo' />
          <FooterComponent />
      </>
  );
}

 export default App;
