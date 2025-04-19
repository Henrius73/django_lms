import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function AddCourses() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="staticEmail" className="form-label">Title</label>
                                <input type="text" readOnly className="form-control" id="staticEmail" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleInputEmail1"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Course Video</label>
                                <div className="custom-file-input-wrapper">
                                    <input 
                                        type="file" 
                                        className="form-control d-none" 
                                        id="inputPassword" 
                                        onChange={(e) => console.log(e.target.files[0]?.name)} 
                                    />
                                    <label htmlFor="inputPassword" className="btn btn-secondary">Browse</label>
                                    <span id="file-name" className="ms-2">No file chosen</span>
                                </div>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddCourses;