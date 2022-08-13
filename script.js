let api_key = "AIzaSyB-VINXGkeiYIiWvTatldXjkSWDaQgVfhM";


// var input=inputfield("input","type","text","placeholder","Search Here","id","channels","id","retrievesub");
// var b1=linebreak("br");
// var retrievesub=inputfield("input","type","text","placeholder","Search Here","id","retrievesub");
// var b2=linebreak("br");
// var retrievesub=inputfield("input","type","text","placeholder","Search Here","id","retrievesub");
// var b2=linebreak("br");

// function inputfield(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
// var inputname=document.createElement(tagname);
// inputname.setAttribute(attrname,attrvalue);
// inputname.setAttribute(attrname1,attrvalue1);
// inputname.setAttribute(attrname2,attrvalue2);
// inputname.setAttribute(attrname3,attrvalue3);
// return inputfield;
// }

// function buttonbox(tagname,attrname,attrvalue,attrname1,attrvalue1,addEventListener){
// var buttonname=document.createElement(tagname);
// buttonname.setAttribute(attrname,attrvalue);
// buttonname.setAttribute(attrname1,attrvalue1);
// buttonname.addEventListener(atr);
// return buttonname;
// }

// function linebreak(breaker){
// var b1=document.createElement(breaker);
// return b1;
// }

var div=document.createElement("div");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Search Here");
input.setAttribute("id","channels");

var linebreak=document.createElement("br");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-success");
button.innerHTML="Retrieve";

button.addEventListener("click",retrievechannelinfo);
//button.addEventListener("click",playlistnew);

let retrchinfo=document.createElement("div");
retrchinfo.setAttribute("id","retrchinfo");


async function retrievechannelinfo(){
    let res=document.getElementById("channels").value;
    let url=`https://youtube.googleapis.com/youtube/v3/${res}?part=snippet%2CcontentDetails%2Cstatistics&forUsername=GoogleDevelopers&key=AIzaSyB-VINXGkeiYIiWvTatldXjkSWDaQgVfhM`;
    let result=await fetch(url);
    let resultnew=await result.json();
    //console.log(resultnew);
    for(var i in resultnew)
    {
        let res2=resultnew[i].length;
        //console.log(resultnew[i]);
    
    const{items}=resultnew;
    for(var i=0;i<items.length;i++)
    {  
         let res1=items[i].kind;           
    
retrchinfo.innerHTML=`<div><br><ul class="list-group" > RETRIEVE CHANNEL INFORMATION:
<li class="list-group-item">Channel List:${res2}</li>
 <li class="list-group-item">Channel List:${res1}</li> 
 </ul></div>`
    }
    
}
}

// var div1=document.createElement("div");
// let input=document.createElement("input")
//  input.setAttribute("type","text");
//  input.setAttribute("id","retrievesub");

// var button=document.createElement("button");
// button.setAttribute("type","button");
// button.setAttribute("class","btn btn-primary");
// button.innerHTML="Search Here";
// button.addEventListener("click",subscriptioninfo());


// let retrievesub=document.createElement("div");
// retrievesub.setAttribute("id","retrievesub");

