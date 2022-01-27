import React, { useState } from "react"
import { AddCategory } from "./components/category/AddCategory";
import { GiftGrid } from "./components/category/GiftGrid";

export const GiftExpertApp = () => {
    const [categories, setCategories ] = useState(['Dragon Ball']);
    
    return(
        <>
            <h2 className="animate__animated animate__fadeIn">GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category =>(
                        <GiftGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}