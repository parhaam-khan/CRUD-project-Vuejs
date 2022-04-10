import UserList from './views/UserList.vue'
import UserDetail from './views/UserDetail.vue'
import UserForm from './views/UserForm.vue'
import UserTable from './views/UserTable.vue'

const routes = [
    {path: '/', component: UserList},
    {path:'/user-form', component:UserForm},
    {path:'/UserTable', component:UserTable},
    {path: '/user/:id',name:'userDetail', component: UserDetail},
    
]

export default routes;