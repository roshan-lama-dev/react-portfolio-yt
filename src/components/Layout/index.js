import { Outlet } from 'react-router-dom'
import Siderbar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Siderbar />

      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        {/* Outlet renders the child element if there is one */}
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
