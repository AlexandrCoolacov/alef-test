<template>
    <div class="wrapper">
        <div class="logo">
            <img src="@/static/Logo.png" alt="">
        </div>

        <nav>
            <div class="form">
                <nuxt-link  to='/'>
                    <p>Форма</p>
                </nuxt-link>
            </div>
    
            <div class="prev">
                <nuxt-link  to='/preview'>
                    <p>Превью</p>
                </nuxt-link>
            </div>
        </nav>
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
    }
}
</script>


<style lang="scss" scoped>
.wrapper{
    position: relative;
    margin: 0 auto;
    max-width: 1366px;
    height: 76px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #F1F1F1;
    &> div{
            margin-right: 15px;
    }
    nav {
        display: flex;
        flex-direction: row;
            &> div{
                margin-right: 15px;
            }
    }
}

.logo{
    position: absolute;
    left: 92px;
}

p{
    color: rgba(17, 17, 17, 0.48);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
}
</style>