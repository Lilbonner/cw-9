import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-300 flex h-14 justify-between items-center">
            <h3 className="text-3xl text-white font-bold ml-20">
               <NavLink to="/">Finance tracker</NavLink>
            </h3>
            <div className="text-2xl flex">
                <NavLink to="/categories" className="mr-10">Categories</NavLink>
                <NavLink to="/add" className="mr-10">Add</NavLink>
            </div>
        </div>
    );
};

export default Navbar;