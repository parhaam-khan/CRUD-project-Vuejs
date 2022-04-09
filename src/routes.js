import UserList from './pages/UserList.vue'
import UserDetail from './pages/UserDetail.vue'

const routes = [
    {path: '/', component: UserList},
    {path: '/user/:id',name:'userDetail', component: UserDetail}
]

export default routes;