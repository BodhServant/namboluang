 

//var top5ActData;
//var calendarData;
//var lastNewsData;
//
//$.ajax({
//                    url : localStorage.getItem('ipService')+'api/activity/top5/1',
//                    type : 'GET',
//                    dataType : 'json',
//                    async: false,
//                    success : function(data) {
//                        
//                        top5ActData = data;
//                       
////                        
//                    }
//                });
//
////calendar
//$.ajax({
//                    url : localStorage.getItem('ipService')+'api/calendar/1',
//                    type : 'GET',
//                    dataType : 'json',
//                    async: false,
//                    success : function(data) {
//                        
//                        calendarData = data;
//                        
////                        
//                    }
//                });
////น้ำบ่อหลวง id 1 news = 10001
//$.ajax({
//                    url : localStorage.getItem('ipService')+'api/activity/10001',
//                    type : 'GET',
//                    dataType : 'json',
//                    async: false,
//                    success : function(data) {
//                        
//                        lastNewsData = data;
//                       
////                        
//                    }
//                });


function siderActTemplate(activity){
    return `
        <div class="single_iteam"> <a href="subActivity.html?id=${activity.id}&topic=${activity.topic}"> <img src="${activity.image}" alt=""></a>
            <div class="slider_article">
              <h2><a class="slider_tittle" href="subActivity.html?id=${activity.id}&topic=${activity.topic}">${activity.topic}</a></h2>
              <p>${activity.description}</p>
              <p>วันที่ ${activity.date}</p>    
            </div>
          </div>
`;
}

function lastActTemplate(activity){
    return`
            <li>
                <div class="media"> <a href="subActivity.html?id=${activity.id}&topic=${activity.topic}" class="media-left"> <img alt="" src="${activity.image}"> </a>
                  <div class="media-body"> <a href="subActivity.html?id=${activity.id}&topic=${activity.topic}" class="catg_title"> ${activity.topic}<br>${activity.description}
                  วันที่ ${activity.date} </a> </div>
                    
                </div>
              </li>
`;
}


function lastNews(activity){
    return`
            <li><a href="${activity.image}"><img src="images/news_thumbnail3.jpg" alt="">${activity.description}</a></li>
            <li><a href="${activity.image}"><img src="images/news_thumbnail3.jpg" alt="">${activity.description}</a></li>
`;
}




document.getElementById("slider-divided").innerHTML = `
${top5ActData.map(siderActTemplate).join("")}
`;

document.getElementById("post-divided").innerHTML = `
${top5ActData.map(lastActTemplate).join("")}
`;

document.getElementById("ticker01").innerHTML = `
${lastNewsData.map(lastNews).join("")}
`;




  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
      defaultDate: '2019-09-01',
      editable: true,
      locale: 'th',    
      eventLimit: true, // allow "more" link when too many events
      events: calendarData
    });

    calendar.render();
  });




