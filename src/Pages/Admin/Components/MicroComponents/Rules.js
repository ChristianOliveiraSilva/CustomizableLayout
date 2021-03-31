
// TYPEs
// 1- TEXTO
// 2- NUMERICO
// 3- COR
// 4- RANGE
// 5- 4 VALORES
// 9- BORDA

const rules = [
    {id: '0', name: 'exibição', css:'display', value: '', color:'#856363', type: 4, range: [{name: 'nenhum', value: 'hidden'}, {name: 'exibir', value: 'block'}]},
    {id: '1', name: 'margem', css:'margin', value: '', color:'#D19275', type: 5},
    {id: '2', name: 'preenchimento', css:'padding', value: '', color:'#238E23', type: 5},
    {id: '3', name: 'borda', css:'border', value: '', color:'#CD7F32', type: 9},
    {id: '4', name: 'família da fonte', css:'fontFamily', value: '', color:'#9932CD', type: 1},
    {id: '5', name: 'tamanho da fonte', css:'fontSize', value: '', color:'#9F9F5F', type: 2},
    {id: '6', name: 'espessura da fonte', css:'fontWeight', value: '', color:'#8F8FBD', type: 4, range: [{name: 'nenhum', value: 'normal'}, {name: 'negrito', value: 'bold'}]},
    {id: '7', name: 'cor da fonte', css:'color', value: '', color:'#527F76', type: 3},
    {id: '8', name: 'cor de fundo', css:'backgroundColor', value: '', color:'#2F4F2F', type: 3},
    {id: '9', name: 'alinhamento de texto', css:'textAlign', value: '', color:'#4E2F2F', type: 4, range: [{name: 'centro', value: 'center'}, {name: 'esquerda', value: 'left'},{name: 'direita', value: 'right'}, {name: 'justificado', value: 'justify'}]},
    {id: '10', name: 'opacidade', css:'opacity', value: '', color:'#6B238E', type: 4, range: [{name: '100%', value: '1'}, {name: '0%', value: '0'}, {name: '25%', value: '.25'}, {name: '50%', value: '.5'}, {name: '75%', value: '.75'}, {name: '80%', value: '.8'}, {name: '90%', value: '.9'}]}
]

export default rules;