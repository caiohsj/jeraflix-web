<template>
    <div class="content">
        <div v-if="profiles.length == 0" class="dialog">
            <h2 class="alert">Do you need create profile! click below.</h2>
        </div>
        <div class="profiles" v-else>
            <div class="profile" v-for="profile in profiles" v-bind:key="profile.id">
                <a v-on:click.prevent="setProfile(profile)">
                    <img src="../assets/default-user-icon.jpg" alt="">
                    <p>{{ profile.name }}</p>
                </a>
            </div>
        </div>
        <div class="box-btn">
            <router-link class="btn-new-profile" to="/profile" v-if="profiles.length < 4"> New profile</router-link>
        </div>
    </div>
</template>

<style scoped>
.alert {
    background: #fab1a0;
    padding: 20px;
    text-align: center;
}

.content {
    margin-bottom: 60px;
}

.profiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 30px 5px;
}

.profile {
    display: flex;
    justify-content: center;
    border: 1px solid #d1d1d1;
    padding: 5px;
}

.profile img {
    width: 150px;
}

.profile p {
    text-align: center;
}

.profile a {
    text-decoration: none;
    color: #636e72;
    cursor: pointer;
}

.profile img {
    transition: all 0.4s;
}

.profile img:hover {
    width: 200px;
    z-index: 1;
}

.box-btn {
    display: flex;
    justify-content: center;
}

.btn-new-profile {
    background:  #0DB551;
    padding: 15px;
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-new-profile:hover {
    background: #55efc4;
    box-shadow: 0px 0px 6px 1px  #55efc4;
}

@media screen and (max-width: 768px) {
    .profile {
        margin: 3px;
        flex-basis: calc(50% - 6px);
    }
}
</style>

<script>
export default {
    name: 'DialogForUserWithoutProfile',
    props: [
        'profiles'
    ],
    methods: {
        setProfile(profile) {
            this.$emit('profileClicked', profile)
        }
    }
}
</script>