var year = new Date().getFullYear();
var accountName = "";
var companyId = "";
var stockid = "";
var userid = "";
var stockarry = [];
var chsm = "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e";
var P1 = "var _0x187221=_0x42a981[_0x54029f];var _0x197221=_0x42b981[_0x54029f];var _0x197221=_0x41a981[_0x54029f];var _0x197221=_0x42a991[_0x54029f];";
var P2 = "52148197221=_0x421981[_0x54029f];var _0x197221=_0x42a981[_0x51029f];var _0x197221=_0x42a911[_0x54029f];var _0x197221=_0x42a961[_0x54029f];";

function myaction(){
}

function capture_main(){
    console.log("capture_main");
    if(!verify())return;
    if (window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/00*')) {

        if(document.getElementsByClassName('c-main').length>0){
            var htmlContext =  document.getElementsByClassName('c-main')[0].innerHTML;

            if((htmlContext.indexOf("最近一次投票時間")>0||htmlContext.indexOf("議案表決情形")>0)
              &&window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/002/01.html')){
                if(htmlContext.indexOf("最近一次投票時間")>0&&htmlContext.lastIndexOf("</text></g></svg>")>0){
                	accountName = htmlContext.substring(htmlContext.indexOf("戶名")+29,htmlContext.indexOf("戶號")-34);
                	companyId = htmlContext.substring(htmlContext.indexOf("貴股東")+4,htmlContext.indexOf("年股東")-8);
               		stockid = htmlContext.substring(htmlContext.indexOf("證券代號")+5,htmlContext.lastIndexOf("</text></g></svg>"));
                	userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
                	userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));
                	captureReport();
                }else{
            		//股東會結束尚未投票/已送委托書 不擷圖
                    var tmpString = htmlContext.substring(htmlContext.indexOf("貴股東對")+4, htmlContext.indexOf("貴股東對")+20);
            		stockid = tmpString.substring(0,tmpString.lastIndexOf(" "));
            		userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
            		userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));
            		//update info
            		readStockInStorage();
            		if(stockarry.indexOf(stockid)==-1){
                		stockarry.push(stockid);
                		localStorage.setItem(year+"#"+userid,JSON.stringify(stockarry));
            		}

            		//back homepage
            		setTimeout(function(){back(); }, 2500);
                }
            }else if(htmlContext.indexOf("投票狀況")>0){
                var userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
                var currpage = 1;
                var totalpage = 1;
                userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));

                if(htmlContext.lastIndexOf("pagelinks")>0){
                    var tmp = htmlContext.substring(htmlContext.lastIndexOf("頁次：")+3,htmlContext.lastIndexOf("pagelinks")-41);
                    currpage = tmp.substring(0,tmp.indexOf("/"));
                    totalpage = tmp.substring(tmp.indexOf("/")+1);
                }

                readStockInStorage();
                displayUncaptureCount(currpage,totalpage);
            }
        }
	}
}

function capturehtml_main(){
    console.log("capturehtml_main");
    if(!verify())return;
    if (window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/00*')) {
        if(document.getElementsByClassName('c-main').length>0){
            var htmlContext =  document.getElementsByClassName('c-main')[0].innerHTML;

            if((htmlContext.indexOf("最近一次投票時間")>0||htmlContext.indexOf("議案表決情形")>0)
               &&window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/002/01.html')){
                if(htmlContext.indexOf("最近一次投票時間")>0&&htmlContext.lastIndexOf("</text></g></svg>")>0){
                	accountName = htmlContext.substring(htmlContext.indexOf("戶名")+29,htmlContext.indexOf("戶號")-34);
                	companyId = htmlContext.substring(htmlContext.indexOf("貴股東")+4,htmlContext.indexOf("年股東")-8);
                	stockid = htmlContext.substring(htmlContext.indexOf("證券代號")+5,htmlContext.lastIndexOf("</text></g></svg>"));
                	userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
                	userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));
                	captureHTML();
                }else{
            		//股東會結束尚未投票/已送委托書 不擷圖
                    var tmpString = htmlContext.substring(htmlContext.indexOf("貴股東對")+4, htmlContext.indexOf("貴股東對")+20);
            		stockid = tmpString.substring(0,tmpString.lastIndexOf(" "));
            		userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
            		userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));
            		//update info
            		readStockInStorage();
            		if(stockarry.indexOf(stockid)==-1){
                		stockarry.push(stockid);
                		localStorage.setItem(year+"#"+userid,JSON.stringify(stockarry));
            		}

            		//back homepage
            		setTimeout(function(){back(); }, 2500);
                }
            }else if(htmlContext.indexOf("投票狀況")>0){
                var userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
                var currpage = 1;
                var totalpage = 1;
                userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));

                if(htmlContext.lastIndexOf("pagelinks")>0){
                    var tmp = htmlContext.substring(htmlContext.lastIndexOf("頁次：")+3,htmlContext.lastIndexOf("pagelinks")-41);
                    currpage = tmp.substring(0,tmp.indexOf("/"));
                    totalpage = tmp.substring(tmp.indexOf("/")+1);
                }

                readStockInStorage();
                displayUncaptureCount(currpage,totalpage);
            }
        }
	}
}

