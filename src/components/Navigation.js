import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="navigationContent">
        <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Formation" activeClassName="navActive">
                Formation RT
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Pageenconstruction" activeClassName="navActive"> {/* /Partenaires */}
              l'IUT en action
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Pageenconstruction" activeClassName="navActive"> {/* /Vieetudiante */}
                Vie étudiante
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Pageenconstruction" activeClassName="navActive"> {/* /Poursuiteetudes */}
                Poursuite d'études
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Pageenconstruction" activeClassName="navActive"> {/* /Partenaires */}
                Nos partenaires
              </NavLink>
            </li>
            
        </ul>
      </div>
  );
};

export default Navigation;