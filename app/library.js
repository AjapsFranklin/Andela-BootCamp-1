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

            if (myData == null) return "no value";

                else if (myObject == "Array" & myData.length >= 3) return myData[2]; //For Array
                else if (myObject == "Array" & myData.length < 3) return undefined;

            if (myObject == "Object") return "contains key: value pair";
            return myObject;

        case "undefined":
            return "no value";
    }
}



//FUNCTION to generate Prime numbers from 2 to N
function getPrimes(myData) {
if (typeof(myData) != "number")
    return "invalid input";

    else if(myData ==0)
        return "input is 0";

    else if(myData < 2)
        return [];

    else if(myData == 2)
        return [2];
    
    else if(myData%1 !=0)
    return "invalid input";

    else if(typeof(myData) == "number"){
       // try{
        var myArray =[];
        myArray.length=myData;
        mySRoot = Math.sqrt(myData);
        //i=2
        //while(i<mySRoot){
        for(i=2; i<mySRoot; i++)
            if (typeof(myArray[i]) == "undefined"){
                 var p=0;
                j=i*i +(p*i);
                while(j < myData){
                      myArray[j] = 0;
                     j=i*i +(++p*i);
                 }
            }
            /*
            if(i%2==0)
                i+=1;
            else i+=2;
        }//End of WHILE
        */
         var finalP=[2];
         for(i=3; i<=myData; i=i+2){
              if(myArray[i]!=false)
                finalP.push(i);
        }
     return finalP;
    }
//}catch(err){}

return "Invalid input";
}


module.exports = {
    dataTypes: dataTypes,
    myPrime:getPrimes
};
