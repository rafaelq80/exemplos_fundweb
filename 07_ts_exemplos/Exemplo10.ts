function listarPessoa(nome: string, idade: number) {
    return {
      nome,
      idade,
    };
  }
  
  const tupla: [string, number] = ['Márcia da Silva', 30];
  
  console.log(listarPessoa(...tupla));
  