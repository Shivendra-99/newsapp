import './App.css';
import Middle from './components/Middle';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<div><Middle key="general" pageSize={3} country="in" category={null}/> <NewsItem key="general1" pageSize={20} country="in" category={null}/></div>}/>
          <Route exact path="/business" element={<div><Middle key="general2" pageSize={3} country="in" category="business"/> <NewsItem key="general3" pageSize={20} country="in" category="business"/></div>}/>  
          <Route exact path="/entertainment" element={<div><Middle key="general4" pageSize={3} country="in" category="entertainment"/> <NewsItem key="general10" pageSize={20} country="in" category="entertainment"/></div>}/>  
          <Route exact path="/general" element={<div><Middle key="general4" pageSize={3} country="in" category="general"/> <NewsItem key="general13" pageSize={20} country="in" category="general"/></div>}/>  
          <Route exact path="/health" element={<div><Middle key="general5" pageSize={3} country="in" category="health"/> <NewsItem key="general113" pageSize={20} country="in" category="health"/></div>}/>  
          <Route exact path="/science" element={<div><Middle key="general6" pageSize={3} country="in" category="science"/> <NewsItem key="general123" pageSize={20} country="in" category="science"/></div>}/>  
          <Route exact path="/sports" element={<div><Middle key="general7" pageSize={3} country="in" category="sports"/> <NewsItem key="general3" pageSize={20} country="in" category="sports"/></div>}/>
          <Route exact path="/technology" element={<div><Middle key="general4" pageSize={3} country="in" category="technology"/> <NewsItem key="general143" pageSize={20} country="in" category="technology"/></div>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
