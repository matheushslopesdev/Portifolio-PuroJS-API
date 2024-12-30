
const realDolar = document.querySelector('#real-dolar')
const realBitcoin  = document.querySelector('#real-bitcoin')
const realEuro = document.querySelector('#real-euro')
const dolar = document.querySelector('#dolar')
const bitcoin = document.querySelector('#bitcoin')
const euro = document.querySelector('#euro')

ApiMoedas('https://economia.awesomeapi.com.br/last/USD-BRL','USDBRL').then(response => realDolar.value = response.toFixed(2))
ApiMoedas('https://economia.awesomeapi.com.br/last/BTC-BRL','BTCBRL').then(response => realBitcoin.value = response.toFixed(2))
ApiMoedas('https://economia.awesomeapi.com.br/last/EUR-BRL','EURBRL').then(response => realEuro.value = response.toFixed(2))

async function ApiMoedas(url,moeda) {
    const response = await fetch(url)
    const data = await response.json()
    const realDolar = data[moeda]['bid']
    return Number(realDolar)
}

ApiMoedas('https://economia.awesomeapi.com.br/last/BTC-BRL','BTCBRL')
.then(response =>  bitcoin.addEventListener('input', ()=>{
    const resultado = response * Number(bitcoin.value)
    realBitcoin.value = resultado.toFixed(2)
}))


ApiMoedas('https://economia.awesomeapi.com.br/last/EUR-BRL','EURBRL')
.then(response =>  euro.addEventListener('input', ()=>{
    const resultado = response * Number(euro.value)
    realEuro.value = resultado.toFixed(2)
}))

ApiMoedas('https://economia.awesomeapi.com.br/last/USD-BRL','USDBRL')
.then(response =>  dolar.addEventListener('input', ()=>{
    const resultado = response * Number(dolar.value)
    realDolar.value = resultado.toFixed(2)
}))



