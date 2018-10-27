/**
 * mutations
 * @author lucy <76573917@qq.com>
 * @created 2017-04-09 21:40
 */
import * as type from './mutation-type'


export default {
    [type.TOKEN] (state, payload) {
        state.token = payload
    }
}
