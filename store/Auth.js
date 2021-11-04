import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../database/firebase'
export default {
    namespaced: true,
    state() {
        return {
            user: false
        }
    },
    getters:{
        user(state) {
            return state.user;
        }
    },
    mutations: {
        initUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUp({ commit }, { email, password } ) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    commit('initUser', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        },
        signIn({commit}, { email, password}) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    commit('initUser', user);
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)   
                });
        }
    }
}