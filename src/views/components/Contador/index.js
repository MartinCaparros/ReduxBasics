import { useEffect, useState } from "react";


const Contador = ({cantidad}) => {

    const [text, setText] = useState(cantidad)

    useEffect(() => {
        setText(cantidad)
    }, [cantidad])

    return ( 
        <>
            <h1>Tengo {text} tareas</h1>
        </>
     );
}
 
export default Contador;