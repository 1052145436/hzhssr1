/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'cultrue',
        path: '/cultrue',
        meta: {
            title: '联系我们'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/cultrue')
    }
]
