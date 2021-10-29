function fontSizeChange() {
    const text = document.querySelector("p.mess-with-me").style.fontSize = '40px';
    const backGroundColor = document.querySelector("p.mess-with-me").style.backgroundColor = 'green'; 
    console.log(text); 
    console.log(backGroundColor); 
    
    } 
    fontSizeChange();
    
    
    function hideSecondDinosaurImage() {
        const image = document.querySelector("#hide-me").style.visibility = 'hidden'; 
        console.log(image); 
    }
    hideSecondDinosaurImage(); 
    
    function firstDinosaurImage() {
        const image = document.querySelector("#triceratops").style.width = '340px'; 
        console.log(image);
    
    }
    firstDinosaurImage(); 
    
    function textColorChangeClick() {
        const textColor = document.querySelector("span.mess-with-me"); 
        console.log(textColor); 
        textColor.addEventListener('click', function() {
            textColor.style.color = 'orange';
        })
    }
    textColorChangeClick();
    
    function dinoRedBorder() {
        const dino = document.querySelector("#triceratops"); 
        console.log(dino);
        dino.addEventListener('click', function() {
            dino.style.border = '1px solid red';
        })
    }
    dinoRedBorder();
    
    function featherDinoTransparency() {
        const featheryDino = document.querySelector("#feathers"); 
        console.log(featheryDino);
        featheryDino.addEventListener('click', function() {
            featheryDino.style.opacity = 0.5;
        }) 
    }
    featherDinoTransparency(); 
    
    function switchBackground() {
        const img = document.querySelector("img");
        const rowColor = document.querySelectorAll(".section");
        console.log(img); 
        console.log (rowColor);
        img.rowColor.addEventListener('click', function() {
        img.rowColor.style.backgroundColor = 'purple'; 
        //so lost.................. 
        })
    }
    switchBackground();
    
    function hoverImage() {
        const big = document.querySelector("#biggify");
        console.log(big); 
        big.addEventListener('onmouseover', function() {
            big.style.onmouseover = 'width 200px';
        })
    }
    hoverImage();