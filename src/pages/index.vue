<template>
    <div class="index">
        <!-- <van-nav-bar
        title="打卡考勤"
        left-text="返回"
        left-arrow
        :fixed='true'
        @click-left="onClickLeft"
        > 
        </van-nav-bar> -->
        <div style="padding-top:2em">
        </div>
        <div class="selectList">
            <div>
                <svg t="1569397935557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2514" width="18" height="18"><path d="M798.992534 100.147133c98.986601 0 164.249491-10.035193 225.006783-45.943436v567.773488c-60.757293 35.839976-124.040451 60.689026-223.027051 60.689027-98.918334 0-135.57751-10.786126-196.130003-46.899169-60.484226-35.703443-126.088449-46.830902-224.938516-46.830902S197.154002 623.956917 136.533242 659.933427V71.133819C197.154002 35.089043 281.053679 0 379.903747 0s164.522557 11.195726 224.938516 46.899169c60.62076 35.703443 95.36847 53.247965 194.150271 53.247964zM34.133311 1023.999317a35.020777 35.020777 0 0 1-24.166384-9.557327 31.743979 31.743979 0 0 1-9.966927-22.937584V32.494912C0 14.54079 15.291723 0 34.133311 0s34.133311 14.54079 34.13331 32.494912v959.009494a31.743979 31.743979 0 0 1-9.966927 23.005851A35.020777 35.020777 0 0 1 34.133311 1023.999317z" fill="#D72F2F" p-id="2515"></path></svg>
                <font style="position:relative;left:0%;font-size:20px">俱乐部</font>
            </div>
            <div>
                <font style="position:relative;left:0%;font-size:13px">请求选择俱乐部名称</font>
                <van-dropdown-menu style="width:30px;position:relative;left:85%;top:-.9em">
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
        </div>
        <div style="margin-bottom:1em">
            <van-swipe>
                <van-swipe-item v-for="(item,i) in club1" :key="i">
                    <div class="clubCard" v-for="(it,k) in item" :key="k">
                        <img :src="it.imgurl"/>
                        <p style="">{{it.name}}</p>
                    </div>
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                </div>
            </van-swipe>
        </div>
        <div>
            <p>
                课程
                <svg t="1569398047113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7738" width="18" height="18"><path d="M 859.261 978.369 h -47.361 v -916.672 h 47.361 c 26.239 0 47.361 21.248 47.361 47.423 v 821.824 c 0 26.176 -21.121 47.423 -47.361 47.423 Z M 212.029 930.946 v -47.361 h 78.912 c 52.288 0 94.72 -42.495 94.72 -94.784 c 0 -52.353 -42.432 -94.783 -94.72 -94.784 h -78.912 v -79.168 h 78.912 c 52.288 0 94.72 -42.432 94.72 -94.784 s -42.432 -94.783 -94.72 -94.784 h -78.912 v -79.104 h 78.912 c 52.288 0 94.72 -42.432 94.72 -94.784 s -42.432 -94.783 -94.72 -94.784 h -78.912 v -47.489 c 0 -26.176 21.184 -47.425 47.361 -47.425 h 505.215 v 916.672 h -505.215 c -26.176 0 -47.361 -21.248 -47.361 -47.423 Z M 338.368 251.392 c 0 26.176 -21.248 47.425 -47.361 47.425 h -126.338 c -26.112 0 -47.296 -21.248 -47.296 -47.425 s 21.184 -47.423 47.296 -47.423 h 126.335 c 26.112 0 47.361 21.248 47.361 47.423 Z M 164.672 472.64 h 126.338 c 26.112 0 47.358 21.248 47.358 47.425 s -21.248 47.361 -47.358 47.361 h -126.338 c -26.112 0 -47.296 -21.184 -47.296 -47.361 s 21.184 -47.425 47.296 -47.425 Z M 164.672 741.313 h 126.338 c 26.112 0 47.358 21.248 47.358 47.425 s -21.248 47.361 -47.358 47.361 h -126.338 c -26.112 0 -47.296 -21.184 -47.296 -47.361 s 21.184 -47.425 47.296 -47.425 Z" fill="#1296db" p-id="7739"></path></svg>
            </p>
            <div class="inner" style="margin-left:0em;">
                <div class="classList" v-for="(it,k) in course" :key="k" @click="routeToCourse">
                   <p style="margin-top:0em;margin-left:1em">{{it.courseName}}  {{it.sort}}</p>
                   <p style="margin-top:-.2em;margin-left:1em">{{it.date}}   {{it.time}}</p>
                   <p v-show="it.status=='已上课'" style="color:#47e4bb;margin-top:-3em;margin-left:16em;">{{it.status}}</p>
                   <p v-show="it.status=='正在上课'" style="color:#fb9e91;margin-top:-3em;margin-left:15em;">{{it.status}}</p>
                   <p v-show="it.status=='已下课'" style="color:#170a19;margin-top:-3em;margin-left:16em;">{{it.status}}</p>
                </div>
            </div>
            
        </div>
                
            
    </div>
