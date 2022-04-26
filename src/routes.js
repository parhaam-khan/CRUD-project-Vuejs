import UserList from './views/UserList.vue'
import UserDetail from './views/UserDetail.vue'
import UserForm from './views/UserForm.vue'
import UserTable from './views/UserTable.vue'

const routes = [
    {path: '/', name:"UserList", component: UserList},
    {path:'/user-form', component:UserForm},
    {path:'/user-table',name:'UserTable', component:UserTable},
    {path: '/edit-user-form/:id',name:'editForm', component: UserForm},
    {path: '/user/:id',name:'userDetail', component: UserDetail},
    
]

export default routes;