import Navbar from './Components/Navbar/Navbar';
import TopNav from './Components/Navbar/TopNav';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="bg-[#E5E5E5]">
      <div className='flex transform ease-in-out transition duration-500'>
        <div className=''>
          <Navbar className="transform ease-in-out transition duration-500" ></Navbar>
        </div>
        <div className=' w-full '>
          <TopNav className="w-full translate-x-0 transform ease-in-out transition duration-500"></TopNav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;

