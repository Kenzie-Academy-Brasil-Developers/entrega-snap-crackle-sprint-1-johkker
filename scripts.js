function snapCrackle(maxValue) {
    let texto = ""
    for(let i = 1; i < maxValue; i++){
        if(i%2 != 0) {
            texto += "Snap, "
            continue;
        } if(i%5 == 0 && i%2 == 0) {
            texto += "SnapCrackle, "
            continue;
        } if(i%5 == 0) {
            texto += "Crackle, "
            continue;
        } else {
            texto += i + ", "
        }

    }
    let j
    if(j = maxValue){
         if(j%2 != 0) {
            texto += "Snap."
        
        } else if(j%5 == 0 && j%2 == 0) {
            texto += "SnapCrackle."
        
        } else if(j%5 == 0) {
            texto += "Crackle."
        
        } else {
            texto += j + "."
        }

    }
    return texto
}
