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
            "data": "12122012",
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


    if (arr.some(confirma => confirma.ns === numero)) {
        produto = arr.find(produto => produto.ns === numero)
        db = "Produto está cadastrado em nossa base! 😉"
        equipamento = produto.modelo
        opcao = "Equipamento válido para recuperar senha"
        nsTeste = 1

    } else {
        db = "Infelizmente, o número de série informado não corresponde a gravador DVR / NVR e câmera IP 😔"
        equipamento = "Bateria Solar"
        opcao = "Modelo não Tem gerador de senha "
        nsTeste = 2
    }


    let dataBios = req.body.data     
 
   

    //Informações sobre data
    if (produto.data === dataBios){           
        console.log("correto")
    }else{
        console.log("errado")
    }

    if ( typeof dataBios === 'undefined'){
        console.log("Vazio")
    }else{
        dataSistem = dataBios.replace(/[/]/g, "");
        console.log("Populado com: " + dataSistem);
        nsTeste = 3
            if(produto.data === dataSistem){
                db = `Ótimo. A data ${dataBios} está correta. Vamos gerar a senha! 😉`
            }
    }

    
    senha = Math.floor(Math.random() * 65536);

    
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
            }                

        ]
    }

    res.send(JSON.stringify(intelbras))
})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})