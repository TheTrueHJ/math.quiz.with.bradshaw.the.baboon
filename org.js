u1 = localStorage.getItem("username1");
u2 = localStorage.getItem("username2");
num1 = localStorage.getItem("number1");
num2 = localStorage.getItem("number2");
console.log(u1)

s1 = 0;

s2 = 0;

document.getElementById("q").innerHTML = "Question Turn: " + u1
us1 = "q"
document.getElementById("a").innerHTML = "Answer Turn: " + u2
us2 = "a"
document.getElementById("nums").innerHTML = num1 + " X " + num2

a = num1 * num2

function Check(){
    ans = document.getElementById("ans").value;
    if(ans == a){
        if(us2 = "a"){
            s2 = s2 + 1
            document.getElementById("us2").innerHTML = "User 2 Score: " + s2
            document.getElementById("a").innerHTML = "Answer Turn: " + u1
            us1 = "a"
            document.getElementById("q").innerHTML = "Question Turn: " + u2
            us2 = "q"
            document.getElementById("nums").innerHTML = "Round Over"
            localStorage.setItem("q", u2);
            window.alert("Proceeding to next round");
            window.location = "nums.html"
        }
        if(us1 = "a"){
            s1 = s1 + 1
            document.getElementById("us1").innerHTML = "User 1 Score: " + s1
            document.getElementById("q").innerHTML = "Question Turn: " + u1
            us1 = "q"
            document.getElementById("q").innerHTML = "Answer Turn: " + u2
            us2 = "a"
            document.getElementById("nums").innerHTML = "Round Over"
            localStorage.setItem("q", u1);
            window.alert("Proceeding to next round");
            window.location = "nums.html"
        }

    }
}