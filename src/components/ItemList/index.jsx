import { apiGet } from "../../services/api";
import { Link } from "react-router-dom";
import Item from "../Item"
import "./style.css"
import React, { useState, useEffect } from 'react'

function ItemList() {

    const [vagas, setVagas] = useState([]);

    async function pegarVagas() {
        await apiGet('/vacancies')
            .then((response) => setVagas(response.data.result))
            .catch((error) => {
                console.error('Erro:', error);
            })
    }

    useEffect(() => {
        pegarVagas();
    }, []);

    return (
        <div className="item-list">
            { vagas.map((vaga) => <Link key={vaga.id} to={`/vaga/${vaga.id}`}><Item  informacoes={vaga}  /></Link>) }
        </div>
    )
}

export default ItemList