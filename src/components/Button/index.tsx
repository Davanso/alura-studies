import React, { ReactNode } from 'react';
import style from './button.module.scss';

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
}

class Button extends React.Component<ButtonProps> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;