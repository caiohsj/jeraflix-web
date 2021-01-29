<template>
    <pre>{{ profile }}</pre>
</template>

<style scoped>

</style>

<script>
import profileService from '../services/jeraflix_api/profile'
export default {
    name: 'Profile',
    data() {
        return {
            profile: {}
        }
    },
    methods: {
        getProfile() {
            const id = this.$route.params.id;
            profileService.get(id).then(response => {
                this.profile = response.data
            })
        }
    },
    mounted() {
        this.getProfile()
    }
}
</script>