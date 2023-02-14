const express = require('express')
const path = require('path')


const app = express()


// definindo o template engine
app.set('view engine', 'ejs')  // **Por padrão ele procura na pasta raiz
app.set('views', path.join(__dirname, 'views')) // como não está na raiz

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 error (not found)
app.use((req, res) => { // middleware
  res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))