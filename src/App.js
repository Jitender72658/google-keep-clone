import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className='mainContainer'>
         <Sidebar/>
         <Content/>
       </div>
    </div>
  );
}

export default App;
