console.log('generate-header.js loaded succesfully.');

/* 
O site possuirá múltiplas páginas, e sem utilizar uma linguagem server-side como PHP, haverá muito trabalho
manual que poderia ser executado com um simples "include".

Assim, utilizarei o JavaScript para gerar os cabeçalhos e rodapés -- o que não é recomendável -- mas espero
que quaisquer pessoas que analisarem meu trabalho entendam.
*/

$('.cabecalho').innerHTML = `
<a href="${concatHref[0]+"index.html"}" class="cabecalho__logomarca"></a>

<label class="cabecalho__pesquisa-container">
  <input type="text" class="pesquisa-container__input" placeholder="O que deseja encontrar?">
</label>

<a href="${concatHref[1]+"login.html"}" class="cabecalho__login">login</a>

<button class="cabecalho__pesquisa--mobile"></button>
`;