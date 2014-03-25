<h1>Gestual.js</h1>
<p><i>Framework JavaScript</i> para interação por gestos.</p>

<h2>Implementação</h2>
<p>Importação do recurso <i>JavaScript</i>:</p>
<pre>
script type="text/javascript" src="gestual.js"
</pre>
<p>Após importar o arquivo <i>JavaScript</i> no documento HTML veja alguns exemplos para começar a usar o GestualJS:</p>
<pre>
var gestual = new Gestual()
</pre>
<pre>
gestual.onHandUp = function(){ ... }
</pre>
<pre>
gestual.onHandRight = function(){ alert("Mão para direita"); }
</pre>

<h2>Finalidades</h2>
<p>Este <i>framework</i> permite adicionar novos eventos a elementos da estrutura DOM da HTML.</p>
<p>A partir deles o desenvolvedor pode criar diferentes formas de navegação em sua aplicação web através de movimentos da mão do usuário, por exemplo. </p>
<p>Inicialmente o framework conta com eventos para responderem as seguintes interações:
</p>
<ul>
  <li>Mão movimentada para cima: <i><b>onHandUp</b></i></li>
  <li>Mão movimentada para esquerda: <i><b>onHandLeft</b></i></li>
  <li>Mão movimentada para direita: <i><b>onHandRight</b></i></li>
  <li>Mão movimentada para baixo: <i><b>onHandDown</b></i></li>
</ul>
<p>Há dois exemplos do uso deste <i>framework</i> :</p>
<ol>
  <li>
    Uma aplicação contendo um elemento H1, cujo texto se altera em resposta a uma das interações citadas.
  </li>
  <li>
    Outra possui um objeto 3D usando WebGL, cuja rotação também responde aos eventos disparados em função da interação do usuário por meio de gestos.
    
  </li>
</ol>
