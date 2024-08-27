Este projeto é um simples decodificador de textos, onde você pode criptografar e descriptografar mensagens usando regras de substituição de letras. A aplicação é construída utilizando HTML, CSS e JavaScript, e é ideal para quem deseja trocar mensagens secretas.
Funcionalidades
Criptografar Texto: Converte o texto inserido para uma versão criptografada usando as seguintes substituições:
e → enter
i → imes
a → ai
o → ober
u → ufat
Descriptografar Texto: Converte o texto criptografado de volta à versão original.
Copiar Texto: Permite copiar o texto criptografado ou descriptografado para a área de transferência.
Tecnologias Utilizadas
HTML5: Estruturação do conteúdo.
CSS3: Estilização da página com design responsivo e moderno.
JavaScript: Implementação das funcionalidades de criptografia e descriptografia.
Estrutura do Projeto
graphql
Copiar código
Decodificador/
│
├── index.html       # Arquivo HTML principal
├── style.css        # Estilos CSS para a interface
└── script.js        # Lógica JavaScript para criptografia e descriptografia
Como Usar
Clone o repositório:
git clone https://github.com/seu-usuario/decodificador.git
cd decodificador
Abra o arquivo index.html em seu navegador:
Você pode simplesmente abrir o arquivo diretamente ou usar uma extensão de servidor local como o Live Server do VSCode.
Digite o texto na área de entrada:
A caixa de texto suporta letras minúsculas e caracteres especiais.
A mensagem "Apenas letras minúsculas" é exibida como um placeholder.
Escolha entre criptografar ou descriptografar:
Clique em "Criptografar" para converter o texto.
Clique em "Descriptografar" para reverter o texto criptografado.
Copie o resultado:
Clique em "Copiar" para enviar o resultado para a área de transferência.
