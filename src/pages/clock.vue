<template>
    <div>
        <br>
        <div style="margin-left:1em">
          <a>将电子校园卡二维码信息置于方框之内</a><br>
          <a>听到 “滴” 的一声即打卡成功</a>
        </div>
        <div class="imgBlock">
            <div class="horn">
                <img src="/demo/static/1.png" alt="" style="z-index:99;position:absolute;width:14rem;height:14rem;margin:.5rem .5rem .5rem .5rem">
                <div class="lt"></div>
                <div class="rt"></div>
                <div class="rb"></div>
                <div class="lb"></div>
            </div>
        </div>
        <div class="center">
            <div style="margin-left:1rem;">总人数 40</div>
            <div style="margin-left:2rem">已打卡 35</div>
        </div>
        
        <div class="studentInfo">
            <div class="item">
              <div style="text-align:center;font-size:1.5rem">11:30:41</div>
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=241645350,1567395892&fm=26&gp=0.jpg">
                <div class="item-header">
                  <a style="font-size:1em;margin-top:-.5em;">张三S</a>
                  <p style="color:#d7d1c9;margin-top:.5em">学号: 1704091016</p>
                  <p style="color:#d7d1c9;margin-top: -.5em;">班级: </p>
                </div>
            </div>
        </div>

        <div class="clock">
          <svg t="1570244083372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="876" width="24" height="24"><path d="M512 981.333333c259.2 0 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333zM128 512a384 384 0 1 1 768 0 384 384 0 0 1-768 0z" p-id="877" fill="#d81e06"></path><path d="M554.666667 256a42.666667 42.666667 0 0 0-85.333334 0v256a42.666667 42.666667 0 0 0 23.594667 38.144l170.666667 85.333333a42.666667 42.666667 0 0 0 38.144-76.288L554.666667 485.632V256z" p-id="878" fill="#d81e06"></path></svg>
          打卡记录
          <div>
            <div class="items">
              <a>张三S</a> <a style="margin-left:.5em">(1704091016)</a> <a style="margin-left:.5em">2019-10-5 11:20:12</a>
            </div>
             <div class="items">
              <a>张三S</a> <a style="margin-left:.5em">(1704091016)</a> <a style="margin-left:.5em">2019-10-5 11:20:12</a>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
   .imgBlock{
       width: 17rem;
       height: 17rem;
       background-color:#f6f6f6;
       margin: auto;
       margin-top: 1rem;
       /* position: relative; */
   }

    .studentInfo{
        border-radius:5px;
        width: 100%;
        height: 5rem;
        margin-top: 2rem;
        margin: 0 auto;
    }

    .studentInfo  .item{
        border-radius:15px;
        /* background-color: aliceblue; */
        border-style:solid;
        border-width:.2em;
        border-color:aliceblue;
        width: 95%;
        height:8em;
        margin: 0 auto;
        float: left;
        margin-bottom: 1em
    }

    .studentInfo  .item img{
        width: 4em;
        height: 4em;
        margin-left:.8em;
        margin-top:.5em;
    }

    .studentInfo  .item .item-header{
        position: relative;
        width: 15em;
        height: 4em;
        top: -4.5em;;
        left: 5.5em;
    }

    .clock{
      width: 95%;
      margin: 0 auto;
    }

    .clock .items{
      margin-top: 1em;
      font-size: .7em
    }

    .icon{
      position: relative;
      top: 0.3em
    }

   .horn{
        position: absolute;
        width: 15rem;
        height: 15rem;
        border:1px solid #00d3e7;
        margin: 1rem 1rem 1rem 1rem
      }
      .horn>div{
        width: 10px;
        height: 10px;
        position:absolute;
      }
      .horn .lt{
        border-top: 3px solid #00d3e7;
        border-left: 3px solid #00d3e7;
        left: -2px;
        top: -2px;
      }
      .horn .rt{
        border-top: 3px solid #00d3e7;
        border-right: 3px solid #00d3e7;
        right: -2px;
        top: -2px;
      }
      .horn .rb{
        border-bottom:3px solid #00d3e7;
        border-right: 3px solid #00d3e7;
        right: -2px;
        bottom: -2px;
      }
      .horn .lb{
        border-bottom:3px solid #00d3e7;
        border-left: 3px solid #00d3e7;
        left: -2px;
        bottom: -2px;
      }

    .center{
        margin-top: 1rem;
        width: 100%;
        height: 3rem;
    }
      
    .center div{
        float: left;
        width:40%;
        height:2rem;
        border-radius:5px;
        background-color:#5edfff;
        text-align: center;
        line-height:2rem
    }



</style>
