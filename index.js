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
    let dataSistem = req.body.data;


    console.log("Logo do número de série: " + numero)

    console.log("Logo da data: " + dataSistem)
    if (req.body.data === "undefined") {
        //let dataBios = dataSistem.replace(/[/]/g, "");
        //produto.data == dataBios;
        dataAprovada = 1
    }
    else {
        dataAprovada = 2
    }


    let arr = [
        {
            "ns": "BCKD20000700G",
            "modelo": "Modelo DVR",
            "data": "01102020",
            "img": "https://imgur.com/9yYhjcA"
        },
        {
            "ns": "BCKD20000700A",
            "modelo": "Modelo Câmera IP",
            "data": "01112021"
        },
        {
            "ns": "BCKD20000700B",
            "modelo": "Modelo NVD",
            "data": "01042010"
        }

    ]

    if (arr.some(confirma => confirma.ns === numero)) {
        produto = arr.find(produto => produto.ns === numero)
        db = "Produto está cadastrado em nossa base! 😉"
        equipamento = produto.modelo
        opcao = "Equipamento válido para recuperar senha"
        nsTeste = 1

    } else {
        db = "Infelizmente, o número de série informado não corresponde a gravador DVR / NVR e câmera IP.😔 E sim ao equipamento abaixo:"
        equipamento = "Bateria Solar"
        opcao = "Modelo não Tem gerador de senha "
        nsTeste = 2
    }


    //achar a data do Nº de série???
    
    


    senha = Math.floor(Math.random() * 65536);


    // console.log("Numero de série: " + dataSistem)
    // console.log("valor da variavel data: " + req.body.data)


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
                "output_variable": "nsTeste",
                "output_result": nsTeste
            },
            {
                "output_variable": "dataAprovada",
                "output_result": dataAprovada
            }

        ]
    }

    res.send(JSON.stringify(intelbras))
})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})