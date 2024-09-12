
// normal function
function multiplyNormal( x, y, z ) {
    return x* y* z;
}

// getting implemented immediately
multiplyNormal(2,3,4);

// curried function
function multiply(x) {
    return function(y) {
        return function(z) {
            return x*y*z;
        }
    }
}

multiply(2)(3)(4);

//infinite currying

function infiCurry(x) {
    return function(y) {
        if(y) return infiCurry(x*y)
        return y
    }
}

// how it is used in application
// currying using closures

function multiplybyN(x) {
    return function(y) {
        return x*y;
    }
}

const multiplybyFour = multiplybyN(4);

// currying using bind

function multiplyby(a,b) {
    return a*b;
}

const multiplybyThree = multiplyby.bind(this, 3);
