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
import puserState from '@/views/manage/website/puserState'
import cuserState from '@/views/manage/website/cuserState'
import contractState from '@/views/manage/website/contractState'
import eventState from '@/views/manage/website/eventState'
import invoiceState from '@/views/manage/website/invoiceState'
import projectState from '@/views/manage/website/projectState'
import categorys from '@/views/manage/selectData/categorys'
import types from '@/views/manage/selectData/types'
import majors from '@/views/manage/selectData/majors'
import designProcess from '@/views/manage/selectDataNew/designProcess'
import sizeAndCapacitys from '@/views/manage/selectDataNew/sizeAndCapacitys'
import duties from '@/views/manage/selectDataNew/duties'
import payScale from '@/views/manage/selectDataNew/payScale'
import projectNowState from '@/views/manage/selectDataNew/projectNowState'
import protocl from '@/views/manage/upload/protocl'
import taskbasemsg from '@/views/manage/upload/taskbasemsg'
import projectrequriment from '@/views/manage/upload/projectrequriment'
import payabout from '@/views/manage/upload/payabout'
import resultrequriment from '@/views/manage/upload/resultrequriment'
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
        {path: '/manage/puserState', component: puserState},
        {path: '/manage/cuserState', component: cuserState},
        {path: '/manage/contractState', component: contractState},
        {path: '/manage/invoiceState', component: invoiceState},
        {path: '/manage/eventState', component: eventState},
        {path: '/manage/projectState', component: projectState},
        {path: '/manage/categorys', component: categorys},
        {path: '/manage/types', component: types},
        {path: '/manage/majors', component: majors},
        {path: '/manage/designProcess', component: designProcess},
        {path: '/manage/sizeAndCapacitys', component: sizeAndCapacitys},
        {path: '/manage/duties', component: duties},
        {path: '/manage/payScale', component: payScale},
        {path: '/manage/projectNowState', component: projectNowState},
        {path: '/manage/protocl', component: protocl},
        {path: '/manage/taskbasemsg', component: taskbasemsg},
        {path: '/manage/projectrequriment', component: projectrequriment},
        {path: '/manage/payabout', component: payabout},
        {path: '/manage/resultrequriment', component: resultrequriment},
        {path: '/manage/key', component: key}
      ]
    }
  ]
})
