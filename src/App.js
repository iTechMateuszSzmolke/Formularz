import logo from './logo.svg';
import './App.css';
import Input from '@mui/joy/Input';
import FormContainer from "./FormContainer";
import PDFContainer from "./PDFContainer";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<FormContainer/>} />
            <Route path="/pdf" element={<PDFContainer/>} />
        </Routes>
      </main>
  )
}

export default App;
