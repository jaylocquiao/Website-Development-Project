function checkVotes() {
    //alert("checkVotes");
    //const vote1 = document.getElementById("vote1");
    //const vote2 = document.getElementById("vote2");
    //const vote3 = document.getElementById("vote3");

    document.cookie = "TestCookie 1 = TestValue 1";
    document.cookie = "TestCookie 2 = TestValue 2";

    var nominees = document.getElementsByName("nominees");
    for (var i = 0; i < nominees.length; i++) {
        if (nominees[i].checked) {
            var id = nominees[i].id;
            var vote = getVote(id); //returns an int, but returns a NaN; check getVote() method
            vote++;
            setVote(id, vote);
            var idNum = i+1;
            document.getElementById("vote" + (idNum)).innerHTML= "" + vote; //handle to the span and setting its current vote to the vote that just got bumped
            alert("Thank you for voting for: " + nominees[i].id);
            return false;
        }

    }

    //document.cookie; //make a cookie
    //document.cookie = key + "=" + value;





    /*
    if (nominees[0].checked) {
        //bump the value
        var cookies = document.cookie; //retrieve cookies
        var cookieArray = cookies.split(";");
        var length = cookieArray.length;
        for (var i = 0; i < length; i++) {
            //alert("Cookies: " + cookieArray[i]);
            var keyValue = cookieArray[i].split("=");
            alert("Key: " + keyValue[0] + "Value: " + keyValue[1]);
            if (keyValue[0] = "vote1") {
                var votes = parseInt(keyValue[1]);
                votes++;
            }
        }

    }
    */


}

function setVote(key, value) {
    document.cookie = key + "=" + value;
}



function getVote(key) {

    var cookies = document.cookie;
    var cookieArray = cookies.split(";");
    for (var i = 0; i < cookieArray.length; i++)  {
        var nameValue = cookieArray[i].split("=");

        var name = nameValue[0].trim();
        var value = nameValue[1].trim();

        //name = name.replace(/ +/g, "");
        if (key == name) {
            return parseInt(value);
        }
    }
    return 0;
}

// function readRegistrationCookie() { //used to be readRegistrationCookie()
//     alert("in readRegistrationCookie();");
// }

function getRegistrationData() {
    var cookies = document.cookie;
    var cookieArray = cookies.split(";");
    //alert("cookie array: " + cookieArray);

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].split("=");
        var id = cookie[0].trim();
        if (id == "123456") {
            var value = cookie[1].trim();
            return value;
        }
    }
    return "";
}

