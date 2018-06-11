/**
 * 使用Vue去运行App.vue
 */

import Vue from 'vue' //相当于 var Vue = require('vue')
import moment from 'moment'
import VueLazyLoad from 'vue-lazyload'
import nicescroll from 'jquery.nicescroll'
//按需导入elementUI我们项目中用到的组件
//按需导入我们的element-ui
// import {
//     Button,
//     Pagination,
//     Input,
//     InputNumber,
//     Switch,
//     Form,
//     FormItem,
//     Radio,
//     RadioGroup,
//     MessageBox,
//     Message,
//     Carousel,
//     CarouselItem,
//     Row,
//     Col,
//     Table,
//     TableColumn
// } from 'element-ui'

// Vue.use(Button) //自动导入element-ui/lib/theme-chalk/button.css
// Vue.use(Pagination)
// Vue.use(InputNumber)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(Input)
// Vue.use(Switch)
// Vue.use(Carousel)
// Vue.use(CarouselItem)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Table)
// Vue.use(TableColumn)

// Vue.prototype.$message = Message
// Vue.prototype.$confirm = MessageBox.confirm
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全局注册我们项目中用到的element的组件

//在Vue的原型上挂在一个叫做$axios的属性，所有的Vue对象都可以使用
Vue.use(VueLazyLoad, {
    loading: require('./statics/site/images/01.gif')
})

//导入根组件
import App from './App.vue'

//全局过滤器
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
    //es5函数参数设置默认值
    //const lastFormatString = formatString || ''

    
     // moment(input) 把时间字符串转成时间对象
     // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
    return moment(input).format(formatString)
})

//全局导入样式【每个组件都可以用】
import "./statics/site/css/style.css"

import router from './router'
import {store} from './store/store'

/**利用Vue框架创建出来的根实例，去把根组件的template中的内容，渲染到id=app的div中去 */
new Vue({
    el: "#app",
    router,
    store,
    /**
    render:function(createElement){//用来渲染根组件
       return createElement(App)
    }**/
    render: h => h(App)
})