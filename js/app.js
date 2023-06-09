const oddSelection = document.querySelectorAll(".main__container__teams");
const button = document.querySelectorAll(".main__container__teams__odds");
const selectedBets=document.getElementById("selected-bets")
// console.log(oddSelection)
// oddSelection.forEach(function(row){
//     console.log(row)
// row.addEventListener("focus",function(e){
// console.log(e)
//         // button.forEach(function(btn){
// //     btn.addEventListener("click", function(e){
// //         console.log(e)
// //         button.forEach(function(btn){
// //             if(btconsolen.classList.contains("orange")){
// //                 btn.classList.remove("orange")
// //             }
// //         })
// //         btn.classList.add("orange")
// //     })

// // })
// })

// })

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parentEl = btn.parentElement;
    const childrenEl = parentEl.children;

    for (let i = 0; i < childrenEl.length; i++) {
      childrenEl[i].classList.remove("orange");
    }

    btn.classList.add("orange");

    const selectedElements = Array.from(selectedBets.children)

    selectedElements.forEach(child=>{
        child.style.display="none";
    })
    console.log(selectedBets);
    const betDetails=document.createElement("div");
    betDetails.innerHTML = `
   <p> ${parentEl.parentElement.children[0].children[1].textContent} vs ${parentEl.parentElement.children[0].children[2].textContent}</p>
   <p class="odd-data"><span>1x2</span> <span class="odd">${btn.textContent}</span> </p>
    `
    selectedBets.appendChild(betDetails)
    console.log(parentEl.parentElement.children[0].children[1])
  });
});
