<template>
    <div id="index">
        
        <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        :fixed='true'
        @click-left="onClickLeft"
        > 
        </van-nav-bar>


        
        <div class="selectList">
            <div>
                <font style="position:relative;left:0%;font-size:20px">俱乐部</font>

            </div>
            <div>
                <font style="position:absolute;left:0%;font-size:13px">请求选择俱乐部名称</font>
                <!-- <van-icon style="position:absolute;left:90%;" size=1.2em name="ellipsis" click=""/> -->
                <van-dropdown-menu style="width:50px;position:absolute;left:90%;">
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
        
        </div>
       <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <p>d</p>
        <!-- <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu> -->
    </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
      return {
        value1: 0,
        option1: [
            { text: '...', value: 0 },
            { text: '大合唱俱乐部', value: 1 },
            { text: '夜跑俱乐部', value: 2 }
        ]
      }
  },
  methods:{
    onClickLeft() {
      Toast('返回');
    }
  }
}
</script>

<style>
   
    #index /deep/ .van-nav-bar{
        background-color: aliceblue;
        height: 46px;
        line-height: 46px;
    }

    .selectList{
        width: 100%;
        height: 300px;
    }
</style>


