<template>
    <div class="flex flex-col items-center gap-[23px] max-w-[393px]">
        <div class="flex items-center gap-10">
            <img :src="card.img.url" class="w-[92px] h-[92px]" :alt="card.img.alt">
            <h2 class="text-2xl font-semibold">
                {{ card.title }}
            </h2>
        </div>
        <div class="font-bold text-3xl">
            <span>
                {{ card.description }}
            </span>&nbsp;
            <span class="text-[#63E2B7]">
                {{ card.link }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props: {
        card: {
            type: Object
        }
    }
}
</script>