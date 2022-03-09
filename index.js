const express = require('express');
const { serialize } = require('v8');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000


app.get('/', (req, res) => {

    let produto = arr.find(produto => produto.ns === numero)
    return res.json(produto)
})


app.post('/poc', (req, res) => {

    let numero = req.body.ns;

    let arr = [
        {
            "ns": BCKD20000700G,
            "modelo": "Modelo DVR",
        },
        {
            "ns": BCKD42550878T,
            "modelo": "Modelo Câmera IP"
        },
        {
            "ns": VSDK78145017R,
            "modelo": "Modelo NVD"
        },
        {
            "ns": 4,
            "modelo": "Modelo não Tem gerador de senha / produto não é gravador DVR/NVR nem câmera IP"
        }
    ]

    let db = "Produto Cadastrado!!!"
    let opcao = "API está ON"
    let produto = arr.find(produto => produto.ns === numero)


    let intelbras = {
        "status": "success",
        "chatbot_response": db,
        "raw_output": [
            {
                "output_variable": "produto",
                "output_result": produto
            },
            {
                "output_variable": "opcao",
                "output_result": opcao
            }
        ]
    }

    res.send(JSON.stringify(intelbras))
})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})