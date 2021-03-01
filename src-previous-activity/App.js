import React from "react";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import UserContext from "./utils/UserContext";

function App() {

  const [user, setUser] = useState({
    name: "Bob",
    
  })

  return (
    <div>
      <UserContext.Provider value={user}>
      
      <Navbar />
      <Wrapper>
        <Gallery />
      </Wrapper>
      <Footer />

      </UserContext.Provider>
    </div>
  );
}

export default App;
