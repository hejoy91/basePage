
$(document).ready(function(){
	console.info("this is a vue demo!");
	
	Vue.component("yytitle",{template:"<div><label>YCYG</label><input type='text' /></div>"});
	Vue.component("child",{props: ['childmsg'],template: "<button>{{childmsg}}</button>"});
	Vue.component("button-counter",{
		data: function(){
			return {count: 0}
		},
		methods:{
			incrementHandler: function(){
				this.count +=1;
				this.$emit("increment");
			}
		},
		template: "<button v-on:click='incrementHandler'>你点击了{{count}}次</button>",
	});
	var app = new Vue({
		el: "#app",
		data: {
			message: "welcome to Vue.",
			htitle: "<h1>content</h1>",
			use: false,
			seen: true,
			ary: ["tom","jerry","lucy","polly","jim"],
			obj: {name: "tom",url: "www.tom.com"},
			count: 1,
			countMsg: "",
			keyMsg123: "",
			parentMsg: "parentMsg",
			totalCount: 0,
		},
		methods:{
			ckClick: function(){
				this.use = !this.use;
			},
			ckClick_vf: function(){
				this.seen = !this.seen;
			},
			ctrlc: function(){
				this.keyMsg123 = "你按下了ctrl+c";
				console.log(keyMsg123);
			},
			incrementTotal: function(){
				this.totalCount +=1;
			}
		},
		filters:{
			uppercase: function(v){
				return v.toUpperCase();
			}
		},
		watch:{
			count: function(nv,ov){
				app.countMsg = "变量count从"+ ov +"变为"+ nv;
			}
		}
	});
	
	
	
});