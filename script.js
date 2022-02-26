let container = document.createElement("div");
container.classList.add("container","text-center");
document.body.append(container);


let span = document.createElement("span");
span.classList.add("content");
span.innerHTML = "10";
container.appendChild(span);

let count = 10;
setTimeout(()=>{
    count = count-1
    span.innerHTML = count
    setTimeout(()=>{
        count = count-1
        span.innerHTML = count
        setTimeout(()=>{
            count = count-1
            span.innerHTML = count
            setTimeout(()=>{
                count = count-1
                span.innerHTML = count
                setTimeout(()=>{
                    count = count-1
                    span.innerHTML = count
                    setTimeout(()=>{
                        count = count-1
                        span.innerHTML = count
                        setTimeout(()=>{
                            count = count-1
                            span.innerHTML = count
                            setTimeout(()=>{
                                count = count-1
                                span.innerHTML = count
                                setTimeout(()=>{
                                    count = count-1
                                    span.innerHTML = count
                                    setTimeout(()=>{
                                        count = count-1
                                        span.innerHTML = "HAPPY INDEPENDENCE DAY"
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)