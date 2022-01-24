import React, {FC, useState} from 'react';
import styles from 'components/assets/styles/gallery.module.css';

interface Props {
    data: string[];
}

const Gallery: FC<Props> = ({data}) => {
    const [showImg, setShowImg] = useState<boolean>(false);
    const [photo, setPhoto] = useState<string>('');
    const getImage = (items: string) => {
        setPhoto(items);
        setShowImg(true);
    };
    return (
        <div className={styles.container}>
            {showImg && <div className={`${styles.open} ${showImg ? styles.image : styles.open}`}>
                <img src={photo} alt="Image"/>
                <span onClick={() => setShowImg(false)}>&#10005;</span>
            </div>}
            {data.map((items: string, i: number) => (
                <img onClick={() => getImage(items)} className={styles.images} key={i} src={items} alt=""/>
            ))}
        </div>
    );
};

export default Gallery;