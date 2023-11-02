import { useState, useEffect } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../../services/api';

function ItemDetails() {
    const { vagaId } = useParams();

    const [vaga, setVaga] = useState({});

    async function pegarVagas() {
        await apiGet('/vacancies')
            .then((response) => {
                acharVaga(response.data.result)
            })
            .catch((error) => {
                console.error('Erro:', error);
            })
    }

    useEffect(() => {
        pegarVagas();
    }, []);

    function acharVaga(vagas) {
        console.log("vagaId: ", vagaId);
        console.log("vagas: ", vagas);
        
        vagas.forEach((vaga) => {
            console.log("vaga: ", vaga);
            if(vaga.id == vagaId) setVaga(vaga)
        });

        console.log("vaga encontrada: ", vaga)
    }

    return (
        <div className="main">
            <h1>Item {vagaId}</h1>
            <p>{vaga.title}</p>
        </div>
    )
}

export default ItemDetails