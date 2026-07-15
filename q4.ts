export{}
let good:[string,number,boolean][] = [['Laptop',15,true],['Desk',50,false],['Glass Vase',5,true],['Monitor',10,true],['Chair',100,false]];
for(let i=0; i<good.length; i++){
    if(good[i][2] == true){
        console.log(`${good[i][0]}: จำนวน ${good[i][1]} เครื่อง แตกหักง่าย`);
    }
}
