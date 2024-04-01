import { Link } from 'react-router-dom';
import {useEffect} from 'react'

function TeacherRegister() {
    useEffect(()=>{
        document.title ="Teacher Register";
    }
    );
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h5 className='card-header text-center'>Resgiter as a Teacher</h5>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Qualifications</label>
                                    <textarea className='form-control' />
                                    <div id="emailHelp" class="form-text">php, Python, JavaScript, etc.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Skills</label>
                                    <textarea className='form-control' />
                                    <div id="emailHelp" class="form-text">php, Python, JavaScript, etc.</div>
                                </div>


                                <button type="submit" className="btn btn-primary">Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default TeacherRegister;