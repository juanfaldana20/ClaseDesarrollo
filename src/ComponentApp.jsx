import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GiftGrid";


const defaultValue = ['Tengo FE', 'Santo graial']


export const ComponentApp = () => {
const [categories, setCategories] = useState (defaultValue);




const addCategory = (cualquiera) =>{
   
    const auxCategories = [ ...categories ]
    auxCategories.push(cualquiera)
    setCategories(auxCategories)


}


    return(
        <>
            <h1>Canciones</h1>
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
