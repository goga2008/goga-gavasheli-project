import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLayout from "./layouts/MainLayout";


function App(){
  return(
    <BrowserRouter>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h1 className="text-3xl font-blod text-blue-600">
            React და  TaliWind-ი მოგესალმებათ
          </h1>
        </div>
    </BrowserRouter>
  )
}

export default App