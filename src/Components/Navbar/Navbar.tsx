import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-300 flex h-14 justify-between items-center">
            <h3 className="text-3xl text-white font-bold ml-20">
               <NavLink to="/">Finance tracker</NavLink>
            </h3>
            <div className="text-2xl flex">
                <button className="mr-10 hover:bg-blue-200 active:bg-blue-400 focus:outline-none">
                    <NavLink to="/categories">Categories</NavLink>
                </button>
                <button className="mr-10 hover:bg-blue-200 active:bg-blue-400 focus:outline-none">Add</button>
            </div>
            {/*<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">*/}
            {/*    <div className="bg-white p-6 rounded shadow-lg w-96 h-96">*/}
            {/*        <h2 className="text-2xl mb-4">Preview заказа</h2>*/}
            {/*        <ul>*/}
            {/*        </ul>*/}
            {/*        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-60" >Закрыть*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Navbar;