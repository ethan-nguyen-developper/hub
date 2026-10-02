import { useState, useEffect } from "react"

function Mangas() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch("./datas/mangas.json")
            .then(response => response.json())
            .then(data => setDatas(data))
            .catch(error => console.error("Erreur :", error))
    }, [])

    return (
        <>
            <h1>Bienvenue sur mes mangas</h1>
            {/* <button onClick={() => Mangas()}>Test</button> */}
            {datas.map((data) => (
                <div key={data.id}>
                    <img src={data.cover} alt="" />
                    <h1>{data.title}</h1>
                    <h2>{data.author}</h2>
                    {/* <h3>{data.genre}</h3> */}
                    <h3>Status : {data.status}</h3>
                    <h3>Nombre de volumes : {data.volumes}</h3>
                    <h3>Nombre de volumes possédés : {data.volumesOwned}</h3>
                    <h4>Note : {data.rating} / 10</h4>
                </div>
            ))}
        </>
    );
}

export default Mangas;