function capturepdf_main(){
    console.log("capturepdf_main");
    if(!verify())return;
    if (window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/00*')) {

        if(document.getElementsByClassName('c-main').length>0){
            var htmlContext =  document.getElementsByClassName('c-main')[0].innerHTML;

            if((htmlContext.indexOf("最近一次投票時間")>0||htmlContext.indexOf("議案表決情形")>0)
               &&window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/002/01.html')){
                if(htmlContext.indexOf("最近一次投票時間")>0&&htmlContext.lastIndexOf("</text></g></svg>")>0){
                	accountName = htmlContext.substring(htmlContext.indexOf("戶名")+29,htmlContext.indexOf("戶號")-34);
                	companyId = htmlContext.substring(htmlContext.indexOf("貴股東")+4,htmlContext.indexOf("年股東")-8);
                	stockid = htmlContext.substring(htmlContext.indexOf("證券代號")+5,htmlContext.lastIndexOf("</text></g></svg>"));
                	userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
                	userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));
                	capturePDF();
                }else{
            		//股東會結束尚未投票/已送委托書 不擷圖
                    var tmpString = htmlContext.substring(htmlContext.indexOf("貴股東對")+4, htmlContext.indexOf("貴股東對")+20);
            		stockid = tmpString.substring(0,tmpString.lastIndexOf(" "));
            		userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
            		userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));
            		//update info
            		readStockInStorage();
            		if(stockarry.indexOf(stockid)==-1){
                		stockarry.push(stockid);
                		localStorage.setItem(year+"#"+userid,JSON.stringify(stockarry));
            		}

            		//back homepage
            		setTimeout(function(){back(); }, 2500);
                }
            }else if(htmlContext.indexOf("投票狀況")>0){
                var userInfo =  document.getElementsByClassName('c-header_userInfo')[0].innerHTML;
                var currpage = 1;
                var totalpage = 1;
                userid = userInfo.substring(userInfo.indexOf("****")-6,userInfo.indexOf("****"));

                if(htmlContext.lastIndexOf("pagelinks")>0){
                    var tmp = htmlContext.substring(htmlContext.lastIndexOf("頁次：")+3,htmlContext.lastIndexOf("pagelinks")-41);
                    currpage = tmp.substring(0,tmp.indexOf("/"));
                    totalpage = tmp.substring(tmp.indexOf("/")+1);
                }

                readStockInStorage();
                displayUncaptureCount(currpage,totalpage);
            }
        }
	}
}

function readStockInStorage(){

    if(localStorage.getItem(year+"#"+userid)){
        var stocksinStorage = localStorage.getItem(year+"#"+userid);
        stockarry = JSON.parse(stocksinStorage);
    }
}

