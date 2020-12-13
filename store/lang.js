export const state = () => ({
    switchIsOpen:false
})

export const getters = {
    isSwitchOpen: state => {
        return state.switchIsOpen
    }
}

export const mutations = {
    toogleSwitch: (state, switcState) => { // switcState: 'open' || 'close' || null -> toggle
        if(!switcState){
            state.switchIsOpen = !state.switchIsOpen
            return
        }
        switcState === 'open' ? (state.switchIsOpen = true) : (state.switchIsOpen = false)
    }
}

// export const actions = {
//     updateActionValue({ commit }) {
//         commit('updateValue', payload)
//     }
// }