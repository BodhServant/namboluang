//var allGalData;
//
//$.ajax({
//                    url : localStorage.getItem('ipService')+'api/gallery/1',
//                    type : 'GET',
//                    dataType : 'json',
//                    async: false,
//                    success : function(data) {
//                        
//                        allGalData = data;
//                      
////                        
//                    }
//                });
//






function picTemplate(picture) {
    
    return `
      <div class="column"  style="margin-bottom:10px;">
     <a class="fancybox" href="${picture.url}" data-fancybox="images" data-caption="${picture.name}">
        <img src="${picture.demoUrl}" />
      </a>

    </div>
`;
    
    
}



document.getElementById("gallery-divided").innerHTML = `
${allGalData.map(picTemplate).join("")}
`;