function populateRegistrationForm(data) {
    // alert("HERE");
    // alert("DATA: " + data);


    if (data == "") return;
    var formFieldsArray = data.split("#");
    for (var i = 0; i < formFieldsArray.length; i++) {
        var formField = formFieldsArray[i].split(":");
        // alert("THIS FORMFIELD: " + formField);
        var name = formField[0].trim();
        var value = formField[1].trim();


        //populate the form
        switch (name) {
            case "title":
                document.getElementById("title").value = value;
                break;
            case 'firstname':
                document.getElementById("firstname").value = value;
                break;
            case 'lastname':
                document.getElementById("lastname").value = value;
                break;
            case 'addressLine1':
                document.getElementById("addressLine1").value = value;
                break;
            case 'addressLine2':
                document.getElementById("addressLine2").value = value;
            case 'city':
                document.getElementById("city").value = value;
                break;
            case 'states':
                document.getElementById("states").value = value;
                break;
            case 'zipCode':
                document.getElementById("zipCode").value = value;
                break;
            case 'telephone':
                document.getElementById("telephone").value = value;
                break;
            case 'email':
                document.getElementById("email").value = value;
                break;
            case 'url':
                document.getElementById("url").value = value;
                break;
            case 'position':
                document.getElementById("position").value = value;
                break;
            case 'companyName':
                document.getElementById("companyName").value = value;
                break;
            case 'meal':
                if (value == "Meal Pack") {
                    document.getElementById("mealPack").checked = true;
                    break;
                } else {
                    document.getElementById("day2Dinner").checked = true;
                    break;
                }
                // document.getElementById("meal").checked = value;
                // break;
            case 'billingFName':
                document.getElementById("billingFName").value = value;
                break;
            case 'billingLName':
                document.getElementById("billingLName").value = value;
                break;
            case 'cardType':
                if (value == "Visa") {
                    document.getElementById("Visa").checked = true;
                    break;
                } else if (value == "Mastercard") {
                    document.getElementById("Mastercard").checked = true;
                    break;
                } else {
                    document.getElementById("AmericanExpress").checked = true;
                    break;
                }
                // document.getElementById("cardType").checked = value;
                // break;
            case 'cardNumber':
                document.getElementById("cardNumber").value = value;
                break;
            case 'csv':
                document.getElementById("csv").value = value;
                break;
            case 'expirationYear':
                document.getElementById("expirationYear").value = value;
                break;
            case 'expirationMonth':
                document.getElementById("expirationMonth").value = value;
                break;

            case 'session1':
                if (value == "a") {
                    document.getElementById("sessionOneE0").checked = true;
                    break;
                } else if (value == "b") {
                    document.getElementById("sessionOneE1").checked = true;
                    break;
                } else {
                    document.getElementById("sessionOneE2").checked = true;
                    break;
                }
                // document.getElementById("sessionOne").checked = value;
                // break;
            case 'session2':
                if (value == "d") {
                    document.getElementById("sessionTwoE0").checked = true;
                    break;
                } else if (value == "e") {
                    document.getElementById("sessionTwoE1").checked = true;
                    break;
                } else {
                    document.getElementById("sessionTwoE2").checked = true;
                    break;
                }
                // document.getElementById("sessionTwo").checked = value;
                // break;
            case 'session3':
                if (value == "g") {
                    document.getElementById("sessionThreeE0").checked = true;
                    break;
                } else if (value == "h") {
                    document.getElementById("sessionThreeE1").checked = true;
                    break;
                } else {
                    document.getElementById("sessionThreeE2").checked = true;
                    break;
                }

                // document.getElementById("sessionThree").checked = value;
                // break;

            // case 'session1':
            //     if (value == a) {
            //         document.getElementById("sessionOneE0").checked = true;
            //     } else if (value == b) {
            //         document.getElementById("sessionOneE1").checked = true;
            //     } else if (value == c) {
            //         document.getElementById("sessionOneE2").checked = true;
            //     }
            //     break;
            //
            // case 'session2':
            //     if (value == d) {
            //         document.getElementById("sessionTwoE0").checked = true;
            //     } else if (value == e) {
            //         document.getElementById("sessionTwoE1").checked = true;
            //     } else if (value == f) {
            //         document.getElementById("sessionTwoE2").checked = true;
            //     }
            //     break;
            //
            // case 'session3':
            //     if (value == g) {
            //         document.getElementById("sessionThreeE0").checked = true;
            //     } else if (value == h) {
            //         document.getElementById("sessionThreeE1").checked = true;
            //     } else if (value == i) {
            //         document.getElementById("sessionThreeE2").checked = true;
            //     }
            //     break;


        }
    }
}

function checkId() {
    var confId = document.getElementById("confId").value.trim();
    if (confId == "123456") {
        var formData = getRegistrationData();
        alert("FORM DATA: " + formData);
        populateRegistrationForm(formData);
    }
}



