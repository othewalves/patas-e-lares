import { BrowserRouter, Route, Routes } from 'react-router';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/settings" element={<h2>Settings</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export { AppRouter };