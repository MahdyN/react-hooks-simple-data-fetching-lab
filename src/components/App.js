import React, {useState, useEffect} from "react";

function App() {
    const [image, setImage] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((dogImage) => {
            setImage(dogImage.message)
        });
    },[])

    return(

        <div>

        {image ? 
        <img src = {image} alt = "A Random Dog" />:
        <p>Loading...</p>
        }


        </div>      
    );




}

export default App
