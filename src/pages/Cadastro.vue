<script setup>
import FormCadastro from '../components/FormCadastro.vue';
</script>

<template>
    <div class="conteiner">
        <FormCadastro />
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #E5F0FD;
    overflow: hidden;
}
.conteiner{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
</style>