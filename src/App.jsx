import "./App.css";
import { Footer } from "./components/Footer";
import { AppRouter } from "./router/AppRouter";
import { LoginView } from "./views/LoginView";

function App() {
  return (
   /*  <>
        <LoginView/>  

      
      <Footer />
    </> */

    <>
    <AppRouter /> {/* Aquí se cargan las vistas según las rutas */}
    <Footer />
  </>
  );
}

export default App;
