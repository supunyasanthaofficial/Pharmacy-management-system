import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<UserLogin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
