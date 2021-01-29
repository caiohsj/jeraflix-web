<template>
    <div>
        <div class="content">
            <h1 class="title">New Profile</h1>
            <ProfileCreateForm v-on:create="create"/>
            <AlertMessageDanger v-bind:message="messageDanger"/>
            <AlertMessageSuccess v-bind:message="messageSuccess"/>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    flex-direction: column;
}

.title {
    text-align: center;
    margin-top: 50px;
    color: #2d3436;
}
</style>

<script>
import ProfileCreateForm from '../components/ProfileCreateForm.vue'
import AlertMessageDanger from '../components/AlertMessageDanger.vue'
import AlertMessageSuccess from '../components/AlertMessageSuccess.vue'

import profileService from '../services/jeraflix_api/profile'

export default {
    name: 'ProfileCreate',
    components: {
        ProfileCreateForm,
        AlertMessageDanger,
        AlertMessageSuccess
    },
    data() {
        return {
            messageSuccess: '',
            messageDanger: ''
        }
    },
    methods: {
        create(name) {
            profileService.create({name}).then(() => {
                this.messageSuccess = 'Profile has been created'
            })
        }
    }
}
</script>