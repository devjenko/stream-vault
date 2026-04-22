import React from 'react'

interface NavbarProps {
  children: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="nav-bar  p-2! sm:p-[2.4rem]!">
      <div className="logo ">
        <span role="img">
          <a href="/">
            <img
              className="rounded-sm min-w-14"
              src="/icon/stream-vault-icon.png"
              alt="Stream Vault icon"
              width={32}
              height={32}
            />
          </a>
        </span>
        <h1 className="hidden md:block">Stream Vault</h1>
      </div>
      {children}
    </nav>
  )
}

export default Navbar
