<template>
    <div class="text-white py-[111px] flex gap-[85px]">
        <img src="/img/avatar.png" class="w-[433px] h-[418px]" alt="Avatar">
        <div class="w-[600px]">
            <div class="mb-[139px] pl-[81px] pr-[38px]">
                <h1 class="text-center text-[48px] leading-[58px]">
                    Пользователь
                </h1>
                <div class="mt-[63px] flex flex-col gap-[23px]">
                    <div class="grid grid-cols-3 gap-4 text-2xl">
                        <p class="col-span-2">
                            Фамилия
                        </p>
                        <p class="col-span-1">
                            {{ user.user.second_name }}
                        </p>
                    </div>
                    <div class="grid grid-cols-3 gap-4 text-2xl">
                        <p class="col-span-2">
                            Имя
                        </p>
                        <p class="col-span-1">
                            {{ user.user.first_name }}
                        </p>
                    </div>
                    <div class="grid grid-cols-3 gap-4 text-2xl">
                        <p class="col-span-2">
                            Отчество
                        </p>
                        <p class="col-span-1">
                            {{ user.user.middle_name }}
                        </p>
                    </div>
                    <div class="grid grid-cols-3 gap-4 text-2xl">
                        <p class="col-span-2">
                            Номер телефона
                        </p>
                        <p class="col-span-1">
                            {{ user.user.phone }}
                        </p>
                    </div>
                </div>
            </div>
            <Button @click="$router.push('/')">
                На главную
            </Button>
        </div>
    </div>
</template>
<script>
import { user } from '../../../stores/user';
import Button from '@/components/ui/buttons/default.vue'
export default {
    name: 'ProfileComponent',
    components: {
        Button
    },
    data() {
        return {
            user: user()
        }
    }
}
</script>