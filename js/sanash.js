const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    let target = document.getElementById(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
    };
    window.requestAnimationFrame(step);
   };
   //#endregion - end of - number counter animation

   document.addEventListener("DOMContentLoaded", () => {
        counterAnim("count1", 0, 10, 1000);
        counterAnim("count2", 0, 600, 1500);
        counterAnim("count3", 0,100, 2000);
        counterAnim("count4", 0, 90, 2500);
   });