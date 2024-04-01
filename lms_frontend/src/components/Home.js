import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import '../css/Home.css';
import {useEffect} from 'react'


function Home() {
    useEffect(()=>{
        document.title ="Home | LearnPro";
    }
    );
    return (
        <div className="container mt-4">
            {/* Latest Courses  */}
            <h3 className="pb-1 mb-4">Latest Courses<h6><Link to="/all-courses"><button type="button" className="float-end  btn-primary rounded-pill"> See all</button></Link></h6></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/course-detail/1"><img src="./images/java.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course-detail/1">Java</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/python.jpg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Python</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/html.jpg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">HTML</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/c++.jpeg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">C++</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Latest Courses */}

            {/* popular Courses  */}
            <h3 className="pb-1 mb-4 mt-5">Poplular Courses<h6><Link to="/popular-courses"><button type="button" className="float-end  btn-primary rounded-pill"> See all</button></Link></h6></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/english.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">English</a></h5>
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
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/ps.jpg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Photoshop</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div><div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/visual.webp" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Visual Studio</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 12</span>
                            </div>
                        </div>
                    </div>
                </div><div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/Csharp.jpeg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">C#</a></h5>
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
            {/* End popular Courses */}

            {/* Poplular Teachers  */}
            <h3 className="pb-1 mb-4 mt-5">Popular Teachers<h6><Link to="/popular-teachers"><button type="button" className="float-end  btn-primary rounded-pill"> See all</button></Link></h6></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher-detail/1"><img src="./images/samanKumara.webp" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to="/teacher-detail/1">Jhon Doe</Link></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/JanakaS.jpg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Janaka Sirimanna</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div><div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/SunethD.jpeg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Suneth Douglas</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div><div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="./images/SanaN.jpg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Sanath Nishantha</a></h5>
                            {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular Teachers */}

            {/* Student Testimonials  */}
            <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* End Student testimonials */}
        </div>
    );
}

export default Home;
