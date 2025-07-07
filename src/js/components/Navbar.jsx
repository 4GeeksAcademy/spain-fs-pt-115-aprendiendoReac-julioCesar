export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark px-5">
    <div className="container-fluid">
        <h1 className="navbar-brand m-0 text-danger">PokerStart</h1>

        
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="text-danger fs-3">☰</span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active text-danger" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
};