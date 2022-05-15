<template>
    <div class="wrapper" ref="aaaa">
            <ul class="content">
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>

                <li>lieiboa</li>
                <li>lieiboa</li>
                <li>lieiboa</li>
            </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: "Category",
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(document.querySelector('.wrapper'), {
          probeType:3,
          pullUpLoad:true
        })

        this.scroll.on('scroll', (position) => {
          console.log(position);
        })
         this.scroll.on('pullingUp', () =>{
        console.log("上拉加载更多");
        // 发送网络请求，请求更多页的数据

  
        
    })
    }
};
</script>
<style scoped>
.wrapper {
    height: 150px;
    background-color: aqua;

    overflow: hidden;
    /* overflow-y: scroll; */
}
</style>
