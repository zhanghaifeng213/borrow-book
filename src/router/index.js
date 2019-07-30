import Vue from 'vue'
import Router from 'vue-router'
import AllBooks from '@/views/all-books/all-books.vue'
import BorrowedBooks from '@/views/borrowed-books/borrowed-books.vue'
Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/all-books',
    children: [{
      path: 'all-books',
      name: 'all-books',
      component: AllBooks,
      meta: { title: 'all-books' }
    }]
  },
  {
    path: '/borrowed-books',
    component: Layout,
    children: [
      {
        path: '',
        name: 'borrowed-books',
        component: BorrowedBooks,
        meta: { title: 'borrowed-books' }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: '',
        name: 'users',
        component: BorrowedBooks,
        meta: { title: 'users' }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
