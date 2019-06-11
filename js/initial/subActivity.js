var contentData;

$.ajax({
                    url : localStorage.getItem('ipService')+'api/content/'+act_id,
                    type : 'GET',
                    dataType : 'json',
                    async: false,
                    success : function(data) {
                        
                        contentData = data;
                       
//                        
                    }
                });






function contentTemplate(content) {
    
    if(content.picture)
        for (var i = 0; i <= 6 ; i++) {

            if(content.picture[i]!=null){
            appendHtml(picTemplate(content.picture[i]));
            }
            if(content.paragraph[i]!=null){
            appendHtml(paragraphTemplate(content.paragraph[i]));
            }
        }
       
}
    
    

    
    


function picTemplate(data){
    
    return `<div class="center img">
			<a href="${data}"><img  class="center" src="${data}" alt="Image" style="margin-bottom:10px;"></a>
		         </div>`;
    
}

function paragraphTemplate(data){
    
    return `<div id="contents">${data}</p></div>`;
    
}


function appendHtml(data){
    document.getElementById("activities-divided").innerHTML += data;
}
document.getElementById("topic").innerHTML = topic;
contentTemplate(contentData);
