## Envios máximos

**Problema**

Um participante pode fazer 1 envio a cada 30 segundos. Se um concurso durar X minutos, qual é o número máximo de envios que o participante pode fazer durante o mesmo?

Também é dado que o participante não pode fazer nenhuma submissão nos últimos 5 segundos do concurso.

**Formato de entrada**

A primeira linha de entrada conterá um único inteiro T, denotando o número de casos de teste.
Cada caso de teste consiste em um único inteiro X, denotando o número de minutos.

**Formato de saída**

Para cada caso de teste, gere o número máximo de envios que um participante pode fazer em X minutos.

Caso de teste 1: O concurso dura 1 minuto, ou seja, 60 segundos. Um participante pode fazer 2 envios durante esse período — por exemplo, no 5º segundo e no 48º segundo. Fazer 3 ou mais submissões é impossível.

Caso de teste 2: O concurso dura 2 minutos, ou seja, 120 segundos. Um participante pode fazer 4 submissões durante este tempo.