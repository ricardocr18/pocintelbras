const express = require('express');
const { serialize } = require('v8');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 3000 

let numero = 4;

let arr = [
    {
        "ns": 1,
        "modelo": "Modelo DVR",        
    },
    {
        "ns": 2,
        "modelo": "Modelo Câmera IP"
    },
    {
        "ns": 3,
        "modelo": "Modelo NVD"
    },
    {
        "ns": 4,
        "modelo": "Modelo não Tem gerador de senha / produto não é gravador DVR/NVR nem câmera IP"
    }

]

app.get('/poc', (req, res) => {

    let produto = arr.find(produto => produto.ns === numero)

    
    return res.json(produto)
})

app.post('/poc', (req, res) => {

})

app.listen(port, () => {
    console.log('API no Heroku está ON')
})