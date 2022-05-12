var content = "Đây là nguồn duy nhất tôi tạo ra để duy trì những bản hack của mình cũng như những bản hack mà tôi sử dụng từ các nguồn khác và lưu lại tại đây!<br><br>Tôi hi vọng những ai đang sử dụng nó đều thích và ủng hộ những sản phẩm sắp tới <br> <br>Đừng vội xoá nó vì biết đâu bạn lại thấy thứ gì đó hay ho trong này!";

function twDisplayTW() {twDisplay('tw',content,0);}
loaded('tw',twDisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset

function twDisplay(id,content,num) {var delay = 140; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('twDisplay("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}