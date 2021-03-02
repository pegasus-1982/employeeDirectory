import './App.css';
import Header from './components/header'
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  return (
    <div className="container">
      <Header/>
      <SearchResultContainer/>    
    </div>
  );
}

export default App;
