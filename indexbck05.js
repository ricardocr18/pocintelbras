//Backp do dia 24/03 funcionando

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

    let arr = [
        {
            "ns": "BCKD20000700G",
            "modelo": "Modelo DVR",
            "data": "12122012",
            "img": "https://imgur.com/9yYhjcA"
        },
        {
            "ns": "BCKD20000700A",
            "modelo": "Modelo Câmera IP",
            "data": "09092009"
        },
        {
            "ns": "BCKD20000700B",
            "modelo": "Modelo NVD",
            "data": "25122020"
        }
    ]

    let numero = req.body.ns;
    //Aqui trato as pesquisas referente aos números de séries
    if (arr.some(confirma => confirma.ns === numero)) {
        produto = arr.find(produto => produto.ns === numero)
        db = "Produto está cadastrado em nossa base! 😉"
        equipamento = produto.modelo
        opcao = "Equipamento válido para recuperar senha"
        nsTeste = 1
    } else {
        db = "Infelizmente, o número de série informado não corresponde a gravador DVR / NVR e câmera IP 😔. Segue equipamento referente ao número de série informado."
        equipamento = "Bateria Solar"
        opcao = "Modelo não Tem gerador de senha "
        nsTeste = 2
    }
        

    let dataBios = req.body.data     
    //Aqui realizo a verificação o match das Datas com os números de séries
    if ( typeof dataBios === 'undefined'){
        console.log("Vazio")
    }else{
        dataSistem = dataBios.replace(/[/]/g, "");
        console.log("Populado com: " + dataSistem);
            if(produto.data === dataSistem){
                nsTeste = 3
                db = `Ótimo. A data <span style="color:#00852b;"><b>${dataBios}</b></span> está correta. Vamos gerar a senha! 😉`
            }else{
                db = `Infelizmente a data informada <span style="color:#00852b;"><b>${dataBios}</b></span> não corresponde com o número de série <span style="color:#00852b;"><b>${produto.ns}</b></span> do equipamento <span style="color:#00852b;"><b>${produto.modelo}</b></span>.`              
                
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


//Fazendo teste com a data informada
    // if (produto.data === dataBios){           
    //     console.log("correto")
    // }else{
    //     console.log("errado")
    // }

    //Comparando o data digitada com a Data do Banco de dados