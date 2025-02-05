import BlogCard from "./components/BlogCard";
import Header from "./components/Header"
import ReadMore from "./components/ReadMore";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<BlogCard/>}/>
          <Route path="/post/:id" element={<ReadMore/>}/>
        </Routes>
      </Router>
    {/* 
    <BlogCard/> */}
    </div>
  );
}

export default App;
