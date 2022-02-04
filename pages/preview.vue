<template>
    <div
    v-show="visiblePreview" 
    class="fullInfo">
        <div class="infoAboutParents">
            <h1>Персональные данные</h1>

            <div
            v-for="parent in allParents"
            :key="parent.id"
            >
                <span>{{parent.name}}, {{parent.age}} лет</span>
            </div>
        </div>

        <div class="infoAboutChilds"> 
            <h1>Дети</h1> 

            <div class="children"
            v-for="child in allChilds"
            :key="child.id"
            >
                <span>{{child.name}}, {{child.age}} лет</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        allChilds() {
        return this.$store.getters['info/allChilds']
        },

        allParents() {
        return this.$store.getters['info/allParents']
        },

        visiblePreview() {
        return this.$store.getters['info/visiblePreview']
        },

        
    }
}
</script>


<style lang="scss" scoped>
.fullInfo{
    max-width: 616px;
    margin: 0 auto;
}

.infoAboutChilds{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;

    .children{
        display: inline-block;
        padding: 10px 20px;
        height: 44px;
        margin-bottom: 20px;
        background: #F1F1F1;
        border-radius: 5px;
    }
}

h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
}

span{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
}



</style>