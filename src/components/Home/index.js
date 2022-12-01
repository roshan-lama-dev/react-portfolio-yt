import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Ro
          <img src={LogoTitle} alt="logo" />
          han
          <br />
          web developer
        </h1>
        <h2>Full Stack Developer</h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
