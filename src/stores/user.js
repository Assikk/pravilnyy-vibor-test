import { defineStore } from 'pinia';
import axios from '../axios'
export const user = defineStore('user', {
  state: () => ({
    user: {},
  }),
  actions: {
    async get_user() {
        try {
            const response = await axios.get('get-user-data/')
            this.user = response.data.profile
        } catch (error) {
            console.log(error);
        }
    }
  },
});
