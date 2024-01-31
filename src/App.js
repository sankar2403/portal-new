import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Jobdetails from './components/JobDetails/Jobdetails';
import React , {useState}from 'react';

function App() {
  const [filterData , setFilterData] = useState([]);

  return (
    <div className="app">
        <Navbar  setFilterData={setFilterData}/>
        <div className='body-container'>
        <Sidebar />
        <Jobdetails filterData={filterData} />
        </div>
    </div>
  );
}

export default App;