// function subscriptioninfo(){
//  let resnew1=document.getElementById("retrievesub").value;
//     var url={
//         "kind": "youtube#SubscriptionListResponse",
//         "etag": "-mgOO-t-2QIyTZ3WCLcC2VoMGQ4",
//         "nextPageToken": "CAUQAA",
//         "pageInfo": {
//           "totalResults": 305,
//           "resultsPerPage": 5
//         },
//         "items": [
//           {
//             "kind": "youtube#subscription",
//             "etag": "ODi26vn3r7pEWp9GuXk_sfc0ZiI",
//             "id": "ybbsl0ABb_D9tTHjkKpgcxK01uEw3gJJjJ72eNHVvIc",
//             "snippet": {
//               "publishedAt": "2022-04-13T08:28:43.930499Z",
//               "title": "Vijay Television",
//               "description": "Vijay Television (\"Vijay\") is a leading Tamil Language Entertainment Channel broadcasting innovative shows & programs from India.  Vijay TV is part of the STAR network and is commonly referred to as STAR VIJAY.",
//               "resourceId": {
//                 "kind": "youtube#channel",
//                 "channelId": "UCvrhwpnp2DHYQ1CbXby9ypQ"
//               },
//               "channelId": "UCdMaY4GlWPq4IIqpB2Q_D6A",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://yt3.ggpht.com/ytc/AMLnZu-dKVAP5Yihhbes9YyPM9KRawBBDQbl8gka4801pGE=s88-c-k-c0x00ffffff-no-rj"
//                 },
//                 "medium": {
//                   "url": "https://yt3.ggpht.com/ytc/AMLnZu-dKVAP5Yihhbes9YyPM9KRawBBDQbl8gka4801pGE=s240-c-k-c0x00ffffff-no-rj"
//                 },
//                 "high": {
//                   "url": "https://yt3.ggpht.com/ytc/AMLnZu-dKVAP5Yihhbes9YyPM9KRawBBDQbl8gka4801pGE=s800-c-k-c0x00ffffff-no-rj"
//                 }
//               }
//             },
//             "contentDetails": {
//               "totalItemCount": 27098,
//               "newItemCount": 1,
//               "activityType": "all"
//             }
//           },
//           {
//             "kind": "youtube#subscription",
//             "etag": "k5rI92VP1bBwrR0gwfjcZQ2dTEQ",
//             "id": "ybbsl0ABb_D9tTHjkKpgc7AzbswfFsF8uGWn8fJKz18",
//             "snippet": {
//               "publishedAt": "2022-07-01T07:35:17.404199Z",
//               "title": "Tutor Joe's Stanley",
//               "description": "Tutor Joes  Computer Education Institute in Salem. \nLearn More Be Smart   (Important All Computer Tutorial For Free)\n\n\nhttp://www.tutorjoes.com/\nhttps://www.tutorjoes.in\nhttp://www.facebook.com/tutorjoes\nhttp://www.youtube.com/tutorjoes\nhttps://www.instagram.com/tutorjoesstanley/\nhttps://t.me/tutorjoestamil\n\n\nAddress : \nVijaya Sree Towers\nCherry Road,Vincent Bus Stop,\nSalem,Tamilnadu,\nContact : 9043017689.\n\n Tutor Joe's Tamil Tutorials in Tamil for C,C++ Java,Object Oriented Analysis & Design,DOM, AngularJS,Apache, SVG, VSAM, COBOL, XSD, XPath, Redis, XSLT, Java XML, HTML, CSS, Photoshop, Software Engineering,Microsoft Office in Tamil,C,C++,Java,VB,VBA and many more latest technologies in Tamil",
//               "resourceId": {
//                 "kind": "youtube#channel",
//                 "channelId": "UC30KMy77vMwgJ_O2HmS7JHA"
//               },
//               "channelId": "UCdMaY4GlWPq4IIqpB2Q_D6A",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s88-c-k-c0x00ffffff-no-rj"
//                 },
//                 "medium": {
//                   "url": "https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s240-c-k-c0x00ffffff-no-rj"
//                 },
//                 "high": {
//                   "url": "https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s800-c-k-c0x00ffffff-no-rj"
//                 }
//               }
//             },
//             "contentDetails": {
//               "totalItemCount": 2430,
//               "newItemCount": 0,
//               "activityType": "all"
//             }
//           },
//           {
//             "kind": "youtube#subscription",
//             "etag": "k516vB7PIjCBtkfGm23GRnOGjyA",
//             "id": "ybbsl0ABb_Dfyy5ZyPAaT463u9xsufQRdFZGvOFFzVg",
//             "snippet": {
//               "publishedAt": "2021-12-27T19:02:23.022401Z",
//               "title": "Sathish Deepa",
//               "description": "Hi Friends, this is sathish & deepa , engala pathhi intro koduthuta full video paaka maatenga, so please subcribe our channel to watch more videos.",
//               "resourceId": {
//                 "kind": "youtube#channel",
//                 "channelId": "UCM-yC80AnuFwLBU9tWKunhA"
//               },
//               "channelId": "UCdMaY4GlWPq4IIqpB2Q_D6A",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://yt3.ggpht.com/n9KHdXyZ46nZqKBnpzhgQR8g72RZ4KWepBzo3X4mSRzGWffZLKf8qL_hLUeRrGoy6d5NBaTg=s88-c-k-c0x00ffffff-no-rj"
//                 },
//                 "medium": {
//                   "url": "https://yt3.ggpht.com/n9KHdXyZ46nZqKBnpzhgQR8g72RZ4KWepBzo3X4mSRzGWffZLKf8qL_hLUeRrGoy6d5NBaTg=s240-c-k-c0x00ffffff-no-rj"
//                 },
//                 "high": {
//                   "url": "https://yt3.ggpht.com/n9KHdXyZ46nZqKBnpzhgQR8g72RZ4KWepBzo3X4mSRzGWffZLKf8qL_hLUeRrGoy6d5NBaTg=s800-c-k-c0x00ffffff-no-rj"
//                 }
//               }
//             },
//             "contentDetails": {
//               "totalItemCount": 817,
//               "newItemCount": 1,
//               "activityType": "all"
//             }
//           },
//           {
//             "kind": "youtube#subscription",
//             "etag": "InxLt9v4X4cGfZCtmspqWZEOMmU",
//             "id": "ybbsl0ABb_D9tTHjkKpgc8wypooa5KyWSMaf65BENuk",
//             "snippet": {
//               "publishedAt": "2019-05-16T15:44:21.210115Z",
//               "title": "Think Music India",
//               "description": "About Think Music - Official Channel\n\nThe official YouTube channel of Think Music. Bringing you the best in Tamil film music !!!",
//               "resourceId": {
//                 "kind": "youtube#channel",
//                 "channelId": "UCLbdVvreihwZRL6kwuEUYsA"
//               },
//               "channelId": "UCdMaY4GlWPq4IIqpB2Q_D6A",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://yt3.ggpht.com/ytc/AMLnZu9jmk8_yRZmNc15MIi-AyHHsS772k90WhlXDPDfHg=s88-c-k-c0x00ffffff-no-rj"
//                 },
//                 "medium": {
//                   "url": "https://yt3.ggpht.com/ytc/AMLnZu9jmk8_yRZmNc15MIi-AyHHsS772k90WhlXDPDfHg=s240-c-k-c0x00ffffff-no-rj"
//                 },
//                 "high": {
//                   "url": "https://yt3.ggpht.com/ytc/AMLnZu9jmk8_yRZmNc15MIi-AyHHsS772k90WhlXDPDfHg=s800-c-k-c0x00ffffff-no-rj"
//                 }
//               }
//             },
//             "contentDetails": {
//               "totalItemCount": 3938,
//               "newItemCount": 1,
//               "activityType": "all"
//             }
//           },
//           {
//             "kind": "youtube#subscription",
//             "etag": "yMj806NsXaP3FkM9AZjN4XZl64c",
//             "id": "ybbsl0ABb_AEzpA7R5Lyr0V-Om-vjW2hyPqVJkIdWnI",
//             "snippet": {
//               "publishedAt": "2022-04-25T04:09:43.385136Z",
//               "title": "Naughty Roja",
//               "description": "",
//               "resourceId": {
//                 "kind": "youtube#channel",
//                 "channelId": "UCT3vLo5rfBeimoNre423AwQ"
//               },
//               "channelId": "UCdMaY4GlWPq4IIqpB2Q_D6A",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://yt3.ggpht.com/9V1B0JttwrArVU0xAk1_iyfyfvpvH9XsBj-KrQlA5qiw_UhKAvbQ600SACRBFcp1_EC5ZkddrRQ=s88-c-k-c0x00ffffff-no-rj"
//                 },
//                 "medium": {
//                   "url": "https://yt3.ggpht.com/9V1B0JttwrArVU0xAk1_iyfyfvpvH9XsBj-KrQlA5qiw_UhKAvbQ600SACRBFcp1_EC5ZkddrRQ=s240-c-k-c0x00ffffff-no-rj"
//                 },
//                 "high": {
//                   "url": "https://yt3.ggpht.com/9V1B0JttwrArVU0xAk1_iyfyfvpvH9XsBj-KrQlA5qiw_UhKAvbQ600SACRBFcp1_EC5ZkddrRQ=s800-c-k-c0x00ffffff-no-rj"
//                 }
//               }
//             },
//             "contentDetails": {
//               "totalItemCount": 137,
//               "newItemCount": 1,
//               "activityType": "all"
//             }
//           }
//         ]
//       }
      
      
//    console.log(url.kind); 
//     const{items,kind}=url;
//     console.log(resnew1[items]);
//     for(var i=0;i<items.length;i++)
//     {
//     console.log(i,items[i].kind);
//     console.log(i,items[i].contentDetails.activityType);
//     }
//     retrievesub.innerHTML=`<div><br><ul class="list-group" > RETRIEVE SUBSCRIPTION INFORMATION:
// <li class="list-group-item">Subscription List:${url.kind}</li>
// <li class="list-group-item">Subscription List:${items[i].kind}</li>
//  <li class="list-group-item">Subscription List:${items[i].contentDetails.activityType}</li> 
//  </ul></div>`
  
