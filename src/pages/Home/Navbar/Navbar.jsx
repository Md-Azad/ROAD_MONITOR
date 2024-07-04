import { Link } from "react-router-dom";

const Navbar = () => {

    const isLogged = localStorage.getItem('logged');
    console.log(isLogged);
    const handleLogOut = () => {
        localStorage.removeItem('logged')
        alert('You have been logged out')
    }
    
  return (
    <div className="flex justify-around">
        <div>
            
            <Link to="/" className="font-bold text-orange-800 text-xl">Road Monitor System</Link>
        </div>
        <div>
            <ul className="flex justify-center gap-10">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                { isLogged ? <Link onClick={handleLogOut} to="/">LogOut</Link>:<Link  to="/login" >Login</Link>}
            </ul>
        </div>
    </div>
  );
};

export default Navbar;