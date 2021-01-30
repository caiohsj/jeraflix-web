<template>
    <div v-if="message && message != ''">{{ message }}</div>
</template>

<style scoped>
div {
    background: #0be881;
    padding: 10px;
    margin-top: 15px;
    color: #ffffff;
    border-radius: 5px;
    font-weight: bold;
}
</style>

<script>
export default {
    name: 'AlertMessageSuccess',
    data()  {
        return {
            class: 'alert-message'
        }
    },
    props: [
        'message'
    ]
}
</script>