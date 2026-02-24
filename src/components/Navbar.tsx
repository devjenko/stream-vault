interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">
          <img
            src="/icon/stream-vault-icon.png"
            alt="Stream Vault icon"
            width={50}
            height={50}
          />
        </span>
        <h1>Stream Vault</h1>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
