import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function CourseDetail(){
    let { course_id } = useParams();
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo192.png" className="img-thumbnail w-100" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.</p>
                    <p className="fw-bold">Course By: <a href="#">Teacher 1</a></p>
                    <p className="fw-bold">Duration: <a href="#">Teacher 1</a></p>
                    <p className="fw-bold">Total Enrolled:</p>
                    <p className="fw-bold">Rating:</p>
                </div>
            </div>   
            {/* Course Video */} 
            <div className="card mt-4">
                <h4 class="card-header">
                    Course Videos
                </h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 hours 30 minutes</span>
                            <button className="btn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li class="list-group-item">Introduction 
                        <button className="btn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button></li>
                    <li class="list-group-item">Introduction 
                        <button className="btn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button></li>
                    <li class="list-group-item">Introduction 
                        <button className="btn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button></li>
                    <li class="list-group-item">Introduction 
                        <button className="btn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button></li>   
                </ul>
            </div>
                <h3 className="pb-2 mb-4">Related Course</h3>
                <div className="row">
                <div className="col-md-3">
                        <div className="card">
                        <Link to="/detail/1"><img src="/logo192.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                            <p className="card-text"></p>
                            </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="/logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Course title</a></h5>
                        <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;