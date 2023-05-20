import Dashboard from "./components/Dashboard";
import SidebarMenu from "./components/SidebarMenu";

function App() {
  return (
    <div className="font-vazir flex flex-col">
      <SidebarMenu />
      <Dashboard />
    </div>
  );
}

export default App;
