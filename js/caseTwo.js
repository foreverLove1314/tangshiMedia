var j=0;//循环的初始变量
var page=1;
$(function(){
	 $.ajax({
		type:"get",
		url:"../data/caseTwo.json",
		async:true,
		success:function(data){
			new Vue({
				el:"#app",
				data:{
					message:data.imgSrc.slice(j,j+8)
				},
				methods:{
					prevPage:function(){//上一页
							
							page--;
							if(page<1){
								page=1;
							}
							console.log(page)
							this.message=data.imgSrc.slice((page-1)*8,(page-1)*8+8)
					},
					nextPage:function(){//下一页
							
							page++;
							if(page>=$(".pageChange span").length){
								page=$(".pageChange span").length;
							}
							this.message=data.imgSrc.slice((page-1)*8,(page-1)*8+8)
					},
					numPage:function(event){//分页
						var num=event.target;//target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
						page=Number($(num).text());//当前页码
						this.message=data.imgSrc.slice((page-1)*8,(page-1)*8+8)
					}
				}
			})
		},
		error:function(data){
			console.log(111)
		}
	});
})

	

