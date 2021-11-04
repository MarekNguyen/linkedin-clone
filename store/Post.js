import { postsRef } from '../database/firebase'
import { addDoc, Timestamp, onSnapshot } from 'firebase/firestore'
export default {
    namespaced: true,
    state() {
        return {
            posts: []
        }
    },
    getters:{
        posts(state) {
            return state.posts;
        }
    },
    mutations: {
        initPosts(state, payload) {
            state.posts = payload
        }
    },
    actions: {
        getPosts({ commit }, payload){
            onSnapshot(postsRef, (snapshot) => {
                commit("initPosts",
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            });
        },
        async createPost({ commit }, payload) {
            const docRef = await addDoc(postsRef, {
                name: payload.name,
                description: payload.description,
                message: payload.message,
                photoUrl: '123',
                timestamp: Timestamp.fromDate(new Date()),
            });
            return docRef;
        }
    }
}