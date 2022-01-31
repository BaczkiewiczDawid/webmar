import { useState } from 'react';
import GlobalStyle from 'assets/styles/globalStyles';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import Register from 'components/templates/Register/Register';
import Login from 'components/templates/Login/Login';
import Profile from 'components/templates/Profile/Profile';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState({
        authenticated: false,
        loggedUser: ''
    });

    console.log(isAuthenticated)

    return (
        <Router>
                <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route exact path="/" element={<Dashboard isAuthenticated={isAuthenticated} />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/user/:id" element={<Profile isAuthenticated={isAuthenticated} />} />
                </Routes>
            </ThemeProvider>
        </Router> 
     );
}
 
export default App;