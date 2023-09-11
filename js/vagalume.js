let elemento = document;

for(i = 0; i<15; i++){
    elemento = document.createElement("div").classList.add('firefly');
    document.body.appendChild(elemento);
}