const labels = [
    '1996.2', '1997.1', '1997.2', '1998.1', '1998.2', '1999.1', '1999.2', '2000.1', '2000.2',
    '2001.1', '2001.2','2002.1', '2002.2', '2003.1', '2003.2', '2004.1', '2004.2', '2005.1', '2005.2', '2006.1', '2006.2', '2007.1', '2007.2', '2008.1', '2008.2', '2009.1', '2009.2', '2010.1', '2010.2',
    '2011.1', '2011.2','2012.1', '2012.2', '2013.1', '2013.2', '2014.1', '2014.2', '2015.1', '2015.2', '2016.1', '2016.2', '2017.1', '2017.2', '2018.1', '2018.2', '2019.1', '2019.2', '2020.1'
];

const dataDropout = [
    { name: 'tag0', value: 'reasons.failed3Times', color: '#FFAE03', valueTranslate: '3 reprovações na mesma disciplina' },
    { name: 'tag1', value: 'reasons.reenterSameCourse', color: '#9BC53D', valueTranslate: 'Novo ingresso no mesmo curso' },
    { name: 'tag2', value: 'reasons.reenterOtherCourse', color: '#932551', valueTranslate: 'Novo ingresso em outro curso' },
    { name: 'tag3', value: 'reasons.failedAll', color: '#4DA852', valueTranslate: 'Reprovado por falta em todas as disciplinas' },
    { name: 'tag4', value: 'reasons.cancelled', color: '#4FC6E3', valueTranslate: 'Cancelamento da matrícula' },
    { name: 'tag5', value: 'reasons.cancelledByDecree', color: '#E71D36', valueTranslate: 'Cancelamento p/ decisão judicial' },
    { name: 'tag6', value: 'reasons.cancelledCourseChange', color: '#001021', valueTranslate: 'Cancelamento p/ mudança de curso' },
    { name: 'tag7', value: 'reasons.cancelledUponRequest', color: '#40809A', valueTranslate: 'Cancelamento p/ solicitação do aluno' },
    { name: 'tag8', value: 'reasons.leftWithoutNotice', color: '#D9C8A2', valueTranslate: 'Cancelamento por abandono' },
    { name: 'tag9', value: 'reasons.missedGraduation', color: '#B58B34', valueTranslate: 'Perda de graduação' },
    { name: 'tag10', value: 'reasons.transferred', color: '#7B9D0A', valueTranslate: 'Transferido' },
];
export { labels, dataDropout };
