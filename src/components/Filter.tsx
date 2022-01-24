import React, {FC} from 'react';
import {items} from "./utils/constant";
import Button from "./ui/Button";

import styles from './assets/styles/fillter.module.css';

interface Props {
    activeItem: string;
    setActiveItem: (element: string) => void;
}

const Filter: FC<Props> = ({activeItem, setActiveItem}) => {

    return (
        <div className={styles.container}>
            <p className={styles.paragraph}>Put in use some tags</p>
            <div className={styles.items}>
                <ul>
                    <li className={styles.list}>
                        {items.map((elements: string, i: number) =>
                            <Button key={i} onClick={() => setActiveItem(elements)}
                                    className={activeItem === elements ? `${styles.active}` : `${styles.button}`}
                                    elements={elements}
                            >
                                {elements}
                            </Button>
                        )}
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Filter;