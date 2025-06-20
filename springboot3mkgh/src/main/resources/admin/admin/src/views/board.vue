<template>
<div class="content box5" :style='{"minHeight":"100vh","flexWrap":"wrap","backgroundImage":"url(http://codegen.caihongy.cn/20221101/2f96339ef57b472f85e3c65d0cdf8a22.jpg)","display":"flex","width":"100%","backgroundSize":"100% 100%","position":"relative","height":"auto"}'>
	<!-- 标题 -->
	<div :style='{"margin":"0 0 20px 0","color":"#fff","textAlign":"center","background":"rgba(255,255,255,.1)","width":"100%","lineHeight":"64px","fontSize":"28px","height":"64px"}'>欢迎使用 {{this.$project.projectName}}</div>
	<!-- 时间 -->
	<div :style='{"top":"0","color":"#666","display":"inline-block","lineHeight":"64px","fontSize":"16px","position":"absolute","right":"20px","height":"64px"}' class="times">{{ dates }}</div>
	<!-- 系统简介 -->
	<div :style='{"border":"1px solid #ddd","padding":"20px","margin":"0 1% 20px 1%","flexWrap":"wrap","flexDirection":"column","background":"rgba(255,255,255,.1)","display":"flex","width":"38%","height":"600px","order":"3"}'>
		<el-carousel :style='{"width":"100%","margin":"0 auto 10px","height":"400px"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="400px" autoplay="false" interval="3000" loop="true">
			<el-carousel-item :style='{"borderRadius":"10px","width":"100%","height":"400px"}'>
				<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-if="systemIntroductionDetail.picture1" :src="$base.url+ systemIntroductionDetail.picture1" fit="cover"></el-image>
				<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-if="systemIntroductionDetail.picture2" :src="$base.url+ systemIntroductionDetail.picture2" fit="cover"></el-image>
				<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-if="systemIntroductionDetail.picture3" :src="$base.url+ systemIntroductionDetail.picture3" fit="cover"></el-image>
			</el-carousel-item>
		</el-carousel>
		<div :style='{"lineHeight":"1.5","fontSize":"16px","overflow":"hidden","color":"#fff","flex":1,"height":"200px"}' v-html="systemIntroductionDetail.content"></div>
	</div>
	<!-- 统计 -->
	<div :style='{"alignContent":"space-around","border":"1px solid #ddd","padding":"20px","margin":"0 1% 20px 1%","flexWrap":"wrap","background":"rgba(255,255,255,.1)","display":"flex","width":"26%","height":"400px","order":"5"}'>
<!-- 1 -->

		<div :style='{"width":"100%","alignItems":"center","background":"rgba(255,255,255,.1)","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"32px","borderRadius":"50%","background":"red","height":"32px"}'></div>
			<div :style='{"padding":"0 20px","alignItems":"center","flex":"1","justifyContent":"space-between","display":"flex"}'>
				<div :style='{"lineHeight":"32px","fontSize":"16px","color":"#fff","height":"32px"}'>用户总数</div>
				<div :style='{"lineHeight":"32px","fontSize":"20px","color":"#fff","fontWeight":"bold","height":"32px"}'>{{yonghuCount}}</div>
			</div>
		</div>

<!-- 2 -->

		<div :style='{"width":"100%","alignItems":"center","background":"rgba(255,255,255,.2)","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"32px","borderRadius":"50%","background":"yellow","height":"32px"}'></div>
			<div :style='{"padding":"0 20px","alignItems":"center","flex":"1","justifyContent":"space-between","display":"flex"}'>
				<div :style='{"lineHeight":"32px","fontSize":"16px","color":"#fff","height":"32px"}'>防疫人员总数</div>
				<div :style='{"lineHeight":"32px","fontSize":"20px","color":"#fff","fontWeight":"bold","height":"32px"}'>{{fangyirenyuanCount}}</div>
			</div>
		</div>

