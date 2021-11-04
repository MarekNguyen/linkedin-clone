export default function ({redirect, store}) {
    const isAuthenticated = store.state.Auth.user ? true : false
    if (!isAuthenticated) {
        redirect({name: 'login'})
    }
}