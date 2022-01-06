import { Link } from 'react-router-dom';

const styleLink = {
  flexGrow: 1, 
  textAlign: "center"
}

function Navbar() {
    return (
        <div>
            <div style={{ display : "flex" }}>
        <div style={styleLink}>
          <Link to="/" >Home</Link>
        </div>
        <div style={styleLink}>
          <Link to="/search" >Search</Link>
        </div>
        <div style={styleLink}>
          <Link to="/login" >Login</Link>
        </div>
      </div>
        </div>
    )
}

export default Navbar;