<template>
    <div class="flex flex-col h-screen">
        <Header></Header>
        <router-view class="flex-1 bg-[#101014] px-[175px]"/>
    </div>
</template>
<script>
import Header from '../components/ui/header.vue';
export default {
    name: 'DefaultLayout',
    components: {
        Header
    }
}
</script>