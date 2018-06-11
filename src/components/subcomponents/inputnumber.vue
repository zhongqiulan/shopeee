<template>
    <div>
        <div class="left" @click="subtract">-</div>
        <div class="center">{{count}}</div>
        <div class="right" @click="add">+</div>
    </div>
</template>

<style scoped>
    .left,.center,.right{
        display: inline-block;
        width:30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #ccc;
    }
</style>

<script>
    export default {
        props:['goodsId','goodsNumber'],
        data(){
            return {
                count:1
            }
        },
        created(){
            this.count = this.goodsNumber
        },
        methods:{
            subtract(){
                if(this.count==1) return

                this.count--

                this.notify()
            },
            add(){
                this.count++

                 this.notify()
            },
            notify(){
                //触发自定义的事件，并且传递载荷
                const goods = {
                    goodsId:this.goodsId,
                    goodsNumber:this.count
                }

                this.$emit('numberChange',goods)
            }
        }
    }
</script>