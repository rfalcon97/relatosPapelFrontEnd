import "./App.css";
import { Footer } from "./components/Footer";
import { AppRouter } from "./router/AppRouter";
import { LoginView } from "./views/LoginView";

function App() {
  return (

    <>
    <AppRouter /> 
    <Footer />
  </>
  );
}

export default App;
