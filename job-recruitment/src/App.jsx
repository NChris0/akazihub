import react from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from "./pages/Home";
import RoleSelection from "./pages/register/RoleSelection";
import JobSeekerRegister from "./pages/register/JobSeekerRegister";
import EmployerRegister from "./pages/register/EmployerRegister";
import Login from "./pages/Login";

function App() {
  
    return(
     
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RoleSelection />} />
      <Route path="/register/jobseeker" element={<JobSeekerRegister />} />
      <Route path="/register/employer" element={<EmployerRegister />} />
      <Route path="/login" element={<Login />} />
    </Routes>
     
    )
  }

export default App;
