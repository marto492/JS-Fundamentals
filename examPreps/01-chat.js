    function chat(input) {
    let text = input.shift();
    let instructions = input.slice();
    

    while (instructions[0] !== "Reveal") {
        let [instruction, cmd1, cmd2] = instructions[0].split(":|:");
        instructions.shift();

        switch (instruction) {
        case `ChangeAll`:
            let alteredText = text.split("");
            for(let i = 0; i < alteredText.length; i++){
                if(alteredText[i] == cmd1){
                    alteredText[i] = cmd2;
                }
            }
        text = alteredText.join("")
            console.log(alteredText.join(""));
            break;
        case `Reverse`:
            let reversed = cmd1.split("").reverse().join("")
            let firstIndex = text.indexOf(cmd1);
            if(firstIndex == -1){
                console.log(`error`);
                continue;
            }

            let asArr = text.split("")
            let sub = asArr.splice(firstIndex, cmd1.length);
            text = asArr.join("")+reversed;

            console.log(text);
            break;
        case `InsertSpace`:
            let firstHalf = text.slice(0, cmd1);
            let secondHalf = text.slice(cmd1);
            text = firstHalf + " " + secondHalf
            console.log(text);
            break;
        }

        
    }
    console.log(`You have a new text message: ${text}`);
    }

chat([

    'Hiware?uiy are you',
    
    'ChangeAll:|:i:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ]);
