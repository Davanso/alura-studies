import React from 'react';
import style from './button.module.scss';

class Button extends React.Component {
    render() {
        return (
            <button className={style.button}> TESTE </button>
        )
    }
}

export default Button;