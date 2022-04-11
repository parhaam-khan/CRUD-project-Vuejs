
const state ={
    users:[]
}

const getters={
    users:(state) => state.users
}

const mutations = {
    addUser: (state,teacher) => {
    state.users.push(teacher)
    },

    deleteUser: (state,index) =>{
        state.users.splice(index,1)
        console.log(state.users)
    } 
}

export default{
    state,
    getters,
    mutations
}