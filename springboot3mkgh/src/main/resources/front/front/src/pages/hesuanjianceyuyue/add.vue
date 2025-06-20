<template>
<div :style='{"width":"1200px","padding":"120px 7% 100px","margin":"0px auto","position":"relative","background":"url(http://codegen.caihongy.cn/20230109/138a4d606eae4a168810cef229969885.png) no-repeat center top,url(http://codegen.caihongy.cn/20230109/b95aeae1c1294f398aefb7c6cd5b16de.png) no-repeat center top,url(http://codegen.caihongy.cn/20230109/5ffc803e6682418eb7f0b09a98e35527.png) no-repeat center bottom,#faf0e6"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="110px"
    >
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="预约编号" prop="yuyuebianhao">
              <el-input v-model="ruleForm.yuyuebianhao" placeholder="预约编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="检测点名称" prop="jiancedianmingcheng">
            <el-input v-model="ruleForm.jiancedianmingcheng" 
                placeholder="检测点名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="检测点位置" prop="jiancedianweizhi">
            <el-input v-model="ruleForm.jiancedianweizhi" 
                placeholder="检测点位置" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="检测费用" prop="jiancefeiyong">
            <el-input v-model="ruleForm.jiancefeiyong" 
                placeholder="检测费用" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="负责人" prop="fuzeren">
            <el-input v-model="ruleForm.fuzeren" 
                placeholder="负责人" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="联系方式" prop="lianxifangshi">
            <el-input v-model="ruleForm.lianxifangshi" 
                placeholder="联系方式" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="用户手机" prop="yonghushouji">
            <el-input v-model="ruleForm.yonghushouji" 
                placeholder="用户手机" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="预约时间" prop="yuyueshijian" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.yuyueshijian" 
                  type="date"
                  placeholder="预约时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="备注" prop="beizhu">
            <el-input v-model="ruleForm.beizhu" 
                placeholder="备注" clearable ></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","textAlign":"center","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#cca162","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#009688","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            yuyuebianhao : false,
            jiancedianmingcheng : false,
            jiancedianweizhi : false,
            jiancefeiyong : false,
            fuzeren : false,
            lianxifangshi : false,
            yonghuzhanghao : false,
            yonghuxingming : false,
            yonghushouji : false,
            yuyueshijian : false,
            beizhu : false,
            sfsh : false,
            shhf : false,
            ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yuyuebianhao: this.getUUID(),
          jiancedianmingcheng: '',
          jiancedianweizhi: '',
          jiancefeiyong: '',
          fuzeren: '',
          lianxifangshi: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          yonghushouji: '',
          yuyueshijian: '',
          beizhu: '',
          ispay: '',
        },
        rules: {
          yuyuebianhao: [
          ],
          jiancedianmingcheng: [
          ],
          jiancedianweizhi: [
          ],
          jiancefeiyong: [
          ],
          fuzeren: [
          ],
          lianxifangshi: [
          ],
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          yonghushouji: [
          ],
          yuyueshijian: [
          ],
          beizhu: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
          ispay: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='yuyuebianhao'){
              this.ruleForm.yuyuebianhao = obj[o];
              this.ro.yuyuebianhao = true;
              continue;
            }
            if(o=='jiancedianmingcheng'){
              this.ruleForm.jiancedianmingcheng = obj[o];
              this.ro.jiancedianmingcheng = true;
              continue;
            }
            if(o=='jiancedianweizhi'){
              this.ruleForm.jiancedianweizhi = obj[o];
              this.ro.jiancedianweizhi = true;
              continue;
            }
            if(o=='jiancefeiyong'){
              this.ruleForm.jiancefeiyong = obj[o];
              this.ro.jiancefeiyong = true;
              continue;
            }
            if(o=='fuzeren'){
              this.ruleForm.fuzeren = obj[o];
              this.ro.fuzeren = true;
              continue;
            }
            if(o=='lianxifangshi'){
              this.ruleForm.lianxifangshi = obj[o];
              this.ro.lianxifangshi = true;
              continue;
            }
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              this.ro.yonghuzhanghao = true;
              continue;
            }
            if(o=='yonghuxingming'){
              this.ruleForm.yonghuxingming = obj[o];
              this.ro.yonghuxingming = true;
              continue;
            }
            if(o=='yonghushouji'){
              this.ruleForm.yonghushouji = obj[o];
              this.ro.yonghushouji = true;
              continue;
            }
            if(o=='yuyueshijian'){
              this.ruleForm.yuyueshijian = obj[o];
              this.ro.yuyueshijian = true;
              continue;
            }
            if(o=='beizhu'){
              this.ruleForm.beizhu = obj[o];
              this.ro.beizhu = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if(json.yonghuzhanghao!=''&&json.yonghuzhanghao){
                this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
            }
            if(json.yonghuxingming!=''&&json.yonghuxingming){
                this.ruleForm.yonghuxingming = json.yonghuxingming
            }
            if(json.yonghushouji!=''&&json.yonghushouji){
                this.ruleForm.yonghushouji = json.yonghushouji
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('hesuanjianceyuyue/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('hesuanjianceyuyue/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('hesuanjianceyuyue/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('hesuanjianceyuyue/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 110px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 110px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #e5d9c6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #e5d9c6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #e5d9c6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
