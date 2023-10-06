function tratarErrroELancar(erro) {
    throw new Error('Erro!!')
    throw 10
    throw true
    throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try{
        console.log(obj.name.toUpperCase())
    }  catch (e) {
        tratarErrroELancar(e)
    }  finally {
        console.log('Final')
    }
}