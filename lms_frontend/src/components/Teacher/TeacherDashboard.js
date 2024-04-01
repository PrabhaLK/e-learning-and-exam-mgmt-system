import { Link } from 'react-router-dom';
import Sidebar from './TeacherSidebar';
import {useEffect} from 'react'

function TeacherDashboard() {
    useEffect(()=>{
        document.title ="Teacher DashBoard | LearnPro";
    }
    );
    return (
        <div className="container mt-4">
            <div className='row'>
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9 ">
                  Dashboard
                  <br></br>
                  <h3>Welcome Teacher, Let's Start Learning!</h3>

                  <p>this section is still under developement. Better things are yet to come!</p>
                </section>
            </div>
        </div>
    )
}

export default TeacherDashboard; 