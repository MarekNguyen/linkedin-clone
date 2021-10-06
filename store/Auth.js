export default {
    namespaced: true,
    state() {
        user: false
    },
    getters:{
        user(state) {
            return state.user;
        }
    },
    mutations: {},
    actions: {}
}