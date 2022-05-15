import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components";
import { Home, PgnEditor } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pgn-editor" element={<PgnEditor />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
