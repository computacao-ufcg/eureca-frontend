// Constants 

// Msg for modal
const msgModal = "Aluno não encontrado.";

/**
 * Method responsible for filtering students according to the risk class.
 * @param {Array of Object literals} data - Json with the students data.
 */
const getDataScatter = (data) => {
    
    let normal = [];
    let late = [];
    let advanced = [];
    let critical = [];
    let notApplicable = [];
    let unfeasible = [];

    if (data) {

        console.log("meu data: ", data)
        data.map((entry, index) => {

            switch (entry.riskClass){
                case 'NORMAL':
                    normal.push(entry);
                    break;
                case 'LATE':
                    late.push(entry);
                    break;
                case 'ADVANCED':
                    advanced.push(entry);
                    break;
                case 'CRITICAL':
                    critical.push(entry);
                    break;
                case 'NOT_APPLICABLE':
                    notApplicable.push(entry);
                    break;
                case 'UNFEASIBLE':
                    unfeasible.push(entry);
                    break;
                default:
                    console.error("Error in switch case");
            }
        });
    }

    const newData = [normal, late, advanced, critical, notApplicable, unfeasible];

    return newData;
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


const dataSelectExample = [{
    svgColor: 'red',
    matricula: '117210900',
    name: 'hercules Santos',
    email: 'herculesSantos@ccc.ufcg.edu',
    credits: 34,
    subjects: 6
},
{
    svgColor: 'green',
    matricula: '117210901',
    name: 'paulo Santos',
    email: 'pauloSantos@ccc.ufcg.edu',
    credits: 19,
    subjects: 9
},
{
    svgColor: 'green',
    matricula: '117210902',
    name: 'matheus Silva',
    email: 'matheusSilva@ccc.ufcg.edu',
    credits: 33,
    subjects: 6
},
{
    svgColor: 'red',
    matricula: '117210903',
    name: 'fubica Rodrigues',
    email: 'fubicaRodrigues@ccc.ufcg.edu',
    credits: 32,
    subjects: 6
},
{
    svgColor: 'blue',
    matricula: '117210904',
    name: 'joao Santos',
    email: 'joaoSantos@ccc.ufcg.edu',
    credits: 11,
    subjects: 2
},
{
    svgColor: 'blue',
    matricula: '117210905',
    name: 'maria Rodrigues',
    email: 'mariaRodrigues@ccc.ufcg.edu',
    credits: 80,
    subjects: 1
},
{
    svgColor: 'red',
    matricula: '117210906',
    name: 'jose Fernandes',
    email: 'joseFernandes@ccc.ufcg.edu',
    credits: 54,
    subjects: 5
},
{
    svgColor: 'purple',
    matricula: '117210907',
    name: 'francisco Santos',
    email: 'franciscoSantos@ccc.ufcg.edu',
    credits: 96,
    subjects: 2
},
{
    svgColor: 'red',
    matricula: '117210908',
    name: 'napoleão Silva',
    email: 'napoleãoSilva@ccc.ufcg.edu',
    credits: 47,
    subjects: 6
}, {
    svgColor: 'red',
    matricula: '117210900',
    name: 'hercules Santos',
    email: 'herculesSantos@ccc.ufcg.edu',
    credits: 34,
    subjects: 6
},
{
    svgColor: 'green',
    matricula: '117210901',
    name: 'paulo Santos',
    email: 'pauloSantos@ccc.ufcg.edu',
    credits: 19,
    subjects: 9
},
{
    svgColor: 'green',
    matricula: '117210902',
    name: 'matheus Silva',
    email: 'matheusSilva@ccc.ufcg.edu',
    credits: 33,
    subjects: 6
},
{
    svgColor: 'red',
    matricula: '117210903',
    name: 'fubica Rodrigues',
    email: 'fubicaRodrigues@ccc.ufcg.edu',
    credits: 32,
    subjects: 6
},
{
    svgColor: 'blue',
    matricula: '117210904',
    name: 'joao Santos',
    email: 'joaoSantos@ccc.ufcg.edu',
    credits: 11,
    subjects: 2
},
{
    svgColor: 'blue',
    matricula: '117210905',
    name: 'maria Rodrigues',
    email: 'mariaRodrigues@ccc.ufcg.edu',
    credits: 80,
    subjects: 1
},
{
    svgColor: 'red',
    matricula: '117210906',
    name: 'jose Fernandes',
    email: 'joseFernandes@ccc.ufcg.edu',
    credits: 54,
    subjects: 5
},
{
    svgColor: 'purple',
    matricula: '117210907',
    name: 'francisco Santos',
    email: 'franciscoSantos@ccc.ufcg.edu',
    credits: 96,
    subjects: 2
},
{
    svgColor: 'red',
    matricula: '117210908',
    name: 'napoleão Silva',
    email: 'napoleãoSilva@ccc.ufcg.edu',
    credits: 47,
    subjects: 6
}
];

export { getDataScatter, headersCSV, dataSelectExample, msgModal };