<template>
    <div class="form">
        <LoginForm v-on:login="signin"/>
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
import LoginForm from '@/components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        LoginForm
    },
    methods: {
        signin(user) {
            this.$store.dispatch('login', user).then(() => {
                
            })
        }
    }
}
</script>