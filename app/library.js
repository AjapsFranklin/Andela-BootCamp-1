function dataTypes(myData) {
    switch (typeof(myData)) {

        case "string":
            return myData.length;

        case "number":
            if (myData > 100) return "more than 100";
            else if (myData < 100) return "less than 100";
            else return "equal to 100";

        case "boolean":
            return myData;

        case "function":
            return myData(true);
            /*
                    case "symbol":
                        return "is a Symbol";
*/
        case "object":
            myObject = Object.prototype.toString.call(myData).split(" ")[1];
            myObject = myObject.substring(0, myObject.length - 1);
            
            console.log(myObject);

            if (myData == null) return "no value";

                else if (myObject == "Array" & myData.length >= 3) return myData[2]; //For Array
                else if (myObject == "Array" & myData.length < 3) return undefined;

            if (myObject == "Object") return "contains key: value pair";
            return myObject;

        case "undefined":
            return "no value";
    }
}