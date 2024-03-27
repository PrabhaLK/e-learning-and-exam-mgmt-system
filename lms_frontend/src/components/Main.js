import Header from './Header';
import Home from './Home';
import CourseDetail from './CourseDetail';
import Login from './user/Login';
import Register from './user/Register';
import About from './about';
import Footer from './Footer'
//Users
import FavouriteCourses from './user/FavouriteCourses';
import RecomendedCourses from './user/RecomendedCourses';
import MyCourses from './user/MyCourses';
import Dashboard from './user/Dashboard';
import ProfileSetting from './user/ProfileSetting';
import ChangePassword from './user/ChangePassword';
//Teachers
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherSidebar from './Teacher/TeacherSidebar'

import { Routes as Switch,Route } from 'react-router-dom';


function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/detail/:course_id" element={<CourseDetail />}/>
                <Route path="/user-login" element={<Login />}/>
                <Route path="/user-register" element={<Register />}/>
                <Route path="/user-dashboard" element={<Dashboard />}/>
                <Route path="/favourite-courses" element={<FavouriteCourses />}/>
                <Route path="/recomended-courses" element={<RecomendedCourses />}/>
                <Route path="/my-courses" element={<MyCourses />}/>
                <Route path="/profile-settings" element={<ProfileSetting />}/>
                <Route path="/change-password" element={<ChangePassword />}/>
                <Route path="/teacher-login" element={<TeacherLogin />}/>
                <Route path="/teacher-register" element={<TeacherRegister />}/>
                <Route path="/teacher-dashboard" element={<TeacherDashboard />}/>
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
