import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


function Dashboard() {
    return (
        <div className="container mt-4">
            <div className='row'>
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9 ">
                  Dashboard
                  <br></br>
                  <h3>Welcome User, Let's Start Learning!</h3>

                  <p>this section is still under developement. Better things are yet to come!</p>
                </section>
            </div>
        </div>
    )
}

export default Dashboard; 