$(document).ready(function () {
    // let triangleType;
    $("#triangle-sides").submit(function(e) {
        e.preventDefault();
        let side1, side2, side3;
        side1 = parseInt($('#side1').val());
        side2 = parseInt($('#side2').val());
        side3 = parseInt($('#side3').val());

        function triangleType() {
            if (side1>0 && side2>0 && side3>0) {
                if (side1===side2 && side2===side3) {
                return ("equilateral")
                } else if (side1!=side2 && side2!=side3 && side3!=side1) {
                return ("scalene")
                } else {
                return ("isosceles")
                };
            } else {
            alert("this is not a triangle")
            };
        }
        const triangle = triangleType();
        // console.log(triangle)
        $("#print-results").text(triangle)


    });

});




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