

searchZipCode =(error)=>{    
    const cep = document.getElementsByName("cep")[0].value;
    const id = cep;
    if(!id.match(/^[0-9]{8}$/)){
        console.log('encontradmos um erro')
        error = document.getElementsByName('endereco')[0].value = `Cep Não encontrado`

    }else{

        const URL = `https://viacep.com.br/ws/${id}/json/`;
        fetch(URL)
        .then(response =>  response.json())
        .then(data =>{
            document.getElementsByName('endereco')[0].value = data.logradouro
            document.getElementsByName('bairro')[0].value = data.bairro
            document.getElementsByName('cidade')[0].value = data.localidade
            document.getElementsByName('estado')[0].value = data.uf     
        })
        .catch( (error )=> {
           error = document.getElementsByName('endereco')[0].value = `Cep Não encontrado`
           return error
        
        })    
    }
}

const activeEvent = document.getElementsByName("cep")[0];
activeEvent.addEventListener("focusout", searchZipCode)