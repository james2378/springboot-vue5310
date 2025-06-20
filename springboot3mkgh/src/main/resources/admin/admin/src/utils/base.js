const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot3mkgh/",
            name: "springboot3mkgh",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot3mkgh/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于疫情防控管理系统的数据可视化分析与实现"
        } 
    }
}
export default base
