import GlobalStyle from 'assets/styles/globalStyles';
import Navigation from 'components/templates/Navigation/Navigation';
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
                </Routes>
            </ThemeProvider>
        </Router> 
     );
}
 
export default App;