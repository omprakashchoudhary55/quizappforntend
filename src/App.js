import "./App.css";
import Header from "./components/Header";

import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <AllRoutes />
    </div>
  );
}

export default App;
