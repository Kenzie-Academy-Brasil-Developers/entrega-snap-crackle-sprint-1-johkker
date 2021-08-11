function snapCrackle(maxValue) {

    let texto = ""
    for (let i = 1; i < maxValue; i++) {
        if (i % 5 == 0 && i % 2 != 0) {

            texto += "SnapCrackle, "
            continue;

        }
        if (i % 5 == 0) {

            texto += "Crackle, "
            continue;

        }
        if (i % 2 != 0) {

            texto += "Snap, "
            continue;
        } else {
            texto += i + ", "
        }

    }
    let j =  maxValue
    if (j === maxValue) {
        if (j % 5 == 0 && j % 2 != 0) {

            texto += "SnapCrackle."

        } else if (j % 5 == 0) {

            texto += "Crackle."

        } else if (j % 2 != 0) {

            texto += "Snap."

        } else {
            texto += j + "."
        }

    }
    return texto
}

function snapCracklePrime(maxValue) {

    let texto = ""
    for (let i = 1; i < maxValue; i++) {
        if (i % 5 == 0 && i % 2 != 0) {

            texto += "SnapCrackle"
            if (i == 2 || i == 3 || i == 5 || i == 7 || i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && maxValue % i != 0 && i % 2 != 0) {
                texto += "Prime"
            }
            texto += ", "
            continue;

        }
        if (i % 5 == 0) {

            texto += "Crackle"
            if (i == 2 || i == 3 || i == 5 || i == 7 || i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && maxValue % i != 0 && i % 2 != 0) {
                texto += "Prime"
            }
            texto += ", "
            continue;

        }
        if (i % 2 != 0) {

            texto += "Snap"
            if (i == 2 || i == 3 || i == 5 || i == 7 || i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && maxValue % i != 0 && i % 2 != 0) {

                texto += "Prime"
            }
            texto += ", "
            continue;

        } else {
            if (i == 2) {
                texto += "Prime, "
            } else {
                texto += i + ", "
            }
        }

    }
    let j = maxValue
    if (j === maxValue) {
        if (j % 5 == 0 && j % 2 != 0) {

            texto += "SnapCrackle"
            if (j == 2 || j == 3 || j == 5 || j == 7 || j % 3 != 0 && j % 5 != 0 && j % 7 != 0 && maxValue % j == 0 && j % 2 != 0) {
                texto += "Prime"
            }
            texto += "."

        } else if (j % 5 == 0) {

            texto += "Crackle"
            if (j == 2 || j == 3 || j == 5 || j == 7 || j % 3 != 0 && j % 5 != 0 && j % 7 != 0 && maxValue % j == 0 && j % 2 != 0) {
                texto += "Prime"
            }
            texto += "."

        } else if (j % 2 != 0) {

            texto += "Snap"
            if (j == 2 || j == 3 || j == 5 || j == 7 || j % 3 != 0 && j % 5 != 0 && j % 7 != 0 && maxValue % j == 0 && j % 2 != 0) {
                texto += "Prime"
            }
            texto += "."

        } else {
            if (j == 2) {
                texto += "Prime."
            } else {
                texto += j + "."
            }
        }

    }
    return texto
}