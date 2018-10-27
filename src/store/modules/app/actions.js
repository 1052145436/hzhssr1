/**
 * actions
 * @author lucy <76573917@qq.com>
 * @created 2017-04-09 21:39
 */
import * as type from './mutation-type'

export const token = ({ commit }, payload) => {
    commit(type.TOKEN, payload)
}
