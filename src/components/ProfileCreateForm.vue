<template>
    <form @submit.prevent="">
        <input type="text" v-model="name" placeholder="Profile name" required>
        <button v-on:click="create">Create</button>
    </form>
</template>

<style scoped>
    form {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    form input {
        height: 40px;
        border: none;
        border-bottom: 2px solid  rgb(13, 181, 81);
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
export default {
    name: 'ProfileCreateForm',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        create() {
            this.$emit('create', this.name)
        }
    }
}
</script>