import { useState, createContext, useContext } from "react";
import "./styles.css";

const C = createContext(null);

export default function App() {
    const [ n, setN ] = useState(0);
    return (
        <C.Provider value = {{ n, setN }}>
        <div className = "App">
        <Baba> </Baba>
        </div>
        </C.Provider>
    )
}

function Baba() {
    return (
        <div>
        我是爸爸
        <Child></Child>
        </div>
    );
}

function Child() {
    const { n, setN } = useContext(C);
    const onClick = () => {
        setN((i) => i + 1);
    };
    return (
        <div>
        <p> 我是儿子 n：{ n }</p>
        <button onClick = { onClick } > +1 </button>
        </div>
    );
}
