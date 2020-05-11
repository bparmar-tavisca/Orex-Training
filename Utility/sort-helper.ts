export class SortHelper {

sort(input:Array<string>):Array<string>{
    return input.sort(this.compare);
}

revers(input:Array<string>):Array<string>{
   return this.sort(input).reverse();
}

private compare(a:string,b:string):number {
    let rtValue = 0;
    if( a.length == b.length)
    rtValue = 0;
    if(a.length < b.length)
    rtValue = -1;
    if(a.length > b.length)
    rtValue = 1;
    return rtValue;
}

}
