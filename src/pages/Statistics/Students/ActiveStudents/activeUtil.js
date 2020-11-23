
/**
 * Responsavel por retornar a medida "ideal" de acordo com o periodo integralizado
 * @param {integer} p_integralizado 
 */
const getIdeal = (p_integralizado) => {
    // cada indice representa o periodo do aluno
    // o valor é a porcentagem ideal
    const ideal = [12, 24, 36, 45, 55, 67, 78, 89, 100];
    if (p_integralizado < ideal.length) {
        return ideal[p_integralizado]
    } else {
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
    data.forEach(e => {
        aux.add(e.periodos_integralizados);
    })

    aux = Array.from(aux).sort((a, b) => a - b) // Transformando o set em array e ordenando do menor para o maior

    // Trabalhando em cima do Set para fazer o calculo da porcentagem media e criar o conjunto de Medidas
    aux.forEach( p_integralizado => {
        const filtro = data.filter(e => e.periodos_integralizados === p_integralizado);
        let soma = 0;
        filtro.map(e => { soma += e.porcentagem_concluida; return null });

        const medida = {
            x: p_integralizado, // x é os periodos integralizados
            y: parseFloat((soma === 0 ? 0 : soma / filtro.length).toFixed(2)), // y é a porcentagem media para aquele periodo integralizado com precisao 2
            ideal: getIdeal(p_integralizado) // ideal, é o valor ideal para aquele periodo integralizado
        }

        medidas.push(medida);

        return null;
    });

    return medidas;
}

/**
 * Metodo responsavel por separar os dados dos alunos, de acordo com a porcentagem de cada, para ser usado no Scatter.
 * @param {Object} data - Json com os dados dos alunos
 */
const getDataScatter = (data) => {
    const medidas = data ? getMedidas(data) : null;

    let red = []
    let green = []
    let blue = []
    let purple = []

    if (data) {
        data.map((entry, index) => {

            const [medida] = medidas.filter(e => e.x === entry.periodos_integralizados);

            if (entry.porcentagem_concluida >= 100) {
                purple.push(entry);
            } else if (entry.porcentagem_concluida < medida.y && entry.porcentagem_concluida < medida.ideal) {
                red.push(entry);
            } else if (entry.porcentagem_concluida >= medida.y && entry.porcentagem_concluida < medida.ideal) {
                green.push(entry);
            } else if (entry.porcentagem_concluida >= medida.ideal) {
                blue.push(entry);
            }

            return null;
        });
    }

    const newData = [red, green, blue, purple];

    return newData;
}

/**
 * Função responsável por retornar a porcentagem de cada grupo que representa os alunos (Red, Green, Blue, Purple);
 * 
 * @param {Object} props 
 * @param {Object} data 
 */
const getPercentagem = (props, data) => {
    const total = props.data.length;
    let result = 0;

    if (total !== 0) {
        result = parseFloat((data.length / total * 100).toFixed(2));
    }

    return result;
}

/**
 * Função para recuperar o periodo que teve mais "baixas" dos alunos.
 * 
 * @param {Array of Object literals} data - Um array de objetos, onde cada objeto representa um aluno.
 */
const getPeriodDown = (data) => {
    let myMap = new Map();
    let periodo = "";
    let maior = 0;
    let result = [periodo, maior];

    if(!data){
        return result;
    }

    // criado um mapa com a quantidade de cada elemento e filtrando o periodo com maior número de incidências.
    data.forEach(e => {
        let value = myMap.get(e.periodo_ingresso);
        if (value) {
            myMap.set(e.periodo_ingresso, (value + 1));
            if(maior < value + 1){
                periodo = e.periodo_ingresso;
                maior = value + 1;
            }
        } else {
            myMap.set(e.periodo_ingresso, 1);
        }
    })

    result = [periodo, maior];
    return result;
}

const headersCSV = [
    { label: "Matrícula", key: "matricula" },
    { label: "CRA", key: "cra" },
    { label: "Períodos Integralizados", key: "periodos_integralizados" },
    { label: "Créditos Complementares Integralizados", key: "cred_comp_int" },
    { label: "Créditos Obrigatórios Integralizados", key: "cred_obrig_int" },
    { label: "Créditos Optativos Integralizados", key: "cred_opt_int" },
    { label: "Currículo", key: "curriculo" },
    { label: "Estado Civil", key: "estado_civil" },
    { label: "Gênero", key: "genero" },
    { label: "IEA", key: "iea" },
    { label: "Matrículas Institucionais", key: "matriculas_institucionais" },
    { label: "MC", key: "mc" },
    { label: "Média Geral Ingresso", key: "media_geral_ingresso" },
    { label: "Mobilidade Estudantil", key: "mobilidade_estudantil" },
    { label: "Período de Ingresso", key: "periodo_ingresso" },
    { label: "Trancamentos Totais", key: "trancamentos_totais" },
    { label: "Cota", key: "cota" }
];

export { getDataScatter, getPercentagem, getPeriodDown, headersCSV };