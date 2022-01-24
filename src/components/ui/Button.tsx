import {FC} from 'react';

interface Props {
    onClick?: any;
    content?: string;
    className: string;
    key?: number;
    elements?: string;
}

const Button: FC<Props> = ({onClick, content, elements, className}) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {elements ? elements : content}
        </button>
    );
};

export default Button;