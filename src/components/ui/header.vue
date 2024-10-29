<template>
    <header class="bg-[#63E2B7] pt-[40px] pb-[23px] px-[175px] flex gap-4 justify-between items-center">
        <router-link to="/">
            <img src="@/assets/img/logo.svg" class="w-20 h-20" alt="Logo Icon">
        </router-link>
       <Button v-if="!loadingButton"
       @click="$router.push('/profile')">
        {{ user.user.first_name }} {{ user.user.second_name }}
       </Button>
    </header>
</template>
<script>
import { user } from '../../stores/user';
import Button from './buttons/white.vue';
export default {
    name: 'HeaderComponent',
    components: {
        Button
    },
    data() {
        return {
            user: user(),
            loadingButton: true
        }
    },
    methods: {
        async init() {
            this.loadingButton = true
            await this.user.get_user()
            this.loadingButton = false
        }
    },
    mounted() {
        this.init()
    }
}
</script>