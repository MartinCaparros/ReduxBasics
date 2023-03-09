import { setHobbies } from 'core/account/reducer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks';
import Contador from '../Contador';
const Content = () => {

    const dispatch = useDispatch();
    const {
        darkTheme,
        hobbies,
        userData: {
            name
        }
    } = useSelector('account');
    
    const [hobby, setHobby] = useState('');
    const handleAddHobby = () => {
        dispatch(setHobbies([...hobbies, hobby]));
        setHobby('');
    };

    return (
        <div>
            Todo bien, { name }?
            {
                !!darkTheme &&
                <span>TODO OSCURO WACHO</span>
            }
            <br />
            <input value={ hobby } onChange={ ({ target: { value } }) => setHobby(value) }/>
            <button onClick={ handleAddHobby }>
                Add
            </button>
            <ul>
                {
                    hobbies.map((elem, index) => 
                        <li key={ index }>
                            { elem } <button onClick={ () => dispatch(setHobbies(hobbies.filter(el => el !== elem))) }>-</button>
                        </li>
                    )
                }
            </ul>
            <Contador
                cantidad = {hobby}
            />
        </div>
    );
};

export default Content;
