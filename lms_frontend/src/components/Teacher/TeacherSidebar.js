import { Link } from 'react-router-dom';

function TeacherSidebar() {
    return (

<div className='card'>
    <h6 className='card-header text-center'>Dashboard</h6>
    <div className='list-group list-group-flush'>
        <Link to="/user-dashboard" className='list-group-item list-group-item-action'>Dashboard</Link>
        <Link to="/my-courses" className='list-group-item list-group-item-action'>My Courses</Link>
        <Link to="/my-courses" className='list-group-item list-group-item-action'>Add Courses</Link>
        <Link to="/my-courses" className='list-group-item list-group-item-action'>My Users</Link>
        <Link to="/profile-settings" className='list-group-item list-group-item-action'>Edit Profile</Link>
        <Link to ="/change-password" className='list-group-item list-group-item-action'>Change Password</Link>
        <Link to="/user-login" className='list-group-item list-group-item-action text-danger'>Logout</Link>
        
    </div>
</div>
    );
}

export default TeacherSidebar;