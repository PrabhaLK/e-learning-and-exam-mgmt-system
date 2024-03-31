import { Link } from "react-router-dom";
function TeacherDetail() {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-4 ">
                    <img src="/images/samanKumara.webp"className="img-thumbnail" alt="Teacher Image" />
                </div>
                <div className="col-8">
                    <h3>Jhon Doe</h3>
                    <p>
                        Java is a powerful and versatile programming language widely used in software development, web applications, mobile apps, and enterprise systems.
                        This comprehensive course covers fundamental concepts such as object-oriented programming (OOP),
                        data structures, algorithms, exception handling, and multithreading.
                        Students will learn to design, develop, and deploy Java applications,
                        gaining hands-on experience with key Java technologies like Java SE, Java EE, and JavaFX.
                        By the end of this course, participants will have a strong foundation in Java programming, enabling them to create
                        robust and scalable software solutions for various platforms and industries.
                    </p>
                    <p><b>Skills:</b> <Link to="/category/php">php</Link>, <Link to="/category/php">Python</Link>, <Link to="/category/php">JavaScript</Link></p>
                    <p><b>Recent Course: </b> <Link to="/course-detail/1">Java</Link></p>
                    <p><b>Total Enrolled:</b> 2 Students</p>
                    <p><b>Rating: </b> 4/5</p>
                </div>
            </div>
            {/*course videos start*/}
            <div className="card mt-4">
                <div className="card-header">
                    <h5 className="text-center">Course List</h5>
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/course-detail/1" className="list-group-item list-group-item-action">Java</Link>
                    <Link to="/course-detail" className="list-group-item list-group-item-action">Php Course For Beginners</Link>
                    <Link to="/course-detail" className="list-group-item list-group-item-action">Php Advanced</Link>
                    <Link to="/course-detail" className="list-group-item list-group-item-action">Python</Link>
                </div>
            </div>
            {/*course videos end*/}
        </div>
    );
}

export default TeacherDetail;