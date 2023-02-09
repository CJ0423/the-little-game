
// //console.log(s)
// // dataset 用來取得放在上面並且開頭是data的
// //console.log(s.dataset.name)
// s.addEventListener("click",function(){
// // //console.log("台北")
// })
// 台灣出現控制
const mainleft=document.querySelector(".mainleft")
const mainright=document.querySelector(".mainright")
// 產生事件監聽器
const allArea = document.querySelector("#allArea")
const northArea = document.querySelector("#northArea")
const centerArea = document.querySelector("#centerArea")
const southArea = document.querySelector("#southArea")
const eastArea = document.querySelector("#eastArea")
const island = document.querySelector("#island")
const am_am=document.querySelector("#am_am")
const am_pm=document.querySelector("#am_pm")
const pm_am=document.querySelector("#pm_am")
const time=document.querySelector("#time")

var k=1;

am_am.addEventListener("click",function(){
time.innerHTML=`<b>預報時間為：本日00:00~本日06:00</b>`
allCards0.style="display:"
allCards1.style="display:none"
allCards2.style="display:none"

return k=0
})
am_pm.addEventListener("click",function(){
    time.innerHTML=`<b>預報時間為：本日06:00~本日18:00</b>`
allCards0.style="display:none"
allCards1.style="display:"
allCards2.style="display:none"

return k=1
})
pm_am.addEventListener("click",function(){
    time.innerHTML=`<b>預報時間為：本日18:00~隔日06:00</b>`
allCards0.style="display:none"
allCards1.style="display:none"
allCards2.style="display:"
return k=2
})

allArea.addEventListener("click",function(){
    mainleft.style="display:none";
    mainright.style="width:100%"
    for(i=0;i<=21;i++){

     document.querySelector(`#cleanArea0${i}`).style.display=""
     document.querySelector(`#cleanArea1${i}`).style.display=""
     document.querySelector(`#cleanArea2${i}`).style.display=""
    // document.querySelector(`#cleanArea${i}`)
    }
    })
northArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="width:50%"
    for(i=0;i<=21;i++){
        if(i<=5){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }
    // document.querySelector(`#cleanArea${i}`)
    }
    })
centerArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="width:50%"
    for(i=0;i<=21;i++){
        if(i>=6&&i<=9){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }    }
})
southArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="width:50%"
    for(i=0;i<=21;i++){
        if(i>=10&&i<=15){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }  }
    })
eastArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="width:50%"
    for(i=0;i<=21;i++){
        if(i>=16&&i<=18){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }    }
    })
island.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="width:50%"
    for(i=0;i<=21;i++){
        if(i>=19&&i<=21){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }   }
    })


// centerArea.addEventListener("click",function(){
//     //console.log(this);
//     })
// southArea.addEventListener("click",function(){
//     //console.log(this);
//     })
// eastArea.addEventListener("click",function(){
//     //console.log(this);
//     })
// island.addEventListener("click",function(){
//     //console.log(this);
//     })



// 產生卡片區域
// const locationArray=["嘉義縣","新北市","嘉義市","新竹縣","新竹市","臺北市","臺南市","宜蘭縣","苗栗縣","雲林縣","花蓮縣","臺中市","臺東縣","桃園市","南投縣","高雄市","金門縣","屏東縣","基隆市","澎湖縣","彰化縣","連江縣"]
const locationNum=[5,1,18,13,3,4,8,11,14,20,9,0,2,6,15,17,7,10,12,19,16,21]
//中部地區
const northArray=[1,3,4,5,13,18]
const centerArray=[8,11,14,20]
const southArray=[0,2,6,9,15,17]
const eastArray=[7,10,12]
const islandArray=[16,19,21]


// //console.log(locationArray[21])//確定位置


let allCards0=document.querySelector("#allCards0")
let allCards1=document.querySelector("#allCards1")
let allCards2=document.querySelector("#allCards2")

