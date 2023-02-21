import { useState } from "react"
import { useEffect } from "react"

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bHLmzL9XZKwPFZ8SaMiLA78jsJTJV8fI&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs


}


export const GifGrid = ({ category }) => {
    const [images, InvoGifs] = useState([])


    const InvoGifs = async() => {
        const variablegifs =await getGifs(category)
        console.log(variablegifs)
        
    }
    useEffect(()=> {
        InvoGifs()
    },[])

    return (
        <>
            <h3> ESTE ES UN SEÑOR TEMA: {category}</h3>
            <di className= "card-grid">
                {
                    images.map((image, key)=>{
                        return <GifItem key={key} {...image}></GifItem>
                    })
                }
            </di>
        </>
    )
}
