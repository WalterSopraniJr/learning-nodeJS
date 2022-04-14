function geraArrayDeURLs(arrayLinks) { 
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

export default function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks);
}

