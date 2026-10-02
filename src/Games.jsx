import { useState, useEffect } from "react"

function Games() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch("./datas/games.json")
            .then(response => response.json())
            .then(data => setDatas(data))
            .catch(error => console.error("Erreur :", error))
    }, [])

    return (
        <>
            <h1>Bienvenue sur mes jeux-videos</h1>
            {/* <button onClick={() => Games()}>Test</button> */}
            {datas.map((data) => (
                <div key={data.id}>
                    <img src={data.cover} alt="" />
                    {/* <h1>{data.title}</h1> */}
                    <h2>{data.developer}</h2>
                    {/* <h3>{data.genre}</h3> */}
                    {/* <h3>{data.platforms}</h3> */}
                    <h3>Date de sortie officielle : {data.releaseDate}</h3>
                    <h3>Status : {data.status}</h3>
                    <h4>Note : {data.rating} / 5</h4>
                </div>
            ))}
        </>
    );
}

export default Games;