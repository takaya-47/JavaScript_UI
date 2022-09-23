'use strict';
{
  const dts = document.querySelectorAll('dt');
  // 全てのdtにイベントを設定する
  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      // 一つクリックしたら他は閉じる
      dts.forEach(ele => {
        if (dt !== ele) {
          ele.parentNode.classList.remove('appear');
        }
      });
    });
  });
}