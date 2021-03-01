import './App.css';
import Header from './components/header'
import Content from './components/content'
import SearchResultContainer from "./components/SearchResultContainer";


function App() {
  return (
    <div class="container">
      <Header/>

      <SearchResultContainer/>
      
      <Content/>

      
    </div>
  );
}

export default App;
