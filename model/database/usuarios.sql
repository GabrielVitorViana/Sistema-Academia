-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Set-2021 às 17:31
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `academia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` INT (11) NOT NULL,
  `cpf` VARCHAR(18) NOT NULL,
  `rg` VARCHAR(15) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `filiacao` VARCHAR(40) NOT NULL,
  `data` VARCHAR(6) NOT NULL,
  `nacionalidade` VARCHAR(20) NOT NULL,
  `sexo` VARCHAR(10) NOT NULL,
  `profissao` VARCHAR(20) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `ddd` VARCHAR(3) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  `cep` VARCHAR(11) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `pais` VARCHAR(30) NOT NULL,
  `endereco` VARCHAR(30) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
