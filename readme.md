# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Devsamurai Classroom](https://class.devsamurai.com.br/auth/login).

## Funcionalidades Testadas

1. **Login:**
   - Realiza o login com credenciais de usuário.
   - Assert: Verifica se o login é bem-sucedido e a página de recursos é carregada.

2. **Navegação entre Recursos:**
   - Navega para diferentes recursos através de links na página.
   - Assert: Confirma se cada recurso é acessado corretamente e retorna à página anterior.

3. **Pesquisa por Recurso:**
   - Realiza uma pesquisa por um recurso específico usando a barra de pesquisa.
   - Assert: Verifica se o recurso buscado é encontrado e acessado corretamente.

4. **Inscrição em Aula:**
   - Seleciona e inscreve-se em uma aula específica.
   - Assert: Confirma se o processo de inscrição é concluído com sucesso.

5. **Conclusão de Aula:**
   - Conclui uma aula específica após inscrição.
   - Assert: Verifica se a aula é concluída sem problemas.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/XCarlosJr/web-testes
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
