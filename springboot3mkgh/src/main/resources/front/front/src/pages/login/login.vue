<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230109/cc084b475fe046298dc937f1cc43f1a3.jpg) no-repeat center top / 100% 100%","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"border":"1px solid #ddd","padding":"50px 40px","margin":"0","borderRadius":"20px","flexWrap":"wrap","background":"rgba(255,255,255,.9)","display":"flex","width":"800px","position":"relative","justifyContent":"flex-end","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 0 10px","color":"#aa844c","textAlign":"center","width":"66%","lineHeight":"44px","fontSize":"20px","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)"}'>基于疫情防控管理系统的数据可视化分析与实现登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"66%","margin":"0 0 10px"}' prop="username">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>账号：</div>
				<input :style='{"padding":"0 10px","boxShadow":"inset 0px 0px 0px 0px #c5f1c0","borderColor":"#eee","color":"#333","outlineOffset":"4px","borderWidth":"0 0 2px","width":"100%","fontSize":"14px","borderStyle":"solid ","height":"44px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"66%","margin":"0 0 10px"}' prop="password">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<input :style='{"padding":"0 10px","boxShadow":"inset 0px 0px 0px 0px #c5f1c0","borderColor":"#eee","color":"#333","outlineOffset":"4px","borderWidth":"0 0 2px","width":"100%","fontSize":"14px","borderStyle":"solid ","height":"44px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"62%","margin":"20px 0 10px"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"width":"66%","margin":"0"}'>
				<el-button v-if="loginType==1" :style='{"cursor":"pointer","padding":"0px 10px","margin":"0px auto 0","outline":"none","borderColor":"#aa844c","color":"#aa844c","background":"none","borderWidth":"0 0 4px","width":"100%","fontSize":"18px","borderStyle":"solid","height":"44px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(64, 158, 255, 1)","display":"none","width":"auto","fontSize":"14px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
                <el-upload v-if="loginType==2" :action="baseUrl + 'file/upload'" :show-file-list="false" :on-success="faceLogin">
                    <el-button :style='{"cursor":"pointer","padding":"0px 10px","margin":"0px auto 0","outline":"none","borderColor":"#aa844c","color":"#aa844c","background":"none","borderWidth":"0 0 4px","width":"100%","fontSize":"18px","borderStyle":"solid","height":"44px"}'>人脸识别登录</el-button>
                </el-upload>
			</el-form-item>
			<div :style='{"margin":"0 40px 0 0","top":"104px","flexWrap":"wrap","left":"0","display":"flex","width":"30%","position":"absolute","justifyContent":"center","height":"70%"}'>
			<router-link :style='{"cursor":"pointer","padding":"0 10px","margin":"0 0 10px 0","borderColor":"#eee","color":"#333","textAlign":"center","textDecoration":"none","minWidth":"55%","background":"#fff","borderWidth":"0px 0 2px","width":"auto","fontSize":"16px","lineHeight":"36px","borderStyle":"solid","height":"36px"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>

export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"防疫人员","menuJump":"列表","tableName":"fangyirenyuan"}],"menu":"防疫人员管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","爬取数据"],"menu":"全国实时数据","menuJump":"列表","tableName":"qgsssj"}],"menu":"全国实时数据管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","爬取数据"],"menu":"国内实时动态","menuJump":"列表","tableName":"gnssdt"}],"menu":"国内实时动态管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"核酸检测点","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除","审核"],"menu":"核酸检测预约","menuJump":"列表","tableName":"hesuanjianceyuyue"}],"menu":"核酸检测预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"核酸结果","menuJump":"列表","tableName":"hesuanjieguo"}],"menu":"核酸结果管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"系统留言","tableName":"messages"}],"menu":"系统留言"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"疫情资讯","tableName":"news"},{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","预约检测"],"menu":"核酸检测点列表","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"全国实时数据","menuJump":"列表","tableName":"qgsssj"}],"menu":"全国实时数据管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"国内实时动态","menuJump":"列表","tableName":"gnssdt"}],"menu":"国内实时动态管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","支付"],"menu":"核酸检测预约","menuJump":"列表","tableName":"hesuanjianceyuyue"}],"menu":"核酸检测预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"核酸结果","menuJump":"列表","tableName":"hesuanjieguo"}],"menu":"核酸结果管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","预约检测"],"menu":"核酸检测点列表","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"全国实时数据","menuJump":"列表","tableName":"qgsssj"}],"menu":"全国实时数据管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"国内实时动态","menuJump":"列表","tableName":"gnssdt"}],"menu":"国内实时动态管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","核酸结果"],"menu":"核酸检测预约","menuJump":"列表","tableName":"hesuanjianceyuyue"}],"menu":"核酸检测预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"核酸结果","menuJump":"列表","tableName":"hesuanjieguo"}],"menu":"核酸结果管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","预约检测"],"menu":"核酸检测点列表","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"防疫人员","tableName":"fangyirenyuan"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230109/cc084b475fe046298dc937f1cc43f1a3.jpg) no-repeat center top / 100% 100%;
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			padding: 0 10px;
			box-shadow: inset 0px 0px 0px 0px #c5f1c0;
			color: #333;
			width: 100%;
			font-size: 14px;
			border-color: #eee;
			outline-offset: 4px;
			border-width: 0 0 2px;
			border-style: solid ;
			height: 44px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			padding: 0 10px;
			outline: none;
			color: #333;
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 110px);
			font-size: 14px;
			border-color: #eee;
			border-width: 0 0 2px;
			border-style: solid;
			height: 44px;
		}
		
		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #666666;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: #cca162;
			border-color: #cca162;
		}
		.list-type /deep/ .el-radio__label {
			color: #666666;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #cca162;
			font-size: 14px;
		}
	}
</style>
