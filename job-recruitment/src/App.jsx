import react from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from "./pages/Home";
import RoleSelection from "./pages/register/RoleSelection";
import JobSeekerRegister from "./pages/register/JobSeekerRegister";
import EmployerRegister from "./pages/register/EmployerRegister";
import Login from "./pages/login";
import CategoriesSection from "./sections/CategoriesSection";
import JobSeekerDashboard from "./components/Dashboard/JobSeekerDashboard";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import PostJob from "./components/Dashboard/PostJob";
import AvailableJobs from "./components/Dashboard/AvailableJobs";

function App() {
  
    return(
     
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RoleSelection />} />
      <Route path="/register/jobseeker" element={<JobSeekerRegister />} />
      <Route path="/register/employer" element={<EmployerRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/categories" element={<CategoriesSection />} />
      
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />

  <Route
    path="/jobseeker-dashboard"
    element={<JobSeekerDashboard />}
  />

  <Route
    path="/employer-dashboard"
    element={<EmployerDashboard />}
  />

  <Route
    path="/admin-dashboard"
    element={<AdminDashboard />}
  />
  <Route
  path="/post-job"
  element={<PostJob />}
/>
<Route
  path="/available-jobs"
  element={<AvailableJobs />}
/>
</Routes>
    
     
    )
  }

export default App;
