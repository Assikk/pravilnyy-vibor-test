<template>
    <div class="text-white pt-[178px] grid grid-cols-3 gap-4">
        <Card v-for="card in cards" :key="card.id" :card="card"/>
    </div>
</template>
<script>
import Card from '../../ui/card.vue'
export default {
    name: 'HomeComponent',
    components: {
        Card
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    img: {
                        url: '/img/cards/binance.svg',
                        alt: 'Binance'
                    },
                    title: 'Binance',
                    description: 'Поиск прибыльных p2p объявлений',
                    link: 'обмена'
                },
                {
                    id: 2,
                    img: {
                        url: '/img/cards/huobi.svg',
                        alt: 'Huobi'
                    },
                    title: 'Huobi',
                    description: 'Поиск прибыльных p2p объявлений',
                    link: 'обмена'
                },
                {
                    id: 3,
                    img: {
                        url: '/img/cards/bybit.svg',
                        alt: 'ByBit'
                    },
                    title: 'ByBit',
                    description: 'Поиск прибыльных p2p объявлений',
                    link: 'обмена'
                },
            ]
        }
    }
}
</script>