<template>
  <div class="wrapper">
    <div class="container">
      <form class="personalData">
        <h1>Персональные данные</h1>

        <div class="inputParentName border input">
          <h2>Имя</h2>

          <input 
          placeholder="Введите имя"
          type="text"
          @change="addParentInState"
          v-model="parentName"
          >
        </div>

        <div class="inputParentAge border input">
          <h2>Возраст</h2>

          <input 
          @change="addParentInState"
          placeholder="Введите возраст"
          type="text"
          v-model="parentAge"
          >
        </div>
      </form>

      <form 
      v-show="parentAge && parentName"
      class="addChildData">
        <h1>Дети (макс.5)</h1> 

        <button
        v-show="childs.length< 5"
        @click.prevent="visibleChildData = !visibleChildData"
        class="openChildBtn btn">
          Добавить ребенка
        </button>
      </form>

      <form 
        v-show="visibleChildData"
        class="childrenData">
          <h1>Информация о детях</h1>

          <div class="inputChildName border input">
            <h2>Имя</h2>
            <input 
            placeholder="Введите имя ребенка"
            v-model="childName"
            type="text"
            >
          </div>

          <div 
          v-show="childName"
          class="inputChildAge border input">
            <h2>Возраст</h2>
            <input 
            placeholder="Введите возраст ребенка"
            @change="addChildInState"
            @keypress.enter="addChildInState"
            v-model="childAge"
            type="text"
            >
          </div>
      </form>

      <div>
        <div 
        v-for="item in childs"
        :key="item.id"
        class="childList">
            <div class="childName border childInfo">
              <h2>Имя</h2>
              <span>{{item.name}}</span>
            </div>
  
            <div class="childAge border childInfo">
              <h2>Возраст</h2>
              <span>{{item.age}}</span>
            </div>
  
            <button
            :id="item.id"
            @click="deleteChild(item.id)" 
            class="deleteChildBtn btn">
              Удалить
            </button>
            
        </div>

        <nuxt-link
        v-show="this.parentName && this.parentAge"
        to='/preview'>
            <button 
            @click="addAllInfo"
            class="btnSave">
              Сохранить
            </button>
        </nuxt-link>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentName: '',
      parentAge: '',
      childName: '',
      childAge: '',
      visibleChildData: false,
      errors: [],
      childs: [],
      parents: []
      
    }
  },
  
  methods: {
    
    addChildInState() {
        if( this.childName && this.childAge) {
          let child = {
              name: this.childName,
              age: this.childAge,
              id: Date.now()
          }
          this.childs.push(child)
          this.$store.commit('info/addChild',child)
          this.childName =''
          this.childAge =''
      }
    },

    addParentInState() {
        if( this.parentName && this.parentAge) {
          let newParent = {
          name: this.parentName,
          age: this.parentAge,
          id: Date.now()
          }

          this.parents.push(newParent)
          this.$store.commit('info/addParent',newParent)
      }
    },

    addAllInfo(){
       if( this.parentAge && this.parentName){
         let card = {}
         card.childs = this.childs
         card.parents = this.parents
         this.$store.commit('info/addCard',card)
         this.$store.commit('info/visiblePreview')
      }
    },

    deleteChild(id) {
        console.log(id);
        this.$store.commit('info/deleteChild',id)
        this.childs = this.childs.filter(i =>i.id !== id)
    },
  },

  computed: {
    allChilds() {
      return this.$store.getters['info/allChilds']
    },

    allParents() {
      return this.$store.getters['info/allParents']
    },

     allCards() {
      return this.$store.getters['info/allCards']
    },
  }
}
</script>


<style lang="scss" scoped>
.wrapper{
  margin: 0 auto;
  max-width: 1366px;
}

.container{
  max-width: 616px;
  margin: 0 auto;
  .personalData{
     & >h1{
    margin: 30px 0 20px;
    }
    margin-bottom: 43px;
  }

  .addChildData{
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    justify-content: space-between;
  }

  .childrenData{
    & >h1{
    margin: 20px 0 20px;
    }
  }

  .childList {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.input{
  margin-bottom: 10px;
  height: 56px;
  padding: 8px 16px ;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
}

.border{
  background: #FFFFFF;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
}

.childrenData{
  .addChildBtn{
    margin-top: 20px;
  }
}

.btn {
  background-color: #fff;
  color: #01A7FD;
  width: 204px;
  height: 44px;
  border: 2px solid #01A7FD;
  box-sizing: border-box;
  border-radius: 100px;
}

.openChildBtn {
  &::before{
    content: '+'
  }
}

.btnSave{
  background-color: #01A7FD;
  color: #fff;
  width: 118px;
  height: 44px;
  margin-top: 30px;
  margin-bottom: 50px;
  border-radius: 100px;
}

.childInfo {
  width: 260px;
  height: 56px;
  margin-right: 18px;
  padding: 8px 18px ;
  >h2{
    margin-bottom: 7px;
  }
}

h2{
  margin-bottom: 5px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
}
</style>