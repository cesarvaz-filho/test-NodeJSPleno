# Teste para vaga de NodeJS

### Para rodar o projeto
[x]clonar o repositório
[x]rodar o comando 'yarn' ou 'npm install' para instalar as dependências
[x]rodar o comando 'yarn start' ou 'npm run start' para subir o servidor d projeto 

### Observações
-Este projeto foi feito em ReactJS. 
-O hook UseEffect foi usado para garantir que o mapa seja renderizado toda vez que a página atualizar.
-O hook UseRef foi utilizado para pegar a referência da página.
-Foi utilizada a documentação oficial Maps Javascript API. As tags de script foram injetadas direto no arquivo index.html, da pasta public.
-O css foi desacoplado do arquivo que gera o html.
- O arquivo fakeApi, que contem o JSON, foi limitado para 10 registros por questão de performance durante o desenvolvimento (travou o navegador). Para ver a renderização com os 50000 pontos, gentileza adicionar os demais registros.
- Como havia apenas uma página ela foi movida para um componente separado e sua navegação determinada pela rota "/", mas teve algum problema com a renderização. Precisa debugar, mas meu tempo limite se esgotou. Desse modo eu coloquei todo o código no arquivo app para que seja possível ver a renderização dos pontos e o agrupamento.