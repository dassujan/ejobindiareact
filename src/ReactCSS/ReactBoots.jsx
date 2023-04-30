import React from "react";

const ReactBoots = () => {
    return (
        <div className="container">
            <header className=" h1 text-center text-primary border-bottom border-5 border-dark p-2 m-2 bg-warning">
                Example of React Bootstrap
            </header>
            <nav className="nav bg-dark m-2 p-2 justify-content-end">
                <a className="nav-link text-light" href="#">Home</a>
                <a className="nav-link text-light" href="#">About</a>
                <a className="nav-link text-light" href="#">Contact</a>
            </nav>

            <i className="bi bi-yin-yang"></i>
            <i className="bi bi-whatsapp"></i>
            <input type="text" placeholder="Search" style={{borderRadius:'30px'}}/>
            
        </div>
    )
}

export default ReactBoots;