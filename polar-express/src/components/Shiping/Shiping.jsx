import {Outlet} from "react-router-dom";

const Shiping = () => {
    return (
        <>
            <h2 style={{color: 'brown'}} className="title">Shiping page</h2>
            
            <Outlet/>
        </>
    )
}

export default Shiping;