/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'supplier',
        path: '/supplier',
        meta: {
            title: '供应商链入驻'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/supplier')
    }
]
