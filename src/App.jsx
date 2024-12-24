import "./App.css";
import { Footer } from "./components/Footer";
import { BookList } from "./views/BookList";
import { LoginView } from "./views/LoginView";

function App() {
  return (
    <>
       {/*  <LoginView></LoginView>  */}

      <BookList />
      <Footer />
    </>
  );
}

export default App;
