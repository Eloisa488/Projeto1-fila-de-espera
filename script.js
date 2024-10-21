alert('Bem vindo ao consultório! Esta é a fila de espera:')
let queue = ['1ºisa', '2ºRaul', '3ºlivia' ]
alert('1ºisa, 2ºRaul, 3ºlivia, esta é a fila de espera')
alert('Um novo paciente entrou na fila, o nome dele é Mátias então ele será o ultimo')
queue.push('4ºMátias')
alert(`${queue}`)
queue.shift('1ºisa')
alert('O primeiro paciente da fila de espera foi consultado!')
alert(`${queue}`)