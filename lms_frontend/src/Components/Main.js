import Footer from './Footer';
import Header from './Header';
import CourseDetail from './CourseDetail';
import About from './About';
import Home from './Home';

import {Routes as Switch,Route} from 'react-router-dom';
import Login from './User/Login';
import Register from './User/Register';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<CourseDetail />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-register" element={<Register />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;