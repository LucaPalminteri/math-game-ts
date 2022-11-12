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
        <h4>${solution}</h4>
        <form>
            <input type="number"></input>
            <button type="submit">=</button>
        </form>
    `
    return component;
}

export default MainMath