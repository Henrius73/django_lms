import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      {/*Latest Course*/}
      <h3 className="pb-2 mb-4">Latest Course <a href="#" className="float-end">See all</a></h3>
      <div className="row">
      <div className="col-md-3">
          <div className="card">
          <Link to="/detail/1"><img src="logo192.png" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      {/*End Latest Course*/}
      {/*Popular Course*/}
      <h3 className="pb-1 mb-4 mt-5">Popular Course <a href="#" className="float-end">See all</a></h3>
      <div className="row">
      <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      {/*End Popular Course*/}
      {/*Student Testimonial*/}
      <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <figure class="text-center">
          <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
          </div>
          <div className="carousel-item">
          <figure class="text-center">
          <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
          </div>
          <div className="carousel-item">
          <figure class="text-center">
          <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
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
      {/*End Popular Course*/}
    </div>
  );
}

export default Home;