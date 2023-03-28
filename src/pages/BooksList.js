import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <h1>BooksList</h1>
            <h5>
                <Link to="/book/1">Book 1</Link>
            </h5>
            <h5>
                <Link to="/book/2">Book 2</Link>
            </h5>

        </>
    );


}

export default App;