const style = {
  padding: '10px 20px',
  display: 'inline-block',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: '#222222',
  borderRadius: '10px',
  textAlign: 'center',
  fontSize: '14px',
  boxShadow: '0px 2px 6.8px 0px rgba(0, 0, 0, 0.1)',
  margin: '0 25px',
};

const activeStyle = {
  ...style,
  backgroundColor: '#00BF63',
  color: '#ffff',
};

const Tabbarmenu = ({ children, isActive }) => (
  <span className="mt-4 mt-md-0" style={isActive ? activeStyle : style}>{children}</span>
);

export default Tabbarmenu;