function createRegistrationCookie() {
    var formData = "";

    //Personal Information
    var title = document.getElementById("title").value.trim();
    formData += "title:" + title;

    var firstname = document.getElementById("firstname").value.trim();
    formData += "#firstname:" + firstname;

    var lastname = document.getElementById("lastname").value.trim();
    formData += "#lastname:" + lastname;

    var addressLine1 = document.getElementById("addressLine1").value.trim();
    formData += "#addressLine1:" + addressLine1;

    var addressLine2 = document.getElementById("addressLine2").value.trim();
    formData += "#addressLine2:" + addressLine2;

    var city = document.getElementById("city").value.trim();
    formData += "#city:" + city;

    var states = document.getElementById("states").value.trim();
    formData += "#states:" + states;

    var zipCode = document.getElementById("zipCode").value.trim();
    formData += "#zipCode:" + zipCode;

    var telephone = document.getElementById("telephone").value.trim();
    formData += "#telephone:" + telephone;

    var email = document.getElementById("email").value.trim();
    formData += "#email:" + email;

    //Company Information
    var url = document.getElementById("url").value.trim();
    formData += "#url:" + url;

    var position = document.getElementById("position").value.trim();
    formData += "#position:" + position;

    var companyName = document.getElementById("companyName").value.trim();
    formData += "#companyName:" + companyName;

    //Dining Information
    const mealPlan = document.getElementsByName("meal");
    if (mealPlan[0].checked) {
        var meal = "mealPack"
        formData += "#meal:" + meal;
    } else {
        var meal = "day2Dinner";
        formData += "#meal:" + meal;
    }

    // var meal = document.getElementById("meal").value.trim();
    // formData += "#meal:" + meal;

    //Billing Information
    var billingFName = document.getElementById("billingFName").value.trim();
    formData += "#billingFName:" + billingFName;
    var billingLName = document.getElementById("billingLName").value.trim();
    formData += "#billingLName:" + billingLName;

    const cardtype = document.getElementsByName("cardType");
    if (cardtype[0].checked) {
        var cardType = "Visa";
        formData += "#cardType:" + cardType;
    } else if (cardtype[1].checked) {
        var cardType = "Mastercard";
        formData += "#cardType:" + cardType;
    } else {
        var cardType = "AmericanExpress";
        formData += "#cardType:" + cardType;
    }

    // var cardType = document.getElementById("cardType").value.trim();
    // formData += "#cardType:" + cardType;


    var cardNumber = document.getElementById("cardNumber").value.trim();
    formData += "#cardNumber:" + cardNumber;
    var csv = document.getElementById("csv").value.trim();
    formData += "#csv:" + csv;
    var expirationYear = document.getElementById("expirationYear").value.trim();
    formData += "#expirationYear:" + expirationYear;
    var expirationMonth = document.getElementById("expirationMonth").value.trim();
    formData += "#expirationMonth:" + expirationMonth;

    //Workshop Information
    const firstSession = document.getElementsByName("session1");
    if (firstSession[0].checked) {
        var session1 = "a";
        formData += "#session1:" + session1;
    } else if (firstSession[1].checked) {
        var session1 = "b";
        formData += "#session1:" + session1;
    } else {
        var session1 = "c";
        formData += "#session1:" + session1;
    }

    const secondSession = document.getElementsByName("session2");
    if (secondSession[0].checked) {
        var session2 = "d";
        formData += "#session2:" + session2;
    } else if (secondSession[1].checked) {
        var session2 = "e";
        formData += "#session2:" + session2;
    } else {
        var session2 = "f";
        formData += "#session2:" + session2;
    }

    const thirdSession = document.getElementsByName("session3");
    if (thirdSession[0].checked) {
        var session3 = "g";
        formData += "#session3:" + session3;
    } else if (thirdSession[1].checked) {
        var session3 = "h";
        formData += "#session3:" + session3;
    } else {
        var session3 = "i";
        formData += "#session3:" + session3;
    }

    // var sessionOne = document.getElementById("sessionOne").value.trim();
    // formData += "#sessionOne:" + sessionOne;
    //
    //
    // var sessionTwo = document.getElementById("sessionTwo").value.trim();
    // formData += "#sessionTwo:" + sessionTwo;
    //
    //
    // var sessionThree = document.getElementById("sessionThree").value.trim();
    // formData += "#sessionThree:" + sessionThree;

    //alert("123456 = " + formData);
    // alert("formData: " + formData);
    document.cookie = "123456=" + formData;
}

function submitRegistration() {
    if (checkWorkshops()) {
        createRegistrationCookie(); //createRegistrationCookie
        return true;
    }
    return false;
}




/* CODE WHEN USING getElementById
if (vote1.checked) {
    alert("Thanks for voting for " + vote1.value);
    return true;
} else if (vote2.checked)  {
    alert("Thanks for voting for " + vote2.value);
    return true;
} else if (vote3.checked) {
    alert("Thanks for voting for " + vote3.value);
    return true;
}
 */