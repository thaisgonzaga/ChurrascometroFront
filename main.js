async function calcular() {
    const data = document.getElementById("data").value;
    const adultos = document.getElementById("adultos").value;
    const criancas = document.getElementById("criancas").value;
    const duracao = document.getElementById("duracao").value;

    const response = await calcularAPI({ data, adultos, criancas, duracao })

    const result = await response.json();

    imprimeResultado(result)
}

function calcularAPI(body){
    return fetch('http://localhost:3000/calcular', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

function imprimeResultado(result){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>${result.carne} Kg de carne</p>`;
    resultado.innerHTML += `<p>${result.cerveja} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${result.bebidas} garrafa(s) pet de 2 litros de bebidas</p>`;
    }
