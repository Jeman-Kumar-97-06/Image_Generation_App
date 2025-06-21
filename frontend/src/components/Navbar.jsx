import { useLogout } from "../hooks/useLogout";

const Navbar = ({username,profPic}) => {
    const {logout} = useLogout();
    const handleLogout = () => {
        logout();
    }
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-blue-500/30 text-purple-400 p-4 text-center text-xl font-bold flex justify-between items-center border-b border-white/20 shadow-sm">
            <h1 
              style={{
                fontFamily : 'SpaceAge',
                fontSize: '20px', // Fits the height of h-32 (~128px) dynamically
                lineHeight: '1',
                // textShadow: '0 0 5px white, 0 0 15px white',
              }}
              className="text-lg font-bold">Imaginetix</h1>
            <div className="flex items-center gap-4">
                <span className="text-white text-[17px]">{username}</span>
                <img src={profPic} alt="pic" className="w-7 h-7 rounded-full text-white text-[17px]"/>
                <button
                    onClick={handleLogout}
                    className="bg-red-500/80 hover:bg-red-600 px-3 py-1 rounded cursor-pointer transition text-white text-[17px]"
                >
                    Logout
                </button>
            </div>
        </nav>
    )  
};

export default Navbar;