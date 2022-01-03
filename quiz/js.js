const data = [
    {
        question: "XXXXXXXXX 0",
        a: "qqqqqqqqqqqqqqqqqq",
        b: "w",
        c: "e",
        d: "r",
        answer: "a",
    },
    {
        question: "XXXXXXXXX 1",
        a: "qq",
        b: "wwwwwwwwwwwwwww",
        c: "ee",
        d: "rr",
        answer: "b",
    },
    {
        question: "XXXXXXXXX 2",
        a: "qqq",
        b: "www",
        c: "eeeeeeeeeeeeeeeee",
        d: "rrr",
        answer: "c",
    },
    {
        question: "XXXXXXXXX 3 ",
        a: "q",
        b: "w",
        c: "e",
        d: "rrrrrrrrrrrrrrrr",
        answer: "d",
    },
    
    
]

const question_El = document.querySelector("h2");
const a_El = document.querySelector("#a").nextElementSibling;
const b_El = document.querySelector("#b").nextElementSibling;
const c_El = document.querySelector("#c").nextElementSibling;
const d_El = document.querySelector("#d").nextElementSibling;
const submit_El = document.querySelector("#submit");
const input_El = document.querySelectorAll("input");
const scoreText_El = document.querySelector(".score-text");

let score = 0;
let count = 0;
var currentQuiz = data[0];


function loadQuiz(){
    currentQuiz = data[count];
    question_El.innerText =currentQuiz["question"];
    a_El.innerText = currentQuiz["a"];
    b_El.innerText = currentQuiz["b"];
    c_El.innerText = currentQuiz["c"];
    d_El.innerText = currentQuiz["d"];

}



function isItCorrect(par){
    for(let i=0; i<input_El.length; i++){
        if(input_El[i].checked){
            return input_El[i].id == par ?  true : false
        }
    }
}


loadQuiz();

submit_El.addEventListener("click", function(){
        if(isItCorrect(currentQuiz["answer"])){
            score+=2;
            count++;
            scoreText_El.innerText = `Score: ${score}`;
            if(count<data.length){
                loadQuiz();
            }
            else{
                alert("finished");
                var container = document.querySelector(".container")
                container.innerHTML = `<button onclick="location.reload()"> Reload </button>`;
                
            }
        }
        else{
            score--;
            scoreText_El.innerText = `Score: ${score}`;

            alert("false")
        }
})



