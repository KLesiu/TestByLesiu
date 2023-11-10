const button = document.querySelector('button')
const check=()=>{
   const inputs = document.querySelectorAll('input')
   const labels = document.querySelectorAll('label')
   const answers = ["Semantycznych tagów np <main></main>","div","src","Jest to informacja, dla osób używających czytników stron o tym co znajduję się na zdjęciu","h","O tym, że blok ten jest stopką dokumentu","nav","Wszystkie odpowiedzi są poprawne","Tak","Zaokrągla rogi bloku","Dwie odpowiedzi są poprawne","opacity","Tak","Zależy od urządzenia","Frameworkiem CSS pozwalającym na łatwiejsze stylowanie"]
   const allPoints = 15
   let yourPoints = 0
   inputs.forEach((ele,index)=>{
        if(ele.value === answers[index]){
            labels[index].classList.add('green')
            labels[index].classList.remove('red')
            yourPoints++
        }else{
            labels[index].classList.add('red')
            labels[index].classList.remove('green')

        }
   })
   const scoreP = document.querySelector('#yourScore')
   const score = yourPoints/allPoints
   scoreP.textContent=`${score*100}% - ${allPoints}/${yourPoints}`
   if(yourPoints > 8) setTimeout(()=>alert('Zapraszamy i witamy w świecie JavaScriptu!'),1000)
}
button.addEventListener("click",check)
