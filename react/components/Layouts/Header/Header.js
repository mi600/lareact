import React, {Component} from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

class Header extends Component {
  
    constructor(props) {
      super(props);
        if(localStorage.appState) {
            this.state = JSON.parse(localStorage.appState);
        } else {
            this.state = {
              user: props.userData,
              isLogged: props.userIsLoggedIn
            };
        }
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
      let appState = {
        isLogged: false,
        user: {}
      };
      localStorage["appState"] = JSON.stringify(appState);
      this.setState(appState);
      this.props.history.push('/login');
    }

    render() {
      const aStyle = {
        cursor: 'pointer'
    };
    
    return (
        <nav className="navbar">
            <ul>
                
                {this.state.isLogged &&
                <li className="has-sub">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <Link to="/login" onClick={this.logOut}>Logout</Link>
                </li>
                } 
                
                {!this.state.isLogged &&
                <li>
                    <Link to="/login">Login</Link> |
                    <Link to="/register">Register</Link>
                </li>
                }
            </ul>
        </nav>
    )
  }
}

export default withRouter(Header)
