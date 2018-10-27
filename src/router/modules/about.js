/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'about',
        path: '/about',
        meta: {
            title: '关于我们'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/about')
    }
]
