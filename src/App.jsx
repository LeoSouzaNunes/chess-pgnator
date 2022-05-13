import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components";
import { Home } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
