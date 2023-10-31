

function Sidebar() {

  return (
    <>
  <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-menu-button-wide"></i><span>Overview</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle"></i><span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Reports</span>
            </a>
          </li>
          </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#user-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-people-fill"></i><span>User Management</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="user-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle"></i><span>Roles & Permissions</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Users Activity</span>
            </a>
          </li>
          </ul>
      </li>


      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#content-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-pencil"></i><span>Content</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="content-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle"></i><span>Posts / Articles</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Medila Library</span>
            </a>
          </li>
          </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#market-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-broadcast-pin"></i><span>Marketing</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="market-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle"></i><span>Email Campaigns</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Social Media</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Advertisements</span>
            </a>
          </li>
          </ul>
      </li>

      {/* <li className="nav-heading">Pages</li> */}


      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-currency-dollar"></i>
          <span>Finance</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="bi bi-headset"></i>
          <span>Support</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </a>
      </li>

    </ul>

  </aside>
    </>
  )
}

export default Sidebar
