import React from 'react'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import Logo from './Logo'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from './Container/Container'

function Header() {
  const authStatus = useSelector((state) => state.auth.Status)
  const Navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ];
  return (
    <header className="bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" aria-label="Home">
              <Logo width="48px" />
            </Link>
            <span className="text-lg font-semibold text-gray-800">DevUI</span>
          </div>

          {/* Right: Nav Items */}
          <ul className="flex items-center gap-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => Navigate(item.slug)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header