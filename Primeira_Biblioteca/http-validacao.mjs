import fetch from 'node-fetch';

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const response = await fetch(url);
            return `${response.status} - ${response.statusText}`;
        }))
        return arrayStatus;
    } catch(erro) {
        manejaErros(erro);
    }

}

function geraArrayDeURLs(arrayLinks) { 
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

export default async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    //spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({ 
        ...objeto, 
        status: statusLinks[indice] 
    } ) );    
    return resultados;
}

