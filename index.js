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

    if (produto.ns === numero){
        db = "Produto está cadastrado em nossa base! 😉"
    } else {
         db = "Infelizmente, o número de série informado não corresponde a gravador DVR / NVR e câmera IP 😔"
    }

    //let db = "Produto está cadastrado em nossa base! 😉"
    let opcao = "Equipamento válido para recuperar senha"    
    // let produto = "Teste"
    
    let dataProduto = req.body.data
    if ( dataProduto != ""){
        senha = Math.floor(Math.random() * 65536);
    }

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
            },
            {
                "output_variable": "senha",
                "output_result": senha
            }
        ]
    }

    res.send(JSON.stringify(intelbras))
})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})