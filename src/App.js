import './styles/app.scss';
import { BrowserRouter } from "react-router-dom";
import { Banner,Projects,Resume,Tech,Contact,BorderCard } from "./components";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Banner/>
          <Projects/>
          <Tech />
          <Resume/>
          <Contact/>
          {/* <BorderCard/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
