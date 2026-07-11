import MainLayout from "./components/MainLayout";
import Nav from "./components/Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
  <>
    {/* Nav can be here or inside MainLayout, keeping it here for now if they wanted it globally */}
    <Nav/>
    <MainLayout/>
  </>
 );
}

export default App
