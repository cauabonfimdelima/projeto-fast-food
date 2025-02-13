import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <RoutesApp/>
    </div>  
  );
}

export default App;
