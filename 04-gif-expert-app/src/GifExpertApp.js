import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( cats => [ ...cats, 'JunterXHunter' ] ); // Forma 2
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories = { setCategories } />

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;