</template>
<script>
export default {
  name: 'Index',
  data(){
      return {
        value1: 0,
        option1: [
            { text: '大合唱俱乐部1', value: 0 },
            { text: '大合唱俱乐部2', value: 1 },
            { text: '夜跑俱乐部', value: 2 }
        ],
        club:[
            {imgurl:'https://img.yzcdn.cn/vant/apple-1.jpg',name:'大合唱俱乐部1'},
            {imgurl:'https://img.yzcdn.cn/vant/apple-2.jpg',name:'大合唱俱乐部2'},
            {imgurl:'https://img.yzcdn.cn/vant/apple-3.jpg',name:'夜跑俱乐部1'},
            {imgurl:'https://img.yzcdn.cn/vant/apple-1.jpg',name:'大合唱俱乐部3'},
            {imgurl:'https://img.yzcdn.cn/vant/apple-2.jpg',name:'大合唱俱乐部4'},
            {imgurl:'https://img.yzcdn.cn/vant/apple-3.jpg',name:'夜跑俱乐部2'}
        ],
        course:[
            {courseName:'足球',date:'周二',time:'8:00 - 10:00',status:'已下课',sort:'1-2节次'},
            {courseName:'足球',date:'周二',time:'8:00 - 10:00',status:'已上课',sort:'1-2节次'},
            {courseName:'足球',date:'周二',time:'8:00 - 10:00',status:'正在上课',sort:'1-2节次'},
            {courseName:'足球',date:'周二',time:'8:00 - 10:00',status:'已上课',sort:'1-2节次'},
            {courseName:'足球',date:'周二',time:'8:00 - 10:00',status:'已上课',sort:'1-2节次'}
        ],
        club1:[],
        club2:[]
      }
  },
  methods:{
    onClickLeft() {
    //   Toast('返回');
    },
    sort(){
        var temp = []
        var club = this.club
        for(var i=0;i<this.club.length;i+=3){
            temp.push([this.club[i],this.club[i+1],this.club[i+2]])
        }
        this.club1 = temp;
        // console.log(JSON.stringify(this.club1))
    },
    routeToCourse(){
        this.$router.push({name:'Course',params:{id:'1'}});
    }
  },
  mounted(){
      this.sort();
  }
}
</script>
<style> 
    
    .index{
        margin-left: 1em
    }
    .index /deep/ .van-nav-bar{
        background-color: #c7f0db;
        height: 60px;
        line-height: 60px;
        /* max-width: 30em; */
    }    
    
    .selectList /deep/ .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
        border-width: 0 0;
    }

    .selectList{
        height: 5em;
    }
    .clubCard img{
        height:100px;width:100px
    }
    .clubCard p{
        margin-top: .1em
    }
    .clubCard{
        float: left;
        margin-left: 1em
    }
    .icon{
        position: relative;
        top: 0.2em
    }
    .classList{
        width: 95%;
        height: 5em;
        border:.1em solid #E6E6FA;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom:.5em;
        /* border-image: -webkit-linear-gradient(#F80, #2ED) 20 20;
        border-image: -moz-linear-gradient(#F80, #2ED) 20 20;
        border-image: -o-linear-gradient(#F80, #2ED) 20 20;
        border-image: linear-gradient(#F80, #2ED) 20 20; */
       
    }
    
</style>