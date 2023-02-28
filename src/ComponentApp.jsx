import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GiftGrid";


const defaultValue = []


export const ComponentApp = () => {
const [categories, setCategories] = useState (defaultValue);




const addCategory = (cualquiera) =>{
   
    const auxCategories = [ ...categories ]
    auxCategories.push(cualquiera)
    setCategories(auxCategories)


}


    return(
        <>
            <h1>Buscador de gifs</h1>
            <AddCategory onAddCategory={addCategory}/>
            <ol>
                 {
                    categories.map(
                        (category, key) =>
                        {
                        return <GifGrid category={category} key= {key}/>
                        }
                    )
                }
            </ol>
        </>
    )
}
export default ComponentApp
