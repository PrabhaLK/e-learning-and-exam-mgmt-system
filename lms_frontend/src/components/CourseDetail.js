import { useParams } from "react-router-dom";

function CourseDetail() {
    let { course_id } = useParams();
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-4 ">
                    <img src="../images/java.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Java</h3>
                    <p>
                        Java is a powerful and versatile programming language widely used in software development, web applications, mobile apps, and enterprise systems.
                        This comprehensive course covers fundamental concepts such as object-oriented programming (OOP),
                        data structures, algorithms, exception handling, and multithreading.
                        Students will learn to design, develop, and deploy Java applications,
                        gaining hands-on experience with key Java technologies like Java SE, Java EE, and JavaFX.
                        By the end of this course, participants will have a strong foundation in Java programming, enabling them to create
                        robust and scalable software solutions for various platforms and industries.
                    </p>
                    <p><b>Course By:</b> <a href="#">Saman Kumara</a></p>
                    <p><b>Duration: </b>3 Hours 13 Minutes</p>
                    <p><b>Total Enrolled:</b> 2 Students</p>
                    <p><b>Rating: </b> 4/5</p>
                </div>
            </div>
            {/*course videos start*/}
            <div className="card mt-4">
                <div className="card-header">
                    Course Videos
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item ">Introduction to Java<button className="btn btn-danger btn-sm float-end">
                        <i className="bi-youtube"></i></button></li>
                    <li className="list-group-item">JAVA Get Started<button className="btn btn-danger btn-sm float-end">
                        <i className="bi-youtube"></i></button></li>
                    <li className="list-group-item">Java Syntax<button className="btn btn-danger btn-sm float-end">
                        <i className="bi-youtube"></i></button></li>
                    <li className="list-group-item ">Introduction to Java<button className="btn btn-danger btn-sm float-end">
                        <i className="bi-youtube"></i></button></li>
                    <li className="list-group-item">JAVA Get Started<button className="btn btn-danger btn-sm float-end">
                        <i className="bi-youtube"></i></button></li>
                    <li className="list-group-item">Java Syntax<button className="btn btn-danger btn-sm float-end">
                        <i className="bi-youtube"></i></button></li>

                </ul>
            </div>
            {/*course videos end*/}
            <h3 className="pb-1 mb-4">Latest Courses<h6><button type="button" className="float-end  btn-primary rounded-pill" href="#"> See all</button></h6></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="./images/java.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Java</Link></h5>
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
            </div>
        </div>
    );
}

export default CourseDetail;