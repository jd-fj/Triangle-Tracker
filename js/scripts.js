$(document).ready(function () {
    // let triangleType;
    $("#triangle-sides").submit(function(e) {
        e.preventDefault();
        let side1, side2, side3;
        side1 = parseInt($('#side1').val());
        side2 = parseInt($('#side2').val());
        side3 = parseInt($('#side3').val());

        function triangleType() {
            if (side1===side2 && side2===side3) {
            console.log("equilateral")
            } else {
            console.log("not eq")
            };
        }
        triangleType();


    });
    // function printResults() {
    //     // $() hello user, here's your [triangleType]
    // }
    // printResults();
});



// side1===side2 && side2===side3    =>> equilateral
// side1!=side2 && side2!=side3     =>> scalene


// if (side != 0) {
    // run code
    // else 
    // alert please enter valid side lengths

    // side1 + side2 <= side3
    // side 2 + side3 <= side1
    // side1 + side3 <= side2




    // check if triangle
    // check if equilateral
    // check if scalene
    // else =>> iso