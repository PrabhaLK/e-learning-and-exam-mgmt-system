import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import {useEffect} from 'react'
function FavouriteCourses() {
    useEffect(()=>{
        document.title ="Favourite Courses | LearnPro";
    }
    );
    return (
        <div className="container mt-4">
            <div className='row'>
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9 ">
                    <div className='card'>
                        <h5 className='card-header'>Favourite Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Java</td>
                                        <td><Link to="/">Saman Kumara</Link></td>
                                        <td><button className='btn- btn-danger'>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FavouriteCourses;