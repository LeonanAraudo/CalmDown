<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Field, Form  } from 'vee-validate';
import { ref } from 'vue';
import Password from 'primevue/password';
const value = ref(null);

function required(value) {
  return value && value.trim() ? true : 'Campo obrigatório';
}

const onSubmit = (values) => {
  alert('Login realizado com sucesso! ' + JSON.stringify(values));
};
</script>

<template>
      <Form @submit="onSubmit" class="formularioLogin" >
                <p class="titulo">Entre e sinta-se à vontade</p>
                <div class="grupoInput">
                    <div class="bloco-input">
                        <Field name="email" :rules="required" v-slot="{ field, errorMessage}">
                            <label for="email" class="label">E-mail</label>
                            <InputText 
                                placeholder="Digite seu e-mail" 
                                v-bind="field" 
                                id="email"  
                                class="input" 
                                type="email" 
                            />
                             <p v-if="errorMessage" class="erro">{{ errorMessage }}</p>
                        </Field>
                    </div>
                   <div class="bloco-input">
                        <Field name="senha" :rules="required" v-slot="{ field,errorMessage }">
                            <label for="senha" class="label">Senha</label>
                            <Password 
                              toggleMask 
                              placeholder="Digite sua senha" 
                              v-bind="field" 
                              id="senha" 
                              class="password-field"
                              input-class="password-input"
                            />
                            <p v-if="errorMessage" class="erro">{{ errorMessage }}</p>
                        </Field>
                    </div>
                </div>
                <div class="containerBotao">
                  <Button type="submit" class="botaoEntrar" label="Entrar" />
                </div>
                <div>
                    <p class="textoBaixo">Ainda não tem conta?<router-link to="/Cadastro" class="textoBaixoPT2">Cadastre-se</router-link></p>
                </div>
            </Form> 
</template>

<style>
.formularioLogin{
    background-color: #FAFEFF;
    display: flex;
    width: 85%;
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
    font-size: clamp(1rem, 2vw, 1.365rem);
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
    font-size: clamp(1rem, 2vw, 1.165rem);
    font-weight: 500;
}
.textoBaixoPT2{
    font-weight: 600;
    color: #2D9CDB;
    cursor: pointer;
}
.textoBaixoPT2:hover{
    color: #084061;
    transition:all 0.5s;
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

.password-field {
    width: 100% !important;
}

.password-field .p-password-input {
    border: none !important;
    background-color: #E3E5ED !important;
    width: 100% !important;
}
.erro{
    color: red;
    padding-left: 10px;
}
@media(max-width: 768px){
.formularioLogin{
    width: 90%;
    height: 60%;
}
}
</style>