import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around">
        <div>
            <h1 className="font-bold text-orange-800 text-xl">Road Monitor System</h1>
        </div>
        <div>
            <ul className="flex justify-center gap-10">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <Link to="/login" >Login</Link>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;