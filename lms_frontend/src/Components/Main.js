import Footer from './Footer';
import Header from './Header';
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import CourseDetail from './CourseDetail';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendCourses from './User/RecommendCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';
import Home from './Home';

import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherCourses from './Teacher/TeacherCourses';
import AddCourses from './Teacher/AddCourses';
import UserList from './Teacher/UserList';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';

import About from './About';

import {Routes as Switch,Route} from 'react-router-dom';



function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<CourseDetail />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/user-dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/favorite-courses" element={<FavoriteCourses />} />
          <Route path="/recommend-courses" element={<RecommendCourses />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/teacher-courses" element={<TeacherCourses />} />
          <Route path="/add-courses" element={<AddCourses />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
          <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;