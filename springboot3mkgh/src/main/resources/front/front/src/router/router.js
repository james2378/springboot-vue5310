import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import fangyirenyuanList from '../pages/fangyirenyuan/list'
import fangyirenyuanDetail from '../pages/fangyirenyuan/detail'
import fangyirenyuanAdd from '../pages/fangyirenyuan/add'
import qgsssjList from '../pages/qgsssj/list'
import qgsssjDetail from '../pages/qgsssj/detail'
import qgsssjAdd from '../pages/qgsssj/add'
import gnssdtList from '../pages/gnssdt/list'
import gnssdtDetail from '../pages/gnssdt/detail'
import gnssdtAdd from '../pages/gnssdt/add'
import hesuanjiancedianList from '../pages/hesuanjiancedian/list'
import hesuanjiancedianDetail from '../pages/hesuanjiancedian/detail'
import hesuanjiancedianAdd from '../pages/hesuanjiancedian/add'
import hesuanjianceyuyueList from '../pages/hesuanjianceyuyue/list'
import hesuanjianceyuyueDetail from '../pages/hesuanjianceyuyue/detail'
import hesuanjianceyuyueAdd from '../pages/hesuanjianceyuyue/add'
import hesuanjieguoList from '../pages/hesuanjieguo/list'
import hesuanjieguoDetail from '../pages/hesuanjieguo/detail'
import hesuanjieguoAdd from '../pages/hesuanjieguo/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'fangyirenyuan',
					component: fangyirenyuanList
				},
				{
					path: 'fangyirenyuanDetail',
					component: fangyirenyuanDetail
				},
				{
					path: 'fangyirenyuanAdd',
					component: fangyirenyuanAdd
				},
				{
					path: 'qgsssj',
					component: qgsssjList
				},
				{
					path: 'qgsssjDetail',
					component: qgsssjDetail
				},
				{
					path: 'qgsssjAdd',
					component: qgsssjAdd
				},
				{
					path: 'gnssdt',
					component: gnssdtList
				},
				{
					path: 'gnssdtDetail',
					component: gnssdtDetail
				},
				{
					path: 'gnssdtAdd',
					component: gnssdtAdd
				},
				{
					path: 'hesuanjiancedian',
					component: hesuanjiancedianList
				},
				{
					path: 'hesuanjiancedianDetail',
					component: hesuanjiancedianDetail
				},
				{
					path: 'hesuanjiancedianAdd',
					component: hesuanjiancedianAdd
				},
				{
					path: 'hesuanjianceyuyue',
					component: hesuanjianceyuyueList
				},
				{
					path: 'hesuanjianceyuyueDetail',
					component: hesuanjianceyuyueDetail
				},
				{
					path: 'hesuanjianceyuyueAdd',
					component: hesuanjianceyuyueAdd
				},
				{
					path: 'hesuanjieguo',
					component: hesuanjieguoList
				},
				{
					path: 'hesuanjieguoDetail',
					component: hesuanjieguoDetail
				},
				{
					path: 'hesuanjieguoAdd',
					component: hesuanjieguoAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
