import GlobalStyle from 'assets/styles/globalStyles';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import Register from 'components/templates/Register/Register';
import Login from 'components/templates/Login/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
                <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route exact path="/" element={<Dashboard />} />
                </Routes>
            </ThemeProvider>
        </Router> 
     );
}
 
export default App;