<!-- 3 -->

		<div :style='{"width":"100%","alignItems":"center","background":"rgba(255,255,255,.1)","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"32px","borderRadius":"50%","background":"red","height":"32px"}'></div>
			<div :style='{"padding":"0 20px","alignItems":"center","flex":"1","justifyContent":"space-between","display":"flex"}'>
				<div :style='{"lineHeight":"32px","fontSize":"16px","color":"#fff","height":"32px"}'>核酸检测点总数</div>
				<div :style='{"lineHeight":"32px","fontSize":"20px","color":"#fff","fontWeight":"bold","height":"32px"}'>{{hesuanjiancedianCount}}</div>
			</div>
		</div>

<!-- 4 -->

		<div :style='{"width":"100%","alignItems":"center","background":"rgba(255,255,255,.2)","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"32px","borderRadius":"50%","background":"yellow","height":"32px"}'></div>
			<div :style='{"padding":"0 20px","alignItems":"center","flex":"1","justifyContent":"space-between","display":"flex"}'>
				<div :style='{"lineHeight":"32px","fontSize":"16px","color":"#fff","height":"32px"}'>核酸检测预约总数</div>
				<div :style='{"lineHeight":"32px","fontSize":"20px","color":"#fff","fontWeight":"bold","height":"32px"}'>{{hesuanjianceyuyueCount}}</div>
			</div>
		</div>

	</div>
	
	<div class="echarts1">
		<div id="hesuanjianceyuyueChart1" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts2">
		<div id="hesuanjieguoChart2" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts3">
		<div id="gnssdtChart3" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts4">
		<div id="gnssdtChart4" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts5">
		<div id="gnssdtChart5" style="width:100%;height:100%;"></div>
	</div>

</div>


</template>
<script>
import * as echarts from 'echarts'
//4
//5
import router from '@/router/router-static'
export default {
	data() {
		return {
			line: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#ff0195","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"grid":{"left":"100","containLabel":true},"series":{"symbol":"emptyCircle","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"showSymbol":true,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"","shadowBlur":0,"width":2,"type":"solid","opacity":1,"shadowColor":"#000"},"symbolSize":4},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			bar: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":12,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#00ff00","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"rgb(255,255,255)","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"barWidth":"auto","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"colorBy":"data","barCategoryGap":"20%"},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			pie: {"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"},"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"inherit","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"label":{"borderType":"solid","rotate":0,"padding":0,"textBorderWidth":0,"backgroundColor":"transparent","borderColor":"#fff","color":"#fff","show":true,"textShadowColor":"transparent","distanceToLabelLine":5,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":12,"lineHeight":18,"textShadowOffsetX":0,"position":"outside","textShadowOffsetY":0,"textBorderType":"solid","textBorderColor":"#fff","textShadowBlur":0},"labelLine":{"show":true,"length":10,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"#000"},"length2":14,"smooth":false}}},
            systemIntroductionDetail: {},
			dates: '',
            yonghuCount: 0,
            fangyirenyuanCount: 0,
            hesuanjiancedianCount: 0,
            hesuanjianceyuyueCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getyonghuCount();
    this.getfangyirenyuanCount();
    this.gnssdtChat3();
    this.gnssdtChat4();
    this.gnssdtChat5();
    this.gethesuanjiancedianCount();
    this.gethesuanjianceyuyueCount();
    this.hesuanjianceyuyueChat1();
    this.hesuanjieguoChat2();
  },
  created() {
    this.$nextTick(()=>{
		this.times()
	})
  },
  methods:{
    getTimeStrToDay(game_over_timestamp) {
        if (game_over_timestamp == 0)
            return "";
        var date = new Date(parseInt(game_over_timestamp));
        var now = new Date();
        var hours = date.getHours() >= 10 ? date.getHours().toString() : "0" + date.getHours();
        var minutes = date.getMinutes() >= 10 ? date.getMinutes().toString() : "0" + date.getMinutes();
        var seconds = date.getSeconds() >= 10 ? date.getSeconds().toString() : "0" + date.getSeconds();
        let arr = ["日", "一", "二", "三", "四", "五", "六"];
        let d = arr[date.getDay()]
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + '日' + ' ' + ' ' + '星期' + d  + ' ' + "  " + hours + ":" + minutes + ":" + seconds
    },
	times() {
		setInterval(()=>{
            let date = new Date().getTime()
            this.dates = this.getTimeStrToDay(date)
		}, 1000)
	},
	filterTime(time) {
	  const date = new Date(time)
	  const Y = date.getFullYear()
	  const M = date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 
	  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	  
	  const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 小时
	  const I = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分钟
	  const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
	  
	  return `${Y}-${M}-${D} ${H}:${I}:${S}`
	},
    getSystemIntroduction() {
        this.$http({
            url: `systemintro/detail/1`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.systemIntroductionDetail = data.data
            }
        })
    },
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
        this.getSystemIntroduction();
    },
    getyonghuCount() {
        this.$http({
            url: `yonghu/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.yonghuCount = data.data
            }
        })
    },











    getfangyirenyuanCount() {
        this.$http({
            url: `fangyirenyuan/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.fangyirenyuanCount = data.data
            }
        })
    },























