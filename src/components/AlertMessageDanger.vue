<template>
    <div v-if="message && message != ''">{{ message }}</div>
</template>

<style scoped>
div {
    background: #d63031;
    padding: 10px;
    margin-top: 15px;
    color: #ffffff;
    border-radius: 5px;
    font-weight: bold;
}
</style>

<script>
export default {
    name: 'AlertMessageDanger',
    data()  {
        return {
            class: 'alert-message'
        }
    },
    props: [
        'visible',
        'message'
    ]
}
</script>