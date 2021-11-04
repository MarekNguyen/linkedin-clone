import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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
        },
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
        async signIn({commit}, { email, password }) {
            return new Promise((resolve, reject) =>{
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        commit('initUser', user);
                        resolve(user)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)   
                        reject(error)
                    });
            })
        },
        updateUserProfile({commit}, payload) {
            updateProfile(auth.currentUser, {
                displayName: payload.displayName, phoneNumber: parseInt(payload.phoneNumber)
              }).then(() => {
                // Profile updated!
                // ...
                console.log('successfully')
            }).catch((error) => {
                // An error occurred
                // ...
                console.log('error')
              });
        }
    }
}