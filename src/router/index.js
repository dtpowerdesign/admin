import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import register from '@/views/login/register'
import manage from '@/views/manage'
import Nav from '@/views/manage/Nav'
import contract from '@/views/manage/table/contract'
import cuser from '@/views/manage/table/cuser'
import event from '@/views/manage/table/event'
import invoice from '@/views/manage/table/invoice'
import project from '@/views/manage/table/project'
import puser from '@/views/manage/table/puser'
import website from '@/views/manage/table/website'
import endPage from '@/views/manage/website/endPage'
import homePage from '@/views/manage/website/homePage'
import homePageCase from '@/views/manage/website/homePageCase'
import totalMsg from '@/views/manage/website/totalMsg'
import categorys from '@/views/manage/selectData/categorys'
import types from '@/views/manage/selectData/types'
import majors from '@/views/manage/selectData/majors'
import key from '@/views/manage/advanced/key'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    }, {
      path: '/register',
      component: register
    }, {
      path: '/manage',
      component: manage,
      children: [
        {path: '', component: Nav},
        {path: '/manage/contract', component: contract},
        {path: '/manage/cuser', component: cuser},
        {path: '/manage/event', component: event},
        {path: '/manage/invoice', component: invoice},
        {path: '/manage/project', component: project},
        {path: '/manage/puser', component: puser},
        {path: '/manage/website', component: website},
        {path: '/manage/endPage', component: endPage},
        {path: '/manage/homePage', component: homePage},
        {path: '/manage/homePageCase', component: homePageCase},
        {path: '/manage/totalMsg', component: totalMsg},
        {path: '/manage/categorys', component: categorys},
        {path: '/manage/types', component: types},
        {path: '/manage/majors', component: majors},
        {path: '/manage/key', component: key}
      ]
    }
  ]
})
