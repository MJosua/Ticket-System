import Header from "../Component/Header.jsx";

import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar.jsx";

function Homepage() {
    return (
        <div>
            <Header />
            <div className="container-fluid vw-100 vh-100">
                <div className="row h-100">

                    <div className="col-0 col-md-3 col-lg-2 h-100 border bg-light d-none d-md-block">
                        <Sidebar />
                    </div>

                    <div className="col-12 col-md-9 col-lg-10 h-100 bg-white ">
                        .
                    </div>

                </div>
            </div>

        </div>


    )
}
export default Homepage;