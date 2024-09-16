const base = {
    get() {
        return {
            url : "http://localhost:8080/cantingdiancai/",
            name: "cantingdiancai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cantingdiancai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "餐饮管理系统"
        } 
    }
}
export default base