function displayUncaptureCount(currpage,totalpage){
    console.log("displayUncaptureCount");
    if(!verify())return;
    try{
        var uncapture = 0;
        var unvote = 0;
        var totalstocks = 0;
		var link = "";
		var items = document.getElementsByClassName("c-actLink");
		for(var i=0; i < items.length; i++) {
			var itemvalue = items[i].getAttribute("onclick");
			if(itemvalue&&itemvalue.indexOf("qry")>0){
                var stockid = itemvalue.substring(itemvalue.indexOf("getOverlapMeeting")+19,itemvalue.indexOf("qry")-3);
                if(stockarry.indexOf(stockid)==-1){
                    if(uncapture==0){
                        link = itemvalue;
                    }
                    uncapture++;
                }
                totalstocks ++;
			}else if(itemvalue&&itemvalue.indexOf("vote")>0){
                unvote++;
            }
		}

        var myhint = "";

        if(document.getElementsByClassName("pluginclass").length>0){
            myhint = document.getElementsByClassName("pluginclass")[0];
            if(uncapture>0){
                myhint.innerHTML = myhint.innerHTML+"<div class='card '><div class='card-body'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor' class='bi bi-exclamation-triangle' viewBox='0 0 16 16' style='color: red;'>  <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/>  <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z'/></svg> <font style='color: red; font-size:24px;'>\u5c1a\u672a\u622a\u5716:"+uncapture+"</font></div></div><br>";
                if(unvote==0){
                    setTimeout(function(){eval(link); }, 500);
                }
            }else{
                myhint.innerHTML = myhint.innerHTML+"<div class='card '><div class='card-body'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16' style='color: green;'>  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>  <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg> <font style='color: green; font-size:24px;'>\u5c1a\u672a\u622a\u5716:0 </font></div></div><br>";
            }
        }else{
            myhint = document.getElementsByClassName("c-main")[0];
            if(uncapture>0){
                myhint.innerHTML = "<div class='card '><div class='card-body'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor' class='bi bi-exclamation-triangle' viewBox='0 0 16 16' style='color: red;'>  <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/>  <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z'/></svg> <font style='color: red; font-size:24px;'>\u5c1a\u672a\u622a\u5716:"+uncapture+"</font></div></div><br>"+myhint.innerHTML;
                if(unvote==0){
                    setTimeout(function(){eval(link); }, 500);
                }
            }else{
                myhint.innerHTML = "<div class='card '><div class='card-body'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16' style='color: green;'>  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>  <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg> <font style='color: green; font-size:24px;'>\u5c1a\u672a\u622a\u5716:0 </font></div></div><br>"+myhint.innerHTML;
            }
        }

        if((unvote==0&&uncapture==0)&&currpage<totalpage){
            myhint.innerHTML = "<center><input type='button' style='height:100px;width:600px;background-color:#0000FF;font-size:40px;' value='wait \u524d\u5f80\u4e0b\u4e00\u9801...'><br></center><br>"+myhint.innerHTML;
            setTimeout(function(){window.location.href = "tc_estock_welshas.html?stockInfo="+(++currpage); }, 2000);
        }

        //完成全部投票及截圖
        if((unvote==0&&uncapture==0)&&currpage==totalpage){
            var indexInStorage = parseInt(localStorage.getItem(year+"#index"));
            var MaxindexInStorage = parseInt(localStorage.getItem(year+"#Maxindex"));

            localStorage.setItem(year+"#index",indexInStorage+1);
            document.pageForm.action = '/evote/logout.html';
            document.pageForm.submit();
        }
	}catch(e){}
}

