// URL

/*
https:// -> Protocols
glauniversity.in -> Domain
/uploadAttendence.aspx -> Path Parameter
?access_key=Mja6348bsjdhhsk== -> Query Parameter

?param1=test1&param2=test2 -> Query Parameters
#notes -> hash value (we can direclty go to notes section on this page)
*/

/*
https:// -> (Protocol)
www.flipkart.com -> (Domain)
/fire-boltt-ninja-calling-pro-plus-46-5mm-1-83-bluetooth-calling-ai-voice-smartwatch -> (Path parameter)
/p -> (Path parameter)
/itm867974696b635 -> (Path parameter)
?pid=SMWGGZ74PKPHE8WZ&lid=LSTSMWGGZ74PKPHE8WZISP9RR&marketplace=FLIPKART&store=ajy&srno=b_1_5&otracker=browse&fm=organic&iid=b7ab26cd-7288-45c3-b28a-3bd24a686af0.SMWGGZ74PKPHE8WZ.SEARCH&ppt=clp&ppn=the-new-smart-wearables-at-store&ssid=g3ud24ejrk0000001771221320183&ov_redirect=true&ov_redirect=true -> (Query Params)
*/


// ========================= CLI Parameters =========================

// [
// 	"node",
// 	"app.js",
// 	"add",
// 	"1",
// 	"2",
// ]


// const name = process.argv[2]
// console.log("Name => ", name)


const processes = process.argv[2]
const val1 = process.argv[3]
const val2 = process.argv[4]


if (processes === "add") console.log("Addition : ", Number(val1) + Number(val2));
else if (processes === "multi") console.log("Multiplication : ", Number(val1) * Number(val2));

