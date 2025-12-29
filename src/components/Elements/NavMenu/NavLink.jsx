/** @format */
const NavLink = ({ href, children, className = "", ...props }) => {
  return (
    <a
      href={href}
      className={`cursor-pointer tracking-wide ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
