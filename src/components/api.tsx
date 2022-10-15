export function loadColumn() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      id: 1
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      id: 2
    },
    { 
      title: 'Pausado', 
      creatable: false,
      id: 3
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      id: 4
    },
  ];
}


export function loadCard(idColunm:number){
  if(idColunm == 1){
    return [
      {
        id: 1,
        content: 'Estudar módulo 01 de NodeJS',
        labels: '#7159c1',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      },
      {
        id: 2,
        content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
        labels: '#7159c1',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      },
      {
        id: 3,
        content: 'Estudar módulo 03 de React Native',
        labels: '#7159c1',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      },
      {
        id: 4,
        content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
        labels: '#54e1f7',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      }
    ]
  }
  if(idColunm == 2){
    return[
      {
        id: 5,
        content: 'Gravar testes e deploy ReactJS',
        labels: '#54e1f7',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      },
      
      {
        id: 6,
        content: 'Recriando clone do Pipefy',
        labels: '',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      }
    ]
  }
  if(idColunm == 3){
    return [
      {
        id: 7,
        content: 'Gravar sobre Geolocalização e mapas com React Native',
        labels: '#7159c1',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      },
      {
        id: 8,
        content: 'Gravar testes e deploy ReactJS',
        labels: '#54e1f7',
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
      },
      {
        id: 9,
        content: 'Ajustes na biblioteca unform',
        labels: '',
        user: '',
      }
    ]
  }
  if(idColunm == 4){
    return [
    ]
  }
  return [];
}
