<template>
    <form @submit.prevent="">
        <AlertMessageDanger v-bind:message="messageDanger"/>
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="pass" placeholder="Password" required>
        <button v-on:click="login">Signin</button>
    </form>
</template>

<style scoped>
    form {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        flex-basis: 40%;
    }

    form input {
        height: 40px;
        border: none;
        border-bottom: 2px solid  rgb(13, 181, 81);
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;
        transition: all 0.4s;
        font-size: 15px;
    }

    form input:focus {
        border-bottom: 2px solid  #0DB551;
        box-shadow: 0px 0px 9px 1px #0DB551;
        outline: 1px solid  rgb(13, 181, 81);
    }

    form button {
        height: 40px;
        font-size: 15px;
        font-weight: 600;
        color: #ffffff;
        background: rgb(13, 181, 81);
        outline: 1px solid  rgb(13, 181, 81);
        border: none;
        cursor: pointer;
        transition: all 0.4s;
    }

    form button:hover {
        opacity: 0.8;
        box-shadow: 0px 0px 9px 1px #0DB551;
    }

    @media screen and (max-width: 768px) {
        form {
            flex-basis: 80%;
        }
    }
</style>

<script>
import AlertMessageDanger from '../components/AlertMessageDanger.vue'

export default {
    name: 'LoginForm',
    components: {
        AlertMessageDanger
    },
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        login() {
            this.$emit('login', {
                email: this.email,
                pass: this.pass
            })
        }
    },
    props: [
        'messageDanger'
    ]
}
</script>