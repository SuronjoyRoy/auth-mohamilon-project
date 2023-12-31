/* eslint-disable react/prop-types */
import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

 const authInfo = { name: "nodi sagor khal bill" };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}