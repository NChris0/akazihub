import react from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from "./pages/Home";
import RoleSelection from "./pages/register/RoleSelection";
import JobSeekerRegister from "./pages/register/JobSeekerRegister";
import EmployerRegister from "./pages/register/EmployerRegister";
import Login from "./pages/login";
import CategoriesSection from "./sections/CategoriesSection";

import JobSeekerLayout from "./components/layouts/JobSeekerLayout";
import EmployerLayout from "./components/layouts/EmployerLayout";
import AdminLayout from "./components/layouts/AdminLayout";

import JobSeekerDashboard from "./components/Dashboard/JobSeekerDashboard";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import AvailableJobs from "./components/Dashboard/AvailableJobs";
import MyApplications from "./components/Dashboard/MyApplications";
import Profile from "./components/Dashboard/Profile";
import EditProfile from "./components/dashboard/EditProfile";
import UploadCV from "./components/Dashboard/UploadCV";

import PostJob from "./components/Dashboard/PostJob";
import MyPostedJobs from "./components/Dashboard/MyPostedJobs";
import ViewApplicants from "./components/Dashboard/ViewApplicants";

 import ManageJobs from "./components/dashboard/admin/ManageJobs";
 import ManageEmployers from "./components/dashboard/admin/ManageEmployers";
 import ManageJobSeekers from "./components/dashboard/admin/ManageJobSeekers";

 import EditJob from "./components/dashboard/jobseeker/EditJob";
 import EditJobs from "./components/dashboard/employer/EditJob";
 import JobDetails from "./components/Dashboard/jobseeker/JobDetails";


function App() {
  
    return(
     
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RoleSelection />} />
      <Route path="/register/jobseeker" element={<JobSeekerRegister />} />
      <Route path="/register/employer" element={<EmployerRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/categories" element={<CategoriesSection />} />
      <Route path="/jobseeker" element={<JobSeekerLayout />}>
  <Route index element={<JobSeekerDashboard />} />
     <Route
    path="available-jobs"
    element={<AvailableJobs />}
  />

       <Route
    path="my-applications"
    element={<MyApplications />}
  />

       <Route
    path="profile"
    element={<Profile />}
  />

    <Route
    path="upload-cv"
    element={<UploadCV />}
  />

 
</Route>
         <Route
  path="/job/:id"
  element={<JobDetails />}
/>
       <Route
  path="/employer"
  element={<EmployerLayout />}
>
  <Route
    index
    element={<EmployerDashboard />}
  />

  <Route
    path="post-job"
    element={<PostJob />}
  />

  <Route
    path="my-posted-jobs"
    element={<MyPostedJobs />}
  />

  <Route
    path="view-applicants/:jobId"
    element={<ViewApplicants />}
  />

    <Route
    path="edit-job/:id"
    element={<EditJob />}
  />

  <Route path="/employer" element={<EmployerLayout />} />
</Route>
       <Route
  path="/admin"
  element={<AdminLayout />}
>
  <Route
    index
    element={<AdminDashboard />}
  />

  <Route
    path="jobs"
    element={<ManageJobs />}
  />

  <Route
    path="employers"
    element={<ManageEmployers />}
  />

  <Route
    path="jobseekers"
    element={<ManageJobSeekers />}
  />
</Route>
  
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/my-posted-jobs" element={<MyPostedJobs />} />
      
      
    </Routes>
    
     
    )
  }

export default App;
