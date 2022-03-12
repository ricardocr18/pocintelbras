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
            "img": "https://imgur.com/9yYhjcA"
        },
        {
            "ns": "BCKD20000700A",
            "modelo": "Modelo Câmera IP"
        },
        {
            "ns": "BCKD20000700B",
            "modelo": "Modelo NVD"
        }
        
    ]


    //let produto = arr.find(produto => produto.ns === numero)

    if (arr.some(confirma => confirma.ns === numero)) {
        produto = arr.find(produto => produto.ns === numero)
        db = "Produto está cadastrado em nossa base! 😉"
        equipamento = produto.modelo
        opcao = "Equipamento válido para recuperar senha"
        imagem = produto.img
    } else {
        db = "Infelizmente, o número de série informado não corresponde a gravador DVR / NVR e câmera IP 😔"
        equipamento = "Não Corresponde"
        opcao = "Modelo não Tem gerador de senha "
    }

    
    //let opcao = "Equipamento válido para recuperar senha"
    
    //Gerador de senha número aleatorio
    let dataProduto = req.body.data
    if (dataProduto != "") {
        senha = Math.floor(Math.random() * 65536);
        db = "Ótimo, data correta. Vamos gerar a senha!!! 😉"
    }

    let intelbras = {
        "status": "success",
        "chatbot_response": db,
        "raw_output": [
            {
                "output_variable": "produto",
                "output_result": equipamento
            },
            {
                "output_variable": "opcao",
                "output_result": opcao
            },
            {
                "output_variable": "senha",
                "output_result": senha
            },
            {
                "output_variable": "imagem",
                "output_result": imagem
            }
        ]
    }

    res.send(JSON.stringify(intelbras))
})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})