//统计接口1
    gnssdtChat3() {
      this.$nextTick(()=>{
        // diqu diqu
        //  quezhen

        var gnssdtChart3 = echarts.init(document.getElementById("gnssdtChart3"),'macarons');
        this.$http({
            url: `gnssdt/value/diqu/quezhen`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].diqu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].diqu
                    })
                }
                var option = {};
				let titleObj = this.line.title
				titleObj.text = '确诊人数统计'
				
				const legendObj = this.line.legend
				
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
					areaStyle: {},
					smooth: true
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
				
                option = {
					backgroundColor: this.line.backgroundColor,
					color: this.line.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                gnssdtChart3.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    gnssdtChart3.resize();
                };
            }
        });
      })
    },

//统计接口2
    gnssdtChat4() {
      this.$nextTick(()=>{
        // diqu diqu
        //  zhiyu

        var gnssdtChart4 = echarts.init(document.getElementById("gnssdtChart4"),'macarons');
        this.$http({
            url: `gnssdt/value/diqu/zhiyu`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].diqu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].diqu
                    })
                }
                var option = {};
                let titleObj = this.bar.title
				titleObj.text = '治愈人数统计'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
						data: yAxis,
						type: 'bar'
					}
				seriesObj = Object.assign(seriesObj , this.bar.series)

				option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
					},
					xAxis: xAxisObj,
					yAxis: yAxisObj,
					series: [seriesObj]
				};
                // 使用刚指定的配置项和数据显示图表。
                gnssdtChart4.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    gnssdtChart4.resize();
                };
            }
        });
      })
    },

