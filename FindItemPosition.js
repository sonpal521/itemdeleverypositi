
//Item delivery needs to take place for a circle
// of size B. Suppose we start from the position C (given) 
//then find the position where the Ath item will be delivered.


// B ==> Size of circle
// A ==> Number of items
// C ==> Initial position
 
function lastPosition(A, B, C)
{
    if (A <= B - C + 1)
    return A + C - 1;

    A = A - (B - C + 1);
    return (A % B == 0) ? B : (A % B);
}
 
// Driver code
let A = 8;
let B = 5;
let C = 2;
console.log(lastPosition(A, B, C));


// Output: 4


