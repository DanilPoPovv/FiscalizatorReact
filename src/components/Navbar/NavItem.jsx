export function NavItem({ NavName, onClick }) {
  return (
    <div className="navItem" onClick={onClick}>
      {NavName}
    </div>
  );
}