//统计接口3
    gnssdtChat5() {
      this.$nextTick(()=>{
        // diqu diqu
        //  siwang

        var gnssdtChart5 = echarts.init(document.getElementById("gnssdtChart5"),'macarons');
        this.$http({
            url: `gnssdt/value/diqu/siwang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].diqu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].diqu
                    })
                }
                var option = {};
                let titleObj = this.line.title
				titleObj.text = '死亡人数统计'
				
				const legendObj = this.line.legend
				
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
					areaStyle: {}
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
				
				option = {
					backgroundColor: this.line.backgroundColor,
					color: this.line.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
					},
					xAxis: xAxisObj,
					yAxis: yAxisObj,
					series: [seriesObj]
				};
                // 使用刚指定的配置项和数据显示图表。
                gnssdtChart5.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    gnssdtChart5.resize();
                };
            }
        });
      })
    },








    gethesuanjiancedianCount() {
        this.$http({
            url: `hesuanjiancedian/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.hesuanjiancedianCount = data.data
            }
        })
    },











    gethesuanjianceyuyueCount() {
        this.$http({
            url: `hesuanjianceyuyue/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.hesuanjianceyuyueCount = data.data
            }
        })
    },

//统计接口1
    hesuanjianceyuyueChat1() {
      this.$nextTick(()=>{

        var hesuanjianceyuyueChart1 = echarts.init(document.getElementById("hesuanjianceyuyueChart1"),'macarons');
        this.$http({
            url: "hesuanjianceyuyue/group/yuyueshijian",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].yuyueshijian);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].yuyueshijian
                    })
                }
                var option = {};
				let titleObj = this.line.title
				titleObj.text = '核酸预约人数统计'
				
				const legendObj = this.line.legend
				
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
					smooth: true
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
				
                option = {
					backgroundColor: this.line.backgroundColor,
					color: this.line.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                hesuanjianceyuyueChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    hesuanjianceyuyueChart1.resize();
                };
            }
        });
      })
    },











//统计接口1
    hesuanjieguoChat2() {
      this.$nextTick(()=>{

        var hesuanjieguoChart2 = echarts.init(document.getElementById("hesuanjieguoChart2"),'macarons');
        this.$http({
            url: "hesuanjieguo/group/hesuanjieguo",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].hesuanjieguo);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].hesuanjieguo
                    })
                }
                var option = {};
				let titleObj = this.pie.title
				titleObj.text = '核酸统计'
				
				const legendObj = this.pie.legend
				
				let seriesObj = {
					type: 'pie',
					radius: ['25%', '55%'],
					center: ['50%', '60%'],
					data: pArray,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
				seriesObj = Object.assign(seriesObj , this.pie.series)
				
                option = {
					backgroundColor: this.pie.backgroundColor,
					color: this.pie.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c} ({d}%)'
					},
					series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                hesuanjieguoChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    hesuanjieguoChart2.resize();
                };
            }
        });
      })
    },






















































  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	
	.box5 .echarts1 {
				border: 1px solid #ddd;
				padding: 20px;
				margin: 0 1% 20px 1%;
				left: 38%;
				background: rgba(255,255,255,.1);
				width: 28%;
				transition: 0.3s;
				height: 600px;
				order: 1;
			}
	.box5 .echarts2 {
				border: 1px solid #ddd;
				padding: 20px;
				margin: 0 1% 20px 1%;
				background: rgba(255,255,255,.1);
				width: 28%;
				transition: 0.3s;
				height: 600px;
				order: 2;
			}
	.box5 .echarts3 {
				border: 1px solid #ddd;
				padding: 20px;
				margin: 0 1% 20px 1%;
				background: rgba(255,255,255,.1);
				width: 70%;
				transition: 0.3s;
				height: 400px;
				order: 4;
			}
	.box5 .echarts4 {
				border: 1px solid #ddd;
				padding: 20px;
				margin: 0 3% 20px 1%;
				background: rgba(255,255,255,.1);
				width: 46%;
				transition: 0.3s;
				height: 294px;
				order: 6;
			}
	.box5 .echarts5 {
				border: 1px solid #ddd;
				padding: 20px;
				margin: 0 1% 20px 3%;
				background: rgba(255,255,255,.1);
				width: 46%;
				transition: 0.3s;
				height: 294px;
				order: 7;
			}
	
	.box5 .echarts1:hover {
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 1%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				width: 28%;
				height: 600px;
			}
	.box5 .echarts2:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 1%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
				width: 28%;
				height: 600px;
			}
	.box5 .echarts3:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 1%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
				width: 70%;
				position: relative;
				height: 400px;
			}
	.box5 .echarts4:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 3% 20px 1%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
				width: 46%;
				position: relative;
				height: 294px;
			}
	.box5 .echarts5:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 3%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
				width: 46%;
				position: relative;
				height: 294px;
			}





</style>
