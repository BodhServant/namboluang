//var allActData;
//
//$.ajax({
//                    url : localStorage.getItem('ipService')+'api/activity/1',
//                    type : 'GET',
//                    dataType : 'json',
//                    async: false,
//                    success : function(data) {
//                        
//                        allActData = data;
//                       
//                    }
//                });



function tagUi(tag) {
  return `
<h4>ปักหมุด</h4>
<ul class="foods-list">
${tag.map(tag => `<div class="ui label">${tag}</div>`).join("")}
</ul>
`;
}



function actTemplate(activity) {
    
    return `
      <div class="item" style="float: right;">
        <div class="image">
          <img src="${activity.image}">
        </div>
        <div class="content">
          <a class="header">${activity.topic}</a>
          <div class="meta">
            <span class="cinema">วันที่ ${activity.date}</span>
          </div>
          <div class="description">
            <p>${activity.description}</p>
          </div>
          <div class="extra">
           <a href="subActivity.html?id=${activity.id}&topic=${activity.topic}"><div class="ui primary button" style="float: right;">อ่านเพิ่มเติม</div></a>
            ${activity.tag ? tagUi(activity.tag):""}           
          </div>
        </div>
      </div>
`;
    
    
}




document.getElementById("activities-divided").innerHTML = `
${allActData.map(actTemplate).join("")}
`;


    var limitPerPage = 6;
    var numberOfItems = $('#activities-divided .item').length;
    var totalPages = Math.round(numberOfItems / limitPerPage); 

    $('#pagination-activity').twbsPagination({
        totalPages: totalPages,
        visiblePages: 6,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            //fetch content and render here
            $("#activities-divided .item").hide();
            var grandTotal = limitPerPage * page;
            
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                  $("#activities-divided .item:eq(" + i + ")").show(); // Show items from the new page that was selected
                }
            scrollToTop()
        }
    });

//----------------------------------------------------------------------------------pagination section


function scrollIndex1(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#index1").offset().top-10
    }, 100);
}
function scrollToTop(){
    $("html, body").animate({ scrollTop: 0 }, 100);
}