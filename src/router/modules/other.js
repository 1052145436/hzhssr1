/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/07/02 15:00
 */
export default [
    {
        path: '*',
        component: () => import(/* webpackChunkName: "other" */'@/views/other/errors/404')
    }
]
