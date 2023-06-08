const oddSelection=document.querySelectorAll(".main__container__teams")
const button=document.querySelectorAll(".main__container__teams__odds")
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

button.forEach(function(btn){
    btn.addEventListener("click", function(e){
        console.log(btn.nextSibling)
        button.forEach(function(btnremoved){
            
            if(btnremoved.classList.contains("orange")){
                btnremoved.classList.remove("orange")
            }
        })
        btn.classList.add("orange")
    })
    
})