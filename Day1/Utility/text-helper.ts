export class TestHelper {

    findOccurance(text:string, charToSearch:string,startPosition:number):Array<number>{
        var retValue = [];
        do{
            var index = text.indexOf(charToSearch,0);
            if(index != -1){
               text =  text.substr(index+1);
               retValue.push(index);
            }
        }while(index != -1)
     return retValue;
    }

    countSentences(text:string):number{
        let retValue = 0;
        retValue = text.split(".").length-1;
        return retValue;
    }
// = value.slice(0,1).toUpperCase()+value.slice(1,value.length
    formatText(text:string):string{
        let tempStr = text.split(".");
        tempStr.forEach((value,index,)=>{
            tempStr[index] = tempStr[index].trim();
            tempStr[index] = value.slice(0,1).toUpperCase() + value.slice(1,value.length);});
        return tempStr.join(' ').toString();
    }
}

