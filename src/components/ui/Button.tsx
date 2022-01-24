import React, {FC} from 'react';

interface Props {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
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