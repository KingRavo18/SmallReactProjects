import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/counter";
import Sidebar from "./components/sidebar";
import RandomNumberGenerator from "./components/randomNumberGen";
import ColorPicker from "./components/colorPicker";


export default function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/components/randomNumberGen" element={<RandomNumberGenerator/>}/>
        <Route path="/components/colorPicker" element={<ColorPicker/>}/>
      </Routes>
    </BrowserRouter>
  )
}
