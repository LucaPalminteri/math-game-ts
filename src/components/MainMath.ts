
const MainMath = ():HTMLElement => {

    const component:HTMLElement = document.createElement("main")
    let number1:number = Math.round(Math.random() * 1000)
    let number2:number = Math.round(Math.random() * 1000)
    let arithmeticOperator:string = ["+","-","·","/"][Math.floor(Math.random() * 4)]

    let solution:number = 0;

    switch(arithmeticOperator) {
        case "+": solution = number1 + number2; break;
        case "-": solution = number1 - number2; break;
        case "·": solution = number1 * number2; break;
        case "/": solution = number1 / number2; break;
    }

    component.innerHTML = `
        <p>${number1} ${arithmeticOperator} ${number2}</p>
        <form class="form">
            <input type="number"></input>
            <button type="submit">=</button>
        </form>
    `

    let form = component.getElementsByClassName("form")[0]
    form.addEventListener('submit',(e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        let result:number = e.target.childNodes[1].value;
        let solutionElement:HTMLElement = document.createElement("h4")
        let resultElement:HTMLElement = document.createElement("h4")
        solutionElement.textContent = solution.toString()
        resultElement.textContent = result.toString()
        component.appendChild(solutionElement)
        component.appendChild(resultElement)
        setTimeout(() => {
            location.reload()
        }, 1000);
    })
    return component;
}

export default MainMath