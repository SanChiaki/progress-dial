let value = 13000;


const baseAngle = 100; // 底部空缺
const maxValue = 20000; // 表示的最大值


let base = (baseAngle - 180)/2 -90; // 开始显示的位置
let ratio = value / maxValue;  // 数值占最大值的比例
let angle = (360 - baseAngle) * ratio; // 旋转角度
let num = ~~(angle / 90);
let rest = angle % 90;

let maskList = document.querySelectorAll('.mask');
setTimeout(() => {
  for (let i = 0; i< num; i++) {
    maskList[i].style.transform = `rotate(${(i+1)*90+base}deg)`;
  }
  if (rest !== 0) {
    maskList[num].style.transform = `rotate(${num*90+rest+base}deg)`;
  }
}, 300)