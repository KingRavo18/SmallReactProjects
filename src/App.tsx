import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/counter";
import Sidebar from "./components/sidebar";
import RandomNumberGenerator from "./components/randomNumberGen";
import ColorPicker from "./components/colorPicker";
import DigitalClock from "./components/digitalClock";
import ToDoList from "./components/toDoList";


export default function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/components/randomNumberGen" element={<RandomNumberGenerator/>}/>
        <Route path="/components/colorPicker" element={<ColorPicker/>}/>
        <Route path="/components/digitalClock" element={<DigitalClock/>}/>
        <Route path="/components/toDoList" element={<ToDoList/>}/>
      </Routes>
    </BrowserRouter>
  )
}
