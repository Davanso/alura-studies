import React, { ReactNode } from 'react';
import style from './button.module.scss';

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

class Button extends React.Component<ButtonProps> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button
                onClick={onClick}
                type={type}
                className={style.button}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button;