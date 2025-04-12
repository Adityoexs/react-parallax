import { Outlet, Link } from "react-router-dom";

const Layout=()=>{
    return (    
        <>
                <div className='navBar'>
                    <div className='stocks'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='favourites'>
                        <Link to="/paralax1">paralax 1</Link>
                </div>
                    <div className='cart'>
                        <Link to="/paralax2">paralax 2</Link>
                    </div>
                    <div className='cart'>
                        <Link to="/paralax3">paralax 3</Link>
                    </div>
                </div>
                <Outlet />
                </>
    )

}

export default Layout;