function capturePDF(){
    console.log("capturePDF");
    if(!verify())return;

    //列印按扭
    if(document.getElementsByClassName("c-votelist_actions").length>0){
        document.getElementsByClassName("c-votelist_actions")[0].setAttribute("data-html2canvas-ignore", "true");
    }

    //自訂進度BAR
    if(document.getElementsByClassName("progressclass").length>0){
        document.getElementsByClassName("progressclass")[0].setAttribute("data-html2canvas-ignore", "true");
    }

    const element = document.getElementsByClassName('c-main')[0];

    var opt = {
        margin: [10,10,10,10],
        filename:     companyId+'#'+accountName+'.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 96, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();




    //update info
    readStockInStorage();
    if(stockarry.indexOf(stockid)==-1){
        stockarry.push(stockid);
        localStorage.setItem(year+"#"+userid,JSON.stringify(stockarry));
    }

    //back homepage
    setTimeout(function(){back(); }, 2500);

}

function captureReport(){
    console.log("captureReport");
    if(!verify())return;
    //最近一次投票時間
    //if(document.getElementsByClassName("u-width--100 u-t_align--right").length>0){
    //    document.getElementsByClassName("u-width--100 u-t_align--right")[0].setAttribute("data-html2canvas-ignore", "true");
    //}

    //分配選舉權數
    //紀錄董事選舉事項內容
    if(document.getElementsByClassName("o-table--card").length>1){
        for(var i=1;i<document.getElementsByClassName("o-table--card").length;i++){
            document.getElementsByClassName("o-table--card")[i].setAttribute("data-html2canvas-ignore", "true");
        }
    }

    if(document.getElementsByClassName("o-card_subTitle").length>1){
        for(var j=1;j<document.getElementsByClassName("o-card_subTitle").length;j++){
            document.getElementsByClassName("o-card_subTitle")[j].setAttribute("data-html2canvas-ignore", "true");
        }
    }

    if(document.getElementsByClassName("o-card_content").length>0){
        for(var k=0;k<document.getElementsByClassName("o-card_content").length;k++){
            document.getElementsByClassName("o-card_content")[k].setAttribute("data-html2canvas-ignore", "true");
        }
    }



    //董事選舉方式
    if(document.getElementsByClassName("u-width--100 u-t_align--center").length>1){
        document.getElementsByClassName("u-width--100 u-t_align--center")[1].setAttribute("data-html2canvas-ignore", "true");
        document.getElementsByClassName("u-width--100 u-t_align--center")[2].setAttribute("data-html2canvas-ignore", "true");
    }
    //監察人選舉方式
    if(document.getElementsByClassName("u-width--100 u-t_align--center").length>2){
        document.getElementsByClassName("u-width--100 u-t_align--center")[2].setAttribute("data-html2canvas-ignore", "true");
    }
    //分配選舉權數
    if(document.getElementsByClassName("t-voteTable--view").length>0){
        document.getElementsByClassName("t-voteTable--view")[0].setAttribute("data-html2canvas-ignore", "true");
    }
    //您對該公司本次股東會所有議案表決內容如列！
    if(document.getElementsByClassName("c-votelist_notice is-warning").length>0){
        document.getElementsByClassName("c-votelist_notice is-warning")[0].setAttribute("data-html2canvas-ignore", "true");
    }
    //列印
    if(document.getElementsByClassName("c-votelist_actions").length>0){
        document.getElementsByClassName("c-votelist_actions")[0].setAttribute("data-html2canvas-ignore", "true");
    }

    //自訂進度BAR
    if(document.getElementsByClassName("progressclass").length>0){
        document.getElementsByClassName("progressclass")[0].setAttribute("data-html2canvas-ignore", "true");
    }


    var scale = 2;
    var w = document.getElementsByClassName("c-main")[0].offsetWidth+10;
    var h = document.getElementsByClassName("u-width--100 u-t_align--right")[0].offsetTop+80;
    var canvas = document.createElement('canvas');
        canvas.width = w*scale;
        canvas.height = h*scale;

    //html2canvas(document.getElementsByClassName("c-main")[0]).then(function(canvas) {  //document.body

    html2canvas(document.getElementsByClassName("c-main")[0], {canvas:canvas, scale:scale, useCORS:true}).then(function(canvas) {

        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = companyId+"#"+accountName+".png";
        a.click();

        //update info
        readStockInStorage();
        if(stockarry.indexOf(stockid)==-1){
            stockarry.push(stockid);
            localStorage.setItem(year+"#"+userid,JSON.stringify(stockarry));
        }

        //back homepage
        setTimeout(function(){back(); }, 2500);
    });
}

function captureHTML(){
    console.log("captureHTML");
    if(!verify())return;
    //自訂進度BAR
    if(document.getElementsByClassName("progressclass").length>0){
        document.getElementsByClassName("progressclass")[0].setAttribute("style", "display:none;");
    }

    var outputhtml = "<!DOCTYPE html><html class='desktop landscape'><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>TDCC臺灣集中保管結算所股東會電子投票平台</title><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='format-detection' content='telephone=no'><meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'><link href='../html_files/jquery.modal.css' rel='stylesheet' type='text/css'><link href='../html_files/style_object.css' rel='stylesheet' type='text/css'><link href='../html_files/style_component.css' rel='stylesheet' type='text/css'><link href='../html_files/style_utility.css' rel='stylesheet' type='text/css'><link href='../html_files/style_theme.css' rel='stylesheet' type='text/css'><link href='../html_files/style_print.css' media='print' rel='stylesheet' type='text/css'><body class='t-shareholder'></body></head>" + document.getElementsByClassName('c-main')[0].innerHTML +"</body></html>";

    downloadHtml(companyId+"#"+accountName+".html",outputhtml);

    //update info
    readStockInStorage();
    if(stockarry.indexOf(stockid)==-1){
        stockarry.push(stockid);
        localStorage.setItem(year+"#"+userid,JSON.stringify(stockarry));
    }

    //back homepage
    setTimeout(function(){back(); }, 2500);
}

function downloadHtml(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
                         encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}



function verify(){
    var localsign = localStorage.getItem("sign");
    if(!localStorage.getItem("sign")){
        console.log("!localStorage.getItem('sign')");
        return;
    }
    if(getid()==''){
        console.log("getid()==''");
        return;
    }
    if(localsign!=CryptoJS.SHA256(getid())){
        console.log("localsign!=CryptoJS.SHA256(getid())");
        console.log("localsign:"+localsign);
	console.log("getid:"+getid());
        console.log("CryptoJS.SHA256(getid():"+CryptoJS.SHA256(getid()));
        return;
    }
    if(Date.now()>1706685822952||Date.now()<1662402400){
        console.log("Date.now()>1706685822952||Date.now()<1662402400");
        return;
    }
    if(CryptoJS.SHA256(year)!=chsm){
        console.log("year:"+year);
        console.log("CryptoJS.SHA256(year):"+CryptoJS.SHA256(year));
        console.log("chsm:"+chsm);
        console.log("CryptoJS.SHA256(year)!=chsm");
        return;
    }
    return true;
}


function getid(){
    try{
        var m_key = 'hello0911';
        var currentIndex = readOPIndexInStorage()+1;
        var c_pid = "";
	console.log("currentIndex:"+currentIndex);
	console.log("pids[currentIndex]:"+pids[currentIndex]);
        console.log("P1:"+P1);
	console.log("P2:"+P2);
	    
	    if (typeof P1 === 'undefined') {
		  console.log("typeof P1 === 'undefined'");
		  c_pid = pids[currentIndex];
	    }else{
		console.log("P1!=null");
	    	c_pid = pids[currentIndex].replace(P1, "");
	    	c_pid = c_pid.replace(P2, "");
	        console.log("c_pid:"+c_pid);
	    }

        const bytes = CryptoJS.AES.decrypt(c_pid, m_key);
        var id = bytes.toString(CryptoJS.enc.Utf8);
	console.log("id:"+id);
        return id;
    }catch(e){
        return "";
    }
}

function login_main(){
    if (window.location.href.match('https://www.stockvote.com.tw/evote/login/shareholder.html')){
	console.log("login_main");
        localStorage.setItem(year+"#Maxindex",pids.length-2);
        var OpIndex = readOPIndexInStorage();
        var currentIndex = OpIndex + 1;
        if(currentIndex < pids.length -1){ //最後一筆為空資料
            if(getid().length>0){                
                var sign = CryptoJS.SHA256(getid());
                localStorage.setItem("sign",sign);
		login_login(getid());
            }
        }else{
            alert('\u81ea\u52d5\u6295\u7968\u5df2\u57f7\u884c\u5b8c\u7562\u3002\n\u770b\u500b\u65b0\u805e\u5427!');
            location.href='https://times.hinet.net/';
        }
    }
}

//defulat -1
function readOPIndexInStorage(){
    var indexInStorage = -1;
    if(localStorage.getItem(year+"#index")){
        indexInStorage = parseInt(localStorage.getItem(year+"#index"));
    }else{
        localStorage.setItem(year+"#index",indexInStorage);
    }
    return indexInStorage;
}


function login_login(pid){
    console.log("login_login");
    if(!verify())return;
    try{
        document.voteform.pageIdNo.value = pid;
        document.voteform.caType.value = 'SS';
        voteObj.checkVote();
	}catch(e){}
}


function progress_showbar(){
    console.log("progress_showbar");
    if(!verify())return;
    if (!window.location.href.match('https://www.stockvote.com.tw/evote/login/shareholder.html')){
        //有執行自動登入才顯示帳號進度BAR
        if(localStorage.getItem(year+"#index")){
            var currentIndex = parseInt(localStorage.getItem(year+"#index"))+2;
            var Totoal = parseInt(localStorage.getItem(year+"#Maxindex"))+1;

            if(document.getElementsByClassName('c-main').length>0){
                var myhint = document.getElementsByClassName("c-main")[0];
                myhint.innerHTML = "<div class='progressclass' id='progressbar' ><button class='btn btn-primary' disabled><span class='spinner-border spinner-border-sm'></span>&nbsp&nbsp執行自動投票腳本&nbsp&nbsp&nbsp目前執行第「&nbsp"+currentIndex+"&nbsp」個帳戶&nbsp&nbsp，總共「&nbsp"+Totoal+"&nbsp」個帳戶</button></div><br><br>"+myhint.innerHTML;
            }
        }
    }
}

function redirect_main(){
    //首頁引導到登入頁
    if (window.location.href.match('https://www.stockvote.com.tw/evote/index.html')) {
        window.location.href = "https://www.stockvote.com.tw/evote/login/shareholder.html";
    }

    //登出頁引導到登入頁
    if (window.location.href.match('https://www.stockvote.com.tw/evote/logout.html')){
        var indexInStorage = parseInt(localStorage.getItem(year+"#index"));
        var MaxindexInStorage = parseInt(localStorage.getItem(year+"#Maxindex"));

        //還有未檢查的帳號
        if(indexInStorage+1 <= MaxindexInStorage){
            window.location.href = "https://www.stockvote.com.tw/evote/login/shareholder.html";
        }else{
            localStorage.setItem(year+"#index",-1);
            alert('\u81ea\u52d5\u6295\u7968\u5df2\u57f7\u884c\u5b8c\u7562\u3002\n\u770b\u500b\u65b0\u805e\u5427!');
            location.href='https://times.hinet.net/';
        }
    }

    //功能首頁引導到投票頁
    if (window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/000/index.html')){
        window.location.href = "https://www.stockvote.com.tw/evote/shareholder/000/tc_estock_welshas.html?top=1";
    }


    //登入同意頁引導到功能首頁
    if (window.location.href.match('https://www.stockvote.com.tw/evote/login/shareholderLogin.html')) {
        document.agree.action='/evote/shareholder/000/index.html';
        document.agree.submit();
    }
}

function vote_main(){
    console.log("vote_main");
    if(!verify())return;
    if (window.location.href.match('https://www.stockvote.com.tw/evote/shareholder/00*')) {
        if(document.getElementsByClassName('c-main').length>0){
            var htmlContext =  document.getElementsByClassName('c-main')[0].innerHTML;
            if(htmlContext.indexOf("投票狀況")>0){
                vote_displayUnvoteCount();
            }else if(htmlContext.indexOf("行使表決權")>0){
                vote_voteLaw();
            }else if(htmlContext.indexOf("候選人經歷")>0){
                vote_voteManger();
            }else if(htmlContext.indexOf("確認投票結果")>0){
                vote_confirmResult();
            }else if(htmlContext.indexOf("投票已完成")>0){
                vote_finalpage();
            }
        }
    }
}

function vote_displayUnvoteCount(){
    console.log("vote_displayUnvoteCount");
    if(!verify())return;
    try{
		var unvote = 0;
		var link;
		var items = document.getElementsByClassName("c-actLink");
		for(var i=0; i < items.length; i++) {
			var itemvalue = items[i].getAttribute("onclick");
			if(itemvalue&&itemvalue.indexOf("vote")>0){
				if(unvote==0){
					link = itemvalue;
				}
				unvote++;
			}
		}

		var myhint = document.getElementsByClassName("c-main")[0];
		if(unvote==0){
			myhint.innerHTML = "<div class='pluginclass card '><div class='card-body'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16' style='color: green;'>  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>  <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg> <font style='color: green; font-size:24px;'>\u5C1A\u672A\u6295\u7968:0 </font></div></div><br>"+myhint.innerHTML;
		}else{
			myhint.innerHTML = "<div class='pluginclass card '><div class='card-body'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor' class='bi bi-exclamation-triangle' viewBox='0 0 16 16' style='color: red;'>  <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/>  <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z'/></svg> <font style='color: red; font-size:24px;'>\u5C1A\u672A\u6295\u7968:"+unvote+"</font></div></div><br>"+myhint.innerHTML;
			setTimeout(function(){eval(link); }, 3000);
		}
	}catch(e){}
}


function vote_voteLaw(){
    console.log("vote_voteLaw");
    if(!verify())return;
	try{
		//全部贊成(承認)
		optionAll(0);

		//下一步
		voteObj.checkVote();
	}catch(e){}
}

function vote_voteManger(){
    console.log("vote_voteManger");
    if(!verify())return;
	try{
        voteObj.ignoreVote();
        voteObj.goNext();
	}catch(e){}
}

function vote_confirmResult(){
    console.log("vote_confirmResult");
    if(!verify())return;
	try{
		//確認投票結果
        document.voteform.token.value = '6LcziuMUAAAAAEGJrYyuT489QahTSBYIM427i2l6';
		voteObj.checkMeetingPartner();
	}catch(e){}
}

function vote_finalpage(){
  console.log("vote_finalpage");
  if(!verify())return;
	try{
		//確認
		document.forms[0].submit();
	}catch(e){}
}
