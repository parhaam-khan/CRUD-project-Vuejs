
const state ={
    users:localStorage.getItem('addUser') ? JSON.parse(localStorage.getItem('addUser')):[],
    edit: false,
}

const getters={
    users:(state) => state.users,
    edit: (state) => state.edit,

}

const mutations = {
    addUser: (state,teacher) => {
    state.users.push(teacher)
    },

    deleteUser: (state,index) =>{
        state.users.splice(index,1)
        localStorage.setItem('addUser',JSON.stringify(state.users))
    } ,

    editUser:(state) => {
       return state.edit = true
        },
        
        falseEditHandler:() => {
        return state.edit = false
        },

    editHandler:(state,data) => {
    const updateState = state.users.map((user) => user.id === data.id ? data : user )
    state.users = updateState
     state.edit = false
    }
}

export default{
    state,
    getters,
    mutations
}