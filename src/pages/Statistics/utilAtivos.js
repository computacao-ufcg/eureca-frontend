
/**
 * Responsavel por retornar a medida "ideal" de acordo com o periodo integralizado
 * @param {integer} p_integralizado 
 */
const getIdeal = (p_integralizado) => {
    // cada indice representa o periodo do aluno
    // o valor é a porcentagem ideal
    const ideal = [12, 24, 36, 45, 55, 67, 78, 89, 100];
    if(p_integralizado < ideal.length){
        return ideal[p_integralizado]
    }else{
        return ideal[ideal.length - 1];
    }
}

/**
 * Metodo responsavel por criar o conjunto de dados Medidas, utilizado para a montagem do grafico.
 * @param {array} data é os dados dos ativos
 */
const getMedidas = (data) => {
    let medidas = [];
    let aux = new Set();

    // criando o set com os periodos integralizados dos meus dados.
    data.forEach( e => {
        aux.add(e.periodos_integralizados);
    })

    aux = Array.from(aux).sort( (a,b) => a-b) // Transformando o set em array e ordenando do menor para o maior
     
    // Trabalhando em cima do Set para fazer o calculo da porcentagem media e criar o conjunto de Medidas
    aux.forEach( p_integralizado =>{  
        const filtro = data.filter( e => e.periodos_integralizados == p_integralizado);
        let soma = 0;
        filtro.map( e => {soma += e.porcentagem_concluida});

        const medida = {
            x: p_integralizado, // x é os periodos integralizados
            y: parseFloat((soma == 0 ? 0 : soma / filtro.length).toFixed(2)), // y é a porcentagem media para aquele periodo integralizado com precisao 2
            ideal: getIdeal(p_integralizado) // ideal, é o valor ideal para aquele periodo integralizado
        }

        medidas.push(medida);           
    });

    return medidas;
}

export { getMedidas };