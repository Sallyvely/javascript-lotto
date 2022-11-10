const MissionUtils = require("@woowacourse/mission-utils");

const inputAmountMoney= () =>{
    MissionUtils.Console.readline("구입금액을 입력해 주세요.",lottomoney=>{
        if(lottomoney%1000==0){
            count=lottomoney/1000;
            return count;
        }
        return new Error;
    });
} 
const inputWinNumber= ()=>{
    let lottoNumber=new Set();
    while(lottoNumber.size<6){
        lottoNumber.add(MissionUtils.Random.pickNumberInRange(1,45));
    }
    return lottoNumber;
}

module.exports = Input;