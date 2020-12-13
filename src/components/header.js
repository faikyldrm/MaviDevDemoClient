import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends PureComponent {

    renderLinks() {
        if (this.props.authenticated) {
            return [
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>,

                <li className="nav-item" key="ShowUser">
                    <Link className="nav-link" to="/feature">Show UserList</Link>
                </li>,
            ];
        } else {
            return [
                <li className="nav-item" key="signin">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key="signup">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>,


            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <Link to="/" className="navbar-brand">MaviDev</Link>

                <ul className="navbar-nav">
                    <li className="nav-item" key="ShowUser">
                        <Link className="nav-link" to="/monitorText">Show Text</Link>
                    </li>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
};

export default connect(mapStateToProps)(Header);
