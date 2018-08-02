function countdown(lownum, highnum, mult){
    for(var i = highnum; i >= lownum; i--){
        if(i % mult === 0){
            console.log(i);
        }
    }
}

countdown(0, 160, 4);