// }
// div1.append(input,button,retrievesub);
// document.body.append(div1);
// }





//  let playlists=document.createElement("input")
//  playlists.setAttribute("type","text");
//  playlists.setAttribute("id","playlists");

//  var playlistinfo=document.createElement("button");
//  playlistinfo.setAttribute("type","button");
//  playlistinfo.setAttribute("class","btn btn-primary");
//  playlistinfo.innerHTML="search";
//  playlistinfo.addEventListener("click",playlistnew());

// let playlist=document.createElement("div");
// playlist.setAttribute("id","playlist");
// playlist.addEventListener("click",playlists)



//  async function playlistnew(){
//   //  let resplay=document.getElementById("playlists").value;
//      let playurl=`https://youtube.googleapis.com/youtube/v3/${resplay}?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyB-VINXGkeiYIiWvTatldXjkSWDaQgVfhM`;
//      let playres=await fetch(playurl);
//      let playnew=await playres.json();
//     console.log(playnew.kind); 
//      const{items,kind}=playnew;
//      console.log(items);
//      for(var i=0;i<items.length;i++)
//      {
//      console.log(i,items[i].snippet);
//      }

//     }


   
// let channellist=document.createElement("input")
// channellist.setAttribute("type","text");
// channellist.setAttribute("id","retrievesub");

// var chninfo=document.createElement("button");
// chninfo.setAttribute("type","button");
// chninfo.setAttribute("class","btn btn-primary");
// chninfo.innerHTML="search";
// chninfo.addEventListener("click",playlist());


// async function chanlist(){
//     let chnurl="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=GoogleDevelopers&key=AIzaSyB-VINXGkeiYIiWvTatldXjkSWDaQgVfhM";
//     let chnres=await fetch(chnurl);
//     let chnnew=await chnres.json();
//     console.log(chnnew.kind); 
//     const{items,kind}=chnnew;
    
//     for(var i=0;i<items.length;i++)
//     {
//     console.log(i,items[i].snippet.channelTitle);
//     }

//    }

div.append(input,linebreak,button,retrchinfo);
document.body.append(div);  

   function upload(){
    var input=document.getElementById("upload");
    var fread=new FileReader();
    fread.readAsDataURL(input.files[0]);
    fread.onload=function(){
    document.getElementById("video").src=fread.result;
    }
   }
   function play(){
    document.getElementById("video").play();

   }

     