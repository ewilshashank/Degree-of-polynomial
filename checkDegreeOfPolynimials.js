const polynomialDegree = (polynomial) => {
    const terms = polynomial.replace(/\s/g,'').split(/(?=[+-])/);

    let degree = 0;

    for(let term of terms){

        if(term.match(/[a-z]/i)){
            
            const exponent = parseInt(term.split('^')[1]);

            if(exponent > degree){
                degree = exponent;
            }
        }
    }
    return degree;
} 

const polynomial = '-3y^4 + 2x^2 - 5x + 1';
const degree = polynomialDegree(polynomial);
console.log(`The degree of the polynomial '${polynomial}' is ${degree}.`);