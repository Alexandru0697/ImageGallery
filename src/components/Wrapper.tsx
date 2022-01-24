import React, {useState} from 'react';
import Filter from "./Filter";
import Gallery from "./Gallery";
import Json from "../store/data.json";

interface Items {
    images: string[];
}

const Wrapper = () => {
    const data: string[] = Json.wolves.map((item: Items) => item.images[1]);
    const [activeItem, setActiveItem] = useState<string>('All');
    return (
        <div>
            <Filter activeItem={activeItem} setActiveItem={setActiveItem}/>
            <Gallery data={data}/>
        </div>
    );
};

export default Wrapper;