// 與api連線
fetch( "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
.then(function(response) {
return response.json();
})
.then(function(myJson) {

// // 以下為如何抓取資料的方法 接著我們嘗試去取得各種我們所需要的資料並且加以定義吧!
//console.log(myJson)//取得大致資料
// //console.log(myJson.records.location[11]) //取得地點
// //console.log(myJson.records.location[11].weatherElement[0])//取得天氣現象(wx)
// //console.log(myJson.records.location[11].weatherElement[0].time[j])//進入到早上六點到晚上六點時段
// //console.log(myJson.records.location[11].weatherElement[0].time[j].parameter)//進入到選擇天氣狀況或是天氣狀況代碼
// //console.log(myJson.records.location[11].weatherElement[0].time[j].parameter.parameterName)
//選擇天氣狀況名字
var startTime=myJson.records.location[11].weatherElement[0].time[1].startTime//取得開始時間
var endTime=myJson.records.location[11].weatherElement[0].time[1].endTime//取得結束時間

// var area=
// //console.log("庫"+myJson.records.location[12].weatherElement[3].time[j].parameter.parameterName)//取得舒適度
// 產生卡片
allCards2.innerHTML=""
   for(let j=0;j<=2;j++)
   { for(let i=0;i<=21;i++){
var city=myJson.records.location[locationNum[i]].locationName; //取得縣市名字
//console.log(city)
var weather=myJson.records.location[locationNum[i]].weatherElement[0].time[j].parameter.parameterName;
//console.log(weather)  //取得天氣狀況
var weatherValue=myJson.records.location[locationNum[i]].weatherElement[0].time[j].parameter.parameterValue//取得天氣狀況數值
var startTime=myJson.records.location[11].weatherElement[0].time[j].startTime//取得開始時間
var endTime=myJson.records.location[11].weatherElement[0].time[j].endTime//取得結束時間
if(weatherValue<=3){
    var img="cloud"
}
else if(weatherValue<=7){
    var img="cloud"
}
else{
    var img="rain"
}


var lowTempture=myJson.records.location[locationNum[i]].weatherElement[2].time[j].parameter.parameterName //取得最低溫度

//console.log(lowTempture)

var highTempture=myJson.records.location[locationNum[i]].weatherElement[4].time[j].parameter.parameterName//取得最高溫度
//console.log(highTempture)
 

var chance=`降雨機率:${myJson.records.location[locationNum[i]].weatherElement[1].time[j].parameter.parameterName}%`//降雨機率

var comfort=myJson.records.location[locationNum[i]].weatherElement[3].time[j].parameter.parameterName
if(j==0){
    allCards0.innerHTML+=`<b><div id="cleanArea${j}${i}" class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}</div></div></div><b>`
    allCards0.style="display:none"

}
else if(j==1){
allCards1.innerHTML+=`<b><div id="cleanArea${j}${i}" class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}</div></div></div><b>`
// allCards1.style="display:none"

}

else if(j==2){
    allCards2.innerHTML+=`<b><div id="cleanArea${j}${i}" class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}</div></div></div><b>`
    allCards2.style="display:none"

    console.log(document.getElementById(`cleanArea${j}${i}`))
   
}
 }
 
 
 }
 }
).then(function(){
    document.querySelector("#cleanArea00").addEventListener("mouseover",function(){
        changeColor[0].style="fill:orangered"
        document.querySelector("#cleanArea00").style="background:orangered"
    })
    document.querySelector("#cleanArea00").addEventListener("mouseout",function(){
        changeColor[0].style=""
        document.querySelector("#cleanArea00").style=""
    })
    document.querySelector("#cleanArea10").addEventListener("mouseover",function(){
        changeColor[0].style="fill:orangered"
        document.querySelector("#cleanArea10").style="background:orangered"
    })
    document.querySelector("#cleanArea10").addEventListener("mouseout",function(){
        changeColor[0].style=""
        document.querySelector("#cleanArea10").style=""
    })
    document.querySelector("#cleanArea20").addEventListener("mouseover",function(){
        changeColor[0].style="fill:orangered"
        document.querySelector("#cleanArea20").style="background:orangered"
    })
    document.querySelector("#cleanArea20").addEventListener("mouseout",function(){
        changeColor[0].style=""
        document.querySelector("#cleanArea20").style=""
    })
    document.querySelector("#cleanArea01").addEventListener("mouseover",function(){
        changeColor[1].style="fill:orangered"
        document.querySelector("#cleanArea01").style="background:orangered"})
    document.querySelector("#cleanArea01").addEventListener("mouseout",function(){
        changeColor[1].style=""
        document.querySelector("#cleanArea01").style=""})
        document.querySelector("#cleanArea11").addEventListener("mouseover",function(){
        changeColor[1].style="fill:orangered"
        document.querySelector("#cleanArea11").style="background:orangered"})
    document.querySelector("#cleanArea11").addEventListener("mouseout",function(){
        changeColor[1].style=""
        document.querySelector("#cleanArea11").style=""})
    document.querySelector("#cleanArea21").addEventListener("mouseover",function(){
        changeColor[1].style="fill:orangered"
        document.querySelector("#cleanArea21").style="background:orangered"})
    document.querySelector("#cleanArea21").addEventListener("mouseout",function(){
        changeColor[1].style=""
        document.querySelector("#cleanArea21").style=""})
    document.querySelector("#cleanArea02").addEventListener("mouseover",function(){
        changeColor[2].style="fill:orangered"
        document.querySelector("#cleanArea02").style="background:orangered"})
    document.querySelector("#cleanArea02").addEventListener("mouseout",function(){
        changeColor[2].style=""
        document.querySelector("#cleanArea02").style=""})
    document.querySelector("#cleanArea12").addEventListener("mouseover",function(){
        changeColor[2].style="fill:orangered"
        document.querySelector("#cleanArea12").style="background:orangered"})
    document.querySelector("#cleanArea12").addEventListener("mouseout",function(){
        changeColor[2].style=""
        document.querySelector("#cleanArea12").style=""})
    document.querySelector("#cleanArea22").addEventListener("mouseover",function(){
        changeColor[2].style="fill:orangered"
        document.querySelector("#cleanArea22").style="background:orangered"})
    document.querySelector("#cleanArea22").addEventListener("mouseout",function(){
        changeColor[2].style=""
        document.querySelector("#cleanArea22").style=""})
    document.querySelector("#cleanArea03").addEventListener("mouseover",function(){
        changeColor[3].style="fill:orangered"
        document.querySelector("#cleanArea03").style="background:orangered"})
    document.querySelector("#cleanArea03").addEventListener("mouseout",function(){
        changeColor[3].style=""
        document.querySelector("#cleanArea03").style=""})
    document.querySelector("#cleanArea13").addEventListener("mouseover",function(){
        changeColor[3].style="fill:orangered"
        document.querySelector("#cleanArea13").style="background:orangered"})
    document.querySelector("#cleanArea13").addEventListener("mouseout",function(){
        changeColor[3].style=""
        document.querySelector("#cleanArea13").style=""})
    document.querySelector("#cleanArea23").addEventListener("mouseover",function(){
        changeColor[3].style="fill:orangered"
        document.querySelector("#cleanArea23").style="background:orangered"})
    document.querySelector("#cleanArea23").addEventListener("mouseout",function(){
        changeColor[3].style=""
        document.querySelector("#cleanArea23").style=""})
    document.querySelector("#cleanArea04").addEventListener("mouseover",function(){
        changeColor[4].style="fill:orangered"
        document.querySelector("#cleanArea04").style="background:orangered"})
    document.querySelector("#cleanArea04").addEventListener("mouseout",function(){
        changeColor[4].style=""
        document.querySelector("#cleanArea04").style=""})
    document.querySelector("#cleanArea14").addEventListener("mouseover",function(){
        changeColor[4].style="fill:orangered"
        document.querySelector("#cleanArea14").style="background:orangered"})
    document.querySelector("#cleanArea14").addEventListener("mouseout",function(){
        changeColor[4].style=""
        document.querySelector("#cleanArea14").style=""})
    document.querySelector("#cleanArea24").addEventListener("mouseover",function(){
        changeColor[4].style="fill:orangered"
        document.querySelector("#cleanArea24").style="background:orangered"})
    document.querySelector("#cleanArea24").addEventListener("mouseout",function(){
        changeColor[4].style=""
        document.querySelector("#cleanArea24").style=""})
    document.querySelector("#cleanArea05").addEventListener("mouseover",function(){
        changeColor[5].style="fill:orangered"
        document.querySelector("#cleanArea05").style="background:orangered"})
    document.querySelector("#cleanArea05").addEventListener("mouseout",function(){
        changeColor[5].style=""
        document.querySelector("#cleanArea05").style=""})
    document.querySelector("#cleanArea15").addEventListener("mouseover",function(){
        changeColor[5].style="fill:orangered"
        document.querySelector("#cleanArea15").style="background:orangered"})
    document.querySelector("#cleanArea15").addEventListener("mouseout",function(){
        changeColor[5].style=""
        document.querySelector("#cleanArea15").style=""})
    document.querySelector("#cleanArea25").addEventListener("mouseover",function(){
        changeColor[5].style="fill:orangered"
        document.querySelector("#cleanArea25").style="background:orangered"})
    document.querySelector("#cleanArea25").addEventListener("mouseout",function(){
        changeColor[5].style=""
        document.querySelector("#cleanArea25").style=""})
    document.querySelector("#cleanArea06").addEventListener("mouseover",function(){
        changeColor[6].style="fill:orangered"
        document.querySelector("#cleanArea06").style="background:orangered"})
    document.querySelector("#cleanArea06").addEventListener("mouseout",function(){
        changeColor[6].style=""
        document.querySelector("#cleanArea06").style=""})
    document.querySelector("#cleanArea16").addEventListener("mouseover",function(){
        changeColor[6].style="fill:orangered"
        document.querySelector("#cleanArea16").style="background:orangered"})
    document.querySelector("#cleanArea16").addEventListener("mouseout",function(){
        changeColor[6].style=""
        document.querySelector("#cleanArea16").style=""})
    document.querySelector("#cleanArea26").addEventListener("mouseover",function(){
        changeColor[6].style="fill:orangered"
        document.querySelector("#cleanArea26").style="background:orangered"})
    document.querySelector("#cleanArea26").addEventListener("mouseout",function(){
        changeColor[6].style=""
        document.querySelector("#cleanArea26").style=""})
    document.querySelector("#cleanArea07").addEventListener("mouseover",function(){
        changeColor[7].style="fill:orangered"
        document.querySelector("#cleanArea07").style="background:orangered"})
    document.querySelector("#cleanArea07").addEventListener("mouseout",function(){
        changeColor[7].style=""
        document.querySelector("#cleanArea07").style=""})
    document.querySelector("#cleanArea17").addEventListener("mouseover",function(){
        changeColor[7].style="fill:orangered"
        document.querySelector("#cleanArea17").style="background:orangered"})
    document.querySelector("#cleanArea17").addEventListener("mouseout",function(){
        changeColor[7].style=""
        document.querySelector("#cleanArea17").style=""})
    document.querySelector("#cleanArea27").addEventListener("mouseover",function(){
        changeColor[7].style="fill:orangered"
        document.querySelector("#cleanArea27").style="background:orangered"})
    document.querySelector("#cleanArea27").addEventListener("mouseout",function(){
        changeColor[7].style=""
        document.querySelector("#cleanArea27").style=""})
    document.querySelector("#cleanArea08").addEventListener("mouseover",function(){
        changeColor[8].style="fill:orangered"
        document.querySelector("#cleanArea08").style="background:orangered"})
    document.querySelector("#cleanArea08").addEventListener("mouseout",function(){
        changeColor[8].style=""
        document.querySelector("#cleanArea08").style=""})
    document.querySelector("#cleanArea18").addEventListener("mouseover",function(){
        changeColor[8].style="fill:orangered"
        document.querySelector("#cleanArea18").style="background:orangered"})
    document.querySelector("#cleanArea18").addEventListener("mouseout",function(){
        changeColor[8].style=""
        document.querySelector("#cleanArea18").style=""})
    document.querySelector("#cleanArea28").addEventListener("mouseover",function(){
        changeColor[8].style="fill:orangered"
        document.querySelector("#cleanArea28").style="background:orangered"})
    document.querySelector("#cleanArea28").addEventListener("mouseout",function(){
        changeColor[8].style=""
        document.querySelector("#cleanArea28").style=""})
    document.querySelector("#cleanArea09").addEventListener("mouseover",function(){
        changeColor[9].style="fill:orangered"
        document.querySelector("#cleanArea09").style="background:orangered"})
    document.querySelector("#cleanArea09").addEventListener("mouseout",function(){
        changeColor[9].style=""
        document.querySelector("#cleanArea09").style=""})
    document.querySelector("#cleanArea19").addEventListener("mouseover",function(){
        changeColor[9].style="fill:orangered"
        document.querySelector("#cleanArea19").style="background:orangered"})
    document.querySelector("#cleanArea19").addEventListener("mouseout",function(){
        changeColor[9].style=""
        document.querySelector("#cleanArea19").style=""})
    document.querySelector("#cleanArea29").addEventListener("mouseover",function(){
        changeColor[9].style="fill:orangered"
        document.querySelector("#cleanArea29").style="background:orangered"})
    document.querySelector("#cleanArea29").addEventListener("mouseout",function(){
        changeColor[9].style=""
        document.querySelector("#cleanArea29").style=""})
    document.querySelector("#cleanArea010").addEventListener("mouseover",function(){
        changeColor[10].style="fill:orangered"
        document.querySelector("#cleanArea010").style="background:orangered"})
    document.querySelector("#cleanArea010").addEventListener("mouseout",function(){
        changeColor[10].style=""
        document.querySelector("#cleanArea010").style=""})
    document.querySelector("#cleanArea110").addEventListener("mouseover",function(){
        changeColor[10].style="fill:orangered"
        document.querySelector("#cleanArea110").style="background:orangered"})
    document.querySelector("#cleanArea110").addEventListener("mouseout",function(){
        changeColor[10].style=""
        document.querySelector("#cleanArea110").style=""})
    document.querySelector("#cleanArea210").addEventListener("mouseover",function(){
        changeColor[10].style="fill:orangered"
        document.querySelector("#cleanArea210").style="background:orangered"})
    document.querySelector("#cleanArea210").addEventListener("mouseout",function(){
        changeColor[10].style=""
        document.querySelector("#cleanArea210").style=""})
    document.querySelector("#cleanArea011").addEventListener("mouseover",function(){
        changeColor[11].style="fill:orangered"
        document.querySelector("#cleanArea011").style="background:orangered"})
    document.querySelector("#cleanArea011").addEventListener("mouseout",function(){
        changeColor[11].style=""
        document.querySelector("#cleanArea011").style=""})
    document.querySelector("#cleanArea111").addEventListener("mouseover",function(){
        changeColor[11].style="fill:orangered"
        document.querySelector("#cleanArea111").style="background:orangered"})
    document.querySelector("#cleanArea111").addEventListener("mouseout",function(){
        changeColor[11].style=""
        document.querySelector("#cleanArea111").style=""})
    document.querySelector("#cleanArea211").addEventListener("mouseover",function(){
        changeColor[11].style="fill:orangered"
        document.querySelector("#cleanArea211").style="background:orangered"})
    document.querySelector("#cleanArea211").addEventListener("mouseout",function(){
        changeColor[11].style=""
        document.querySelector("#cleanArea211").style=""})
    document.querySelector("#cleanArea012").addEventListener("mouseover",function(){
        changeColor[12].style="fill:orangered"
        document.querySelector("#cleanArea012").style="background:orangered"})
    document.querySelector("#cleanArea012").addEventListener("mouseout",function(){
        changeColor[12].style=""
        document.querySelector("#cleanArea012").style=""})
    document.querySelector("#cleanArea112").addEventListener("mouseover",function(){
        changeColor[12].style="fill:orangered"
        document.querySelector("#cleanArea112").style="background:orangered"})
    document.querySelector("#cleanArea112").addEventListener("mouseout",function(){
        changeColor[12].style=""
        document.querySelector("#cleanArea112").style=""})
    document.querySelector("#cleanArea212").addEventListener("mouseover",function(){
        changeColor[12].style="fill:orangered"
        document.querySelector("#cleanArea212").style="background:orangered"})
    document.querySelector("#cleanArea212").addEventListener("mouseout",function(){
        changeColor[12].style=""
        document.querySelector("#cleanArea212").style=""})
    document.querySelector("#cleanArea013").addEventListener("mouseover",function(){
        changeColor[13].style="fill:orangered"
        document.querySelector("#cleanArea013").style="background:orangered"})
    document.querySelector("#cleanArea013").addEventListener("mouseout",function(){
        changeColor[13].style=""
        document.querySelector("#cleanArea013").style=""})
    document.querySelector("#cleanArea113").addEventListener("mouseover",function(){
        changeColor[13].style="fill:orangered"
        document.querySelector("#cleanArea113").style="background:orangered"})
    document.querySelector("#cleanArea113").addEventListener("mouseout",function(){
        changeColor[13].style=""
        document.querySelector("#cleanArea113").style=""})
    document.querySelector("#cleanArea213").addEventListener("mouseover",function(){
        changeColor[13].style="fill:orangered"
        document.querySelector("#cleanArea213").style="background:orangered"})
    document.querySelector("#cleanArea213").addEventListener("mouseout",function(){
        changeColor[13].style=""
        document.querySelector("#cleanArea213").style=""})
    document.querySelector("#cleanArea014").addEventListener("mouseover",function(){
        changeColor[14].style="fill:orangered"
        document.querySelector("#cleanArea014").style="background:orangered"})
    document.querySelector("#cleanArea014").addEventListener("mouseout",function(){
        changeColor[14].style=""
        document.querySelector("#cleanArea014").style=""})
    document.querySelector("#cleanArea114").addEventListener("mouseover",function(){
        changeColor[14].style="fill:orangered"
        document.querySelector("#cleanArea114").style="background:orangered"})
    document.querySelector("#cleanArea114").addEventListener("mouseout",function(){
        changeColor[14].style=""
        document.querySelector("#cleanArea114").style=""})
    document.querySelector("#cleanArea214").addEventListener("mouseover",function(){
        changeColor[14].style="fill:orangered"
        document.querySelector("#cleanArea214").style="background:orangered"})
    document.querySelector("#cleanArea214").addEventListener("mouseout",function(){
        changeColor[14].style=""
        document.querySelector("#cleanArea214").style=""})
    document.querySelector("#cleanArea015").addEventListener("mouseover",function(){
        changeColor[15].style="fill:orangered"
        document.querySelector("#cleanArea015").style="background:orangered"})
    document.querySelector("#cleanArea015").addEventListener("mouseout",function(){
        changeColor[15].style=""
        document.querySelector("#cleanArea015").style=""})
    document.querySelector("#cleanArea115").addEventListener("mouseover",function(){
        changeColor[15].style="fill:orangered"
        document.querySelector("#cleanArea115").style="background:orangered"})
    document.querySelector("#cleanArea115").addEventListener("mouseout",function(){
        changeColor[15].style=""
        document.querySelector("#cleanArea115").style=""})
    document.querySelector("#cleanArea215").addEventListener("mouseover",function(){
        changeColor[15].style="fill:orangered"
        document.querySelector("#cleanArea215").style="background:orangered"})
    document.querySelector("#cleanArea215").addEventListener("mouseout",function(){
        changeColor[15].style=""
        document.querySelector("#cleanArea215").style=""})
    document.querySelector("#cleanArea016").addEventListener("mouseover",function(){
        changeColor[16].style="fill:orangered"
        document.querySelector("#cleanArea016").style="background:orangered"})
    document.querySelector("#cleanArea016").addEventListener("mouseout",function(){
        changeColor[16].style=""
        document.querySelector("#cleanArea016").style=""})
    document.querySelector("#cleanArea116").addEventListener("mouseover",function(){
        changeColor[16].style="fill:orangered"
        document.querySelector("#cleanArea116").style="background:orangered"})
    document.querySelector("#cleanArea116").addEventListener("mouseout",function(){
        changeColor[16].style=""
        document.querySelector("#cleanArea116").style=""})
    document.querySelector("#cleanArea216").addEventListener("mouseover",function(){
        changeColor[16].style="fill:orangered"
        document.querySelector("#cleanArea216").style="background:orangered"})
    document.querySelector("#cleanArea216").addEventListener("mouseout",function(){
        changeColor[16].style=""
        document.querySelector("#cleanArea216").style=""})
    document.querySelector("#cleanArea017").addEventListener("mouseover",function(){
        changeColor[17].style="fill:orangered"
        document.querySelector("#cleanArea017").style="background:orangered"})
    document.querySelector("#cleanArea017").addEventListener("mouseout",function(){
        changeColor[17].style=""
        document.querySelector("#cleanArea017").style=""})
    document.querySelector("#cleanArea117").addEventListener("mouseover",function(){
        changeColor[17].style="fill:orangered"
        document.querySelector("#cleanArea117").style="background:orangered"})
    document.querySelector("#cleanArea117").addEventListener("mouseout",function(){
        changeColor[17].style=""
        document.querySelector("#cleanArea117").style=""})
    document.querySelector("#cleanArea217").addEventListener("mouseover",function(){
        changeColor[17].style="fill:orangered"
        document.querySelector("#cleanArea217").style="background:orangered"})
    document.querySelector("#cleanArea217").addEventListener("mouseout",function(){
        changeColor[17].style=""
        document.querySelector("#cleanArea217").style=""})
    document.querySelector("#cleanArea018").addEventListener("mouseover",function(){
        changeColor[18].style="fill:orangered"
        document.querySelector("#cleanArea018").style="background:orangered"})
    document.querySelector("#cleanArea018").addEventListener("mouseout",function(){
        changeColor[18].style=""
        document.querySelector("#cleanArea018").style=""})
    document.querySelector("#cleanArea118").addEventListener("mouseover",function(){
        changeColor[18].style="fill:orangered"
        document.querySelector("#cleanArea118").style="background:orangered"})
    document.querySelector("#cleanArea118").addEventListener("mouseout",function(){
        changeColor[18].style=""
        document.querySelector("#cleanArea118").style=""})
    document.querySelector("#cleanArea218").addEventListener("mouseover",function(){
        changeColor[18].style="fill:orangered"
        document.querySelector("#cleanArea218").style="background:orangered"})
    document.querySelector("#cleanArea218").addEventListener("mouseout",function(){
        changeColor[18].style=""
        document.querySelector("#cleanArea218").style=""})
    document.querySelector("#cleanArea019").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea019").style="background:orangered"})
    document.querySelector("#cleanArea019").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea019").style=""})
    document.querySelector("#cleanArea119").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea119").style="background:orangered"})
    document.querySelector("#cleanArea119").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea119").style=""})
    document.querySelector("#cleanArea219").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea219").style="background:orangered"})
    document.querySelector("#cleanArea219").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea219").style=""})
    document.querySelector("#cleanArea020").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea020").style="background:orangered"})
    document.querySelector("#cleanArea020").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea020").style=""})
    document.querySelector("#cleanArea120").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea120").style="background:orangered"})
    document.querySelector("#cleanArea120").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea120").style=""})
    document.querySelector("#cleanArea220").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea220").style="background:orangered"})
    document.querySelector("#cleanArea220").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea220").style=""})
    document.querySelector("#cleanArea021").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea021").style="background:orangered"})
    document.querySelector("#cleanArea021").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea021").style=""})
    document.querySelector("#cleanArea121").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea121").style="background:orangered"})
    document.querySelector("#cleanArea121").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea121").style=""})
    document.querySelector("#cleanArea221").addEventListener("mouseover",function(){
        
        document.querySelector("#cleanArea221").style="background:orangered"})
    document.querySelector("#cleanArea221").addEventListener("mouseout",function(){
        
        document.querySelector("#cleanArea221").style=""})
});



