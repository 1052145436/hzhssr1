/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'introduce',
        path: '/introduce',
        meta: {
            title: '业务介绍'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/introduce')
    }
]
