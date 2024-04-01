// import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect} from 'react'

function PopularCourses() {
    useEffect(()=>{
        document.title ="Popular Courses | LearnPro";
    }
    );
    return (
        <div className='container mt-3'>
            {/* Latest Courses */}
            <h3 className="pb-1 mb-4">Popluar Courses</h3>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/course-detail/1">
                            <img src="./images/java.jpeg" className="card-img-top" alt="Java" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course-detail/1">Java</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="./images/python.jpg" className="card-img-top" alt="Python" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="./images/html.jpg" className="card-img-top" alt="HTML" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">HTML</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="./images/c++.jpeg" className="card-img-top" alt="C++" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">C++</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/course-detail/1">
                            <img src="./images/java.jpeg" className="card-img-top" alt="Java" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Java</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/course-detail/1">
                            <img src="./images/java.jpeg" className="card-img-top" alt="Java" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Java</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/course-detail/1">
                            <img src="./images/java.jpeg" className="card-img-top" alt="Java" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacherdetail/1">Java</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/course-detail/1">
                            <img src="./images/java.jpeg" className="card-img-top" alt="Java" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Java</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Latest Courses */}
            {/* Pagination Start */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* Pagination End */}
        </div>
    );
}

export default PopularCourses;
