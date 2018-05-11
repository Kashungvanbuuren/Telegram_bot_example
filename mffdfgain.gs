function doPost(e){
  var estringa = JSON.parse(e.postData.contents);
  var d = new Date();
  var SpreadSheet = SpreadsheetApp.openById("1C2kbkwPcMYoNWGBYrehzqwJtmiUXij1RocgfigVnzRU");
  var Sheet = SpreadSheet.getSheetByName("紀錄收到的訊息");
  var LastRow = Sheet.getLastRow();
  Sheet.getRange(LastRow+1, 1).setValue(d);  
  Sheet.getRange(LastRow+1, 2).setValue(estringa);
}


//=================================================================
//https://api.telegram.org/botKEY/setWebhook?url=https://XXX
var id = "  "
var key = "577043174:"
//=================================================================
function sendtext(){
        var payload = {
        "method": "sendMessage",
        'chat_id': id,
          'text': "HI",
    }     
    start(payload);
}
//===================================以下是標準發送跟記下Log===========
 function start(payload) {
     var data = {
         "method": "post",
         "payload": payload
     }
     var d = new Date();
     var SpreadSheet = SpreadsheetApp.openById("1C2kbkwPcMYoNWGBYrehzqwJtmiUXij1RocgfigVnzRU");
     var Sheet = SpreadSheet.getSheetByName("紀錄發送的訊息");
     var LastRow = Sheet.getLastRow();
     Sheet.getRange(LastRow + 1, 1).setValue(d);
     Sheet.getRange(LastRow + 1, 3).setValue(data);
     var returned = UrlFetchApp.fetch("https://api.telegram.org/bot" + key + "/", data);
     Sheet.getRange(LastRow + 1, 2).setValue(d);
}
//=================================================================
