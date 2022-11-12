export default function(sec:number) {
    
    setInterval(()=> {
        console.clear()
        sec++
        console.log(sec);
    },1000)

}