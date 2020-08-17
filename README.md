# pdc-frontend

## Inicializando a aplicação

<p>É necessário adicionar o seu user ao grupo de usuários do docker, usando o seguinte comando e depois reiniciar a máquina.</p>

<code>sudo usermod -aG docker $USER</code>

<p>Para inicializar a aplicação com Docker primeiro precisamos executar o build da imagem a partir da raiz do projeto:</p>

<code>docker build -t pdc-front:dev .</code>

<p>Uma vez montada, agora podemos criar o container da aplicação:</p>

<code>docker run -itd --name pdc-front-container \
    -p 3000:3000
    -v ${pwd}:/app
    -v /app/node_modules
    pdc-front:dev
</code>

- <b>-itd</b> inicia o container no modo iterativo do terminal e em background, é necessario para aplicações react.
- <b>-p</b> são as portas -> host:container.
- <b>-v</b> são os volumes criados para o hot reloading.
- <b>pdc-front:dev</b> é o nome da imagem.

<p>Caso não aconteça nenhum error é possível observar a aplicação rodando no seu localhost:3000</p>
