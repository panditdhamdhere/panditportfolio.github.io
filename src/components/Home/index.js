import { Link } from 'react-router-dom';
// import LogoTitle from '../../Assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br /> I'm Pandit
            {/* <img src={LogoTitle} alt="developer" /> */}
            <br />
            web developer
            </h1>
            <h2>Frontend Developer / JavaScript Expert / Blockchain</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  );
}

export default Home
