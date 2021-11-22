<!DOCTYPE html>
</html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css\listarCadastros.css">
    <link rel="stylesheet" href="css\admin.css">
    <title>Lista de Cadastros</title>
</head>
<body>
    <header class="logo">
        <img src="imagens\logo.png" width="150" height="100">
    </header>
    <header class="header">
        <ul>
            <li><a href="..\view\homeAdmin.html">Inicio</li></a>
            <li><a href="">Perfil</li></a>
            <li><a href="">Sobre</a></li>
            <li><a href="..\controller\logOutAdmin.php">Sair</li></a>
        </ul>
    </header>
    <table>
        <caption><h1>LISTA DE CADASTROS</h1></caption>
        <tr>
            <th>AÇÃO</th>
            <th>ID</th>
            <th>USERNAME</th>
            <th>CPF</th>
            <th>RG</th>
            <th>NOME</th>
            <th>FILIAÇÃO</th>
            <th>DATA DE NASCIMENTO</th>
            <th>NACIONALIDADE</th>
            <th>SEXO</th>
            <th>PROFISSÃO</th>
            <th>E-MAIL</th>
            <th>DDD</th>
            <th>TELEFONE</th>
            <th>CEP</th>
            <th>ESTADO</th>
            <th>CIDADE</th>
            <th>PAÍS</th>
            <th>ENDEREÇO</th>
        </tr>
        <?php require_once '../model/class/Administrador.php';
        $adm = new Administrador;
        $adm->conectar("academia", "localhost", "root", "");
        $adm->ver();
        ?>
    </table>
    <div class="socialmedia">
        <ul>
            <a href="">
                <li><img src="imagens/facebook.png" alt=""></li>
            </a>
            <a href="">
                <li><img src="imagens/youtube.png" alt=""></li>
            </a>
            <a href="">
                <li><img src="imagens/instagram.png" alt=""></li>
            </a>
            <a href="">
                <li><img src="imagens/twiter.png" alt=""></li>
            </a>
            <a href="">
                <li><img src="imagens/whatsapp.png" alt=""></li>
            </a>
            <ul>
    </div>
    <footer class="rodape">
        <p>Contatos@gmail.com</p>
        <p>Contatos123@yahoo.com.br</p>
        <p>Contato@hotmail.com</p>
    </footer>
</body>
</html>