export{}
let j: number = 0;
for(let i=1; i<=20; i++){
    j += 5000;
    if(i == 20){
        console.log(`ขอแสดงความยินดี คุณทำงานครบ 20 ปี คุณได้รับโบนัส ${j} บาท`)
    }
    else{
        console.log(`${i}: โบนัส = ${j} บาท`)
    }
}