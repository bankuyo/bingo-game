import React from "react";

const Header: React.FC = () => {
    return(
        <header className="navbar navbar-dark" style={{ backgroundColor: "#7d02f0"}}>
            <div className="container d-flex justify-content-center">
                <h1 className="navbar-brand fs-2">Tanabata Party</h1>
            </div>
        </header>
    )
}

export default Header;