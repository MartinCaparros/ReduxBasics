import React from 'react';
import { toggleDarkTheme } from 'core/account/reducer';
import {
    useDispatch,
    useSelector
} from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();
    const {
        account: {
            darkTheme,
            userData: {
                name
            }
        }
    } = useSelector(state => state);

    return (
        <div>
            Hola { name }
            <button onClick={ () => dispatch(toggleDarkTheme()) }>
                { !!darkTheme ? 'Turn off' : 'Turn on' } dark mode
            </button>
        </div>
    );
};

export default Header;