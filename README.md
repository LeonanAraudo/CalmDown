# CalmDown - Aplicação Frontend em Vue.js

Projeto frontend em Vue.js moderno e responsivo, desenvolvido para uma aplicação de rede social. Disponível nas versões desktop e mobile, com três telas principais.

Teste a aplicação: https://calm-down-theta.vercel.app/
## 🚀 Tecnologias Utilizadas

- **Vue.js 3.5.18** - Framework JavaScript progressivo
- **Vite 7.1.2** - Build tool e dev server
- **Vue Router 4.5.1** - Roteamento oficial do Vue
- **PrimeVue 4.3.7** - Biblioteca de componentes UI
- **Vee-Validate 4.15.1** - Validação de formulários
- **Axios 1.11.0** - Cliente HTTP para requisições à API

## 🎨 Padrões de Projeto

- **Composition API** - Utilizando `<script setup>` para lógica reativa
- **Componentização** - Estrutura modular com componentes reutilizáveis
- **Roteamento** - Navegação entre páginas com Vue Router
- **Validação em Tempo Real** - Feedback imediato para o usuário
- **Design Responsivo** - Interface adaptável com CSS moderno

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── FormLogin.vue   # Formulário de login
│   └── FormCadastro.vue # Formulário de cadastro
├── pages/              # Páginas da aplicação
│   ├── Inicial.vue     # Tela de boas-vindas
│   ├── Login.vue       # Página de login
│   └── Cadastro.vue    # Página de cadastro
├── routes/             # Configuração de rotas
├── assets/             # Recursos estáticos
└── main.js            # Ponto de entrada da aplicação
```

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone [URL_DO_REPOSITORIO]
cd vite-project
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Build para produção**
```bash
npm run build
```

5. **Preview da build**
```bash
npm run preview
```

## 🔐 Validações Implementadas

### Formulário de Login
- **Email**: Validação de formato e campo obrigatório
- **Senha**: Campo obrigatório
- **Feedback visual**: Mensagens de erro em tempo real
  
  <img width="1366" height="604" alt="image" src="https://github.com/user-attachments/assets/541baec7-988e-4507-b6cd-284f4e7ed21f" />


### Formulário de Cadastro
- **Email**: Validação de formato e campo obrigatório
- **Senha**: Campo obrigatório
- **Confirmar Senha**: Validação de correspondência com a senha
- **Validação cruzada**: Verificação de igualdade entre senhas
  
  <img width="1366" height="609" alt="image" src="https://github.com/user-attachments/assets/1af5658f-cf3b-46d3-a9f2-b4b6429ef8cd" />

## 🌐 Integração com API

O projeto está configurado com **Axios** e pronto para integração com APIs:

- **Configuração**: Axios já instalado e configurado
- **Endpoints**: Formulários configurados para POST requests
- **Autenticação**: Sistema de token JWT implementado
- **Storage**: Tokens armazenados no localStorage
- **Tratamento de Erros**: Feedback amigável para o usuário

### Configuração da API
```javascript
// Em FormLogin.vue e FormCadastro.vue
// Substitua a string vazia pela URL da sua API
const response = await axios.post('SUA_URL_API_AQUI', {
    email: values.email,
    senha: values.senha
})
```





---

**Desenvolvido com foco em experiência do usuário confortável e acolhedora** 🫂
