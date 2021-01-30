<template>
    <router-link :to="{ name: link }">Back</router-link>
</template>

<style scoped>
a {
    text-decoration: none;
    padding: 10px;
    background: #b2bec3;
    display: block;
    width: 90px;
    margin-top: 30px;
    color: #ffffff;
    border-radius: 10px;
    margin-left: 30px;
    text-align: center;
}
</style>

<script>
export default {
    name: 'LinkBack',
    props: [
        'link'
    ]
}
</script>