export{}
let cupSize: [string,number]= ['S',60];
let ownCup: boolean = true;
if(ownCup == true){
    console.log(`กาแฟขนาด ${cupSize[0]} ราคาปกติ ${cupSize[1]}`);
    console.log(`ได้รับส่วนลด 5% ราคาสุทธิ ${cupSize[1]*0.05} บาท`);
}
else{
    console.log(`กาแฟขนาด ${cupSize[0]} ราคาปกติ ${cupSize[1]}`);
}
/*  S 60
    M 80
    L 100*/
