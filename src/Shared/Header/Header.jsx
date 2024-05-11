import { Link, NavLink } from "react-router-dom";
import './Header.css'
import image from './Image/logo.webp'

const Header = () => {

    // const [theme, setTheme] = useState('light')

    // const { user, logOut } = useContext(AuthContext)

    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)
    // }, [theme])

    // const handleToggle = e => {
    //     console.log(e.target.value)
    //     if (e.target.checked) {
    //         setTheme('dark')
    //     }
    //     else {
    //         setTheme('light')
    //     }
    // }

    // console.log(theme)

    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }

    const links = <>
        <li><NavLink to="/"><span className="text-lg font-semibold">Home</span></NavLink></li>
        <li><NavLink to="/Blogs"><span className="text-lg font-semibold">Blogs</span></NavLink></li>
        <li><NavLink to="/AddCraft"><span className="text-lg font-semibold">Add Craft Item</span></NavLink></li>
        <li><NavLink to="/MyArtCraft"><span className="text-lg font-semibold">My Art&Craft List</span></NavLink></li>
        {/* <li><NavLink to="/TopRatedBook">Catalog</NavLink></li> */}

    </>

    return (
        <div className="">
            <div className="lg:navbar md:navbar bg-white">
                <div className="navbar-start-Custom">
                    <div className="dropdown md:top-[2px] ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:w-[40px] md:h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {links}
                            <div className="flex gap-4 ml-[100px] md:mt-0 sm:mt-10 lg:mt-0">
                                <Link to="/login">
                                    <button className="button40 lg:mb-0 md:mb-0 mb-5">LOGIN</button>
                                </Link>
                                <Link to="/register">
                                    <button className="button40">REGISTER</button>
                                </Link>
                            </div>
                        </ul>
                    </div>

                    <div className="lg:ml-10 md:ml-10 sm:ml-0">
                        <img src={image} alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                        <div className="flex gap-4 ml-[180px] md:mt-0 sm:mt-10 lg:mt-0">
                            <Link to="/login">
                                <button className="button40 lg:mb-0 md:mb-0 mb-5">LOGIN</button>
                            </Link>
                            <Link to="/register">
                                <button className="button40">REGISTER</button>
                            </Link>
                        </div>
                    </ul>
                </div>
                <div className="">

                    {/* <div className="">
                        {
                            user && <span className=" absolute lg:inline md:inline hidden cursor-pointer w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full relative right-16  w-[45px] h-[45px]" src={user.photoURL} alt="" title={user.displayName} /></span>
                        }

                        {
                            user ?
                                <button onClick={handleSignOut} className="button40">LOG OUT</button>
                                :
                                <div className="flex gap-4 ml-[100px] md:mt-0 sm:mt-10 lg:mt-0">
                                    <Link to="/login">
                                        <button className="button40 lg:mb-0 md:mb-0 mb-5">LOGIN</button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="button40">REGISTER</button>
                                    </Link>
                                </div>
                        }
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Header;