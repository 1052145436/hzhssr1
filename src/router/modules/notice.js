/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'notice',
        path: '/notice',
        meta: {
            title: '阅读详情'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/notice')
    }
]
