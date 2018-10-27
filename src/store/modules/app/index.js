/**
 * app
 * @author lucy <76573917@qq.com>
 * @created 2017-04-09 21:39
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
    token: ''
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
