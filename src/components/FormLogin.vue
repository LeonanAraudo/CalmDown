<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import { success, z } from 'zod';
import Message from 'primevue/message';

const email = ref('');
const senha = ref('');
const errorEmail = ref('');
const errorSenha = ref('');

const schema = z.object({
  email: z.string().min(1, 'O campo e-mail é obrigatório'),
  senha: z.string().min(1, 'O campo senha é obrigatório')
});

const onSubmit = () => {
  const result = schema.safeParse({ email: email.value, senha: senha.value });

  if (!result.success) {
    // separar erros
    const errors = result.error.formErrors.fieldErrors;
    errorEmail.value = errors.email ? errors.email[0] : '';
    errorSenha.value = errors.senha ? errors.senha[0] : '';
  } else {
    errorEmail.value = '';
    errorSenha.value = '';
    alert('Formulário enviado com sucesso!');
  }
};
</script>

<template>
      <form  @submit.prevent="onSubmit" class="formulario">
                <p class="titulo">Entre e sinta-se à vontade</p>
                <div class="grupoInput">
                    <div class="bloco-input">
                        <label for="email" class="label">E-mail</label>
                        <InputText id="email" name="email" class="input" type="text" v-model="email"/>
                        <Message v-if="errorMessage" severity="error" :text="errorMessage"/>
                    </div>
                   <div class="bloco-input">
                        <label for="senha" class="label">Senha</label>
                        <InputText name="senha" id="senha" class="input" type="password" v-model="senha"/>
                        <Message v-if="errorMessage" severity="error" :text="errorMessage"/>
                    </div>
                </div>
                <div class="containerBotao">
                    <Button type="submit" class="botaoEntrar" label="Entrar"/>
                </div>
                <div>
                    <p class="textoBaixo">Ainda não tem conta?<span class="textoBaixoPT2">Cadastre-se</span></p>
                </div>
            </form> 
            
</template>
<style>
.formulario{
    background-color: #FAFEFF;
    display: flex;
    width: 90%;
    height: 80%;
    align-items: center;
    justify-content:space-around;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.containerBotao{
    width: 100%;
}
.titulo{
     font-size: clamp(1.2rem, 2vw, 1.465rem);
    font-weight: bold;
    color: #333333;
}
.label{
    font-weight:600;
    color: #333333;
}
.botaoEntrar{
    width: 40% !important;
    background-color: #A8D5BA !important;
    border: none !important;
    outline: none !important;
    color:#333333 !important;
    border-radius: 10px !important;
}
.botaoEntrar:hover{
    transform: scale(1.05) !important;
    transition: all 0.5s !important;
}
.textoBaixo{
    font-weight: 500;
}
.textoBaixoPT2{
    font-weight: 600;
    color: #2D9CDB;
    cursor: pointer;
}
.grupoInput{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}
.bloco-input{
    width: 70%;
    display: flex;
    align-items:baseline;
    justify-content:baseline;
    flex-direction: column;
}
input{
    border: none !important;
    background-color: #E3E5ED !important;
    width: 100% !important;
}
</style>