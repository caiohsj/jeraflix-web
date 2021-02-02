<template>
    <div class="form">
        <LoginForm v-on:login="signin" v-bind:messageDanger="messageDanger"/>
    </div>
</template>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        LoginForm
    },
    data() {
        return {
            messageDanger: ''
        }
    },
    methods: {
        async signin(user) {
            await this.$store.dispatch('login', user)
            if(this.$store.getters.status === 'AUTHENTICATED')
                this.$router.go(0)
            else
                this.messageDanger = 'Email or password incorrect'
        }
    }
}
</script>