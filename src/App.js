import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Testimonial } from "./components/testimonial/Testimonial";
import { COUNTRY_CONTENT } from "./constants/countryContent";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          exact
          path="/us"
          render={() => (
            <Testimonial country="US" variant={COUNTRY_CONTENT["US"].variant} />
          )}
        />
        <Route
          exact
          path="/india"
          render={() => (
            <Testimonial
              country="INDIA"
              variant={COUNTRY_CONTENT["INDIA"].variant}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
