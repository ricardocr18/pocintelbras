const express = require('express');
const { serialize } = require('v8');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000


app.get('/', (req, res) => {

    let produto1 = "Get OK!!!"
    //let produto = arr.find(produto => produto.ns === numero)
    return res.json(produto1)
})


app.post('/poc', (req, res) => {

    let numero = req.body.ns;
    //let numero = "BCKD20000700G";

    let arr = [
        {
            "ns": "BCKD20000700G",
            "modelo": "Modelo DVR",
        },
        {
            "ns": "BCKD20000700A",
            "modelo": "Modelo Câmera IP"
        },
        {
            "ns": "BCKD20000700B",
            "modelo": "Modelo NVD"
        },
        {
            "ns": 4,
            "modelo": "Modelo não Tem gerador de senha / produto não é gravador DVR/NVR nem câmera IP"
        }
    ]

    let produto = arr.find(produto => produto.ns === numero)

    let db = "Produto Está Cadastrado Com Sucesso!!!"
    let opcao = "API está ON"    
    // let produto = "Teste"

    let intelbras = {
        "status": "success",
        "chatbot_response": db,
        "raw_output": [
            {
                "output_variable": "produto",
                "output_result": produto.modelo
            },
            {
                "output_variable": "opcao",
                "output_result": opcao
            }
        ]
    }

    res.send(JSON.stringify(inbenta))
})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})