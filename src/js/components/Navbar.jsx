export const Navbar = () => {
    return (
        <nav className="navbar bg-dark px-5">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h1 className="navbar-brand m-0 text-danger">PokerStart</h1>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active text-danger" aria-current="page" href="#">
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
                        <a className="nav-link text-danger" aria-disabled="true">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};