import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SidebarMenu from "./components/SidebarMenu";
import Navbar from "./components/layout/Navbar";

function App() {
  
  const [menuToggle,setMenuToggle] = useState(false);
  const menuHandler = () => {
    setMenuToggle(!menuToggle);
  }
  return (
    <div className={menuToggle ? "font-vazir flex flex-col overflow-hidden" : "font-vazir flex flex-col"}>
      <SidebarMenu menuToggle={menuToggle}  menuHandler={menuHandler} />
      <div className='flex flex-col md:pr-64'>
        <Navbar menuHandler={menuHandler} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
