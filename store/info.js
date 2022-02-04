import Vue from "vue"

export const state = () => ({
    parents: [],
    childs: [],
    cards: [],
    visiblePreview: false
})

export const mutations = {
  
    addChild(state, child) {
        const newChild = {
            name: child.name,
            age: child.age,
            id: child.id
        }
       state.childs.push(newChild)
    },

    deleteChild(state, id){
        state.childs = state.childs.filter(i =>i.id !== id)
    },

    addParent(state, parent) {
        const newParent = {
            name: parent.name,
            age: parent.age,
            id: parent.id,
        }
        state.parents.push(newParent)
        console.log(this.info);
    },

    addCard(state, card) {
        state.cards.push(card)
        console.log(state.cards);
        console.log(this.card);
    },

    visiblePreview(state) {
        state.visiblePreview = true

    }
}



export const getters = {

    allChilds: s => s.childs,

    allParents : s => s.parents,

    allCards: s => s.cards,

    visiblePreview: s => s.visiblePreview

    
}