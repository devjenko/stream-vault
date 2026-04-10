import React from 'react'

interface NavbarProps {
  children: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">
          <a href="/">
            <img
              className="rounded-sm"
              src="/icon/stream-vault-icon.png"
              alt="Stream Vault icon"
              width={32}
              height={32}
            />
          </a>
        </span>
        <h1>Stream Vault</h1>
      </div>
      {children}
    </nav>
  )
}

export default Navbar
