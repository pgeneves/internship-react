// Import Slider component from MaterialUI toolkit
import Slider from '@mui/material/Slider';
// Import Button component from MaterialUI toolkit
import Button from '@mui/material/Button';

// This is importing code already existing; Here a function in React library named 'useState'
import { useState } from "react";

function TestMUI() {
    // A state will be used to keep the current color of the Slider
    var [sliderColor, setSliderColor] = useState("red")

    /**
     * The block below is defining a Function that will be usable inside this file
     * 
     * A function is a block of code that can be called from other part of the code
     * The function below is a named function, with 'switchColor' as its name, and with no parameters
     * It can be called using 'switchColor()'
     * 
     * The purpose of that function is to change the 'sliderColor' state
     */
    function switchColor() {
        // console.log is very useful to understand and debug execution of a program
        console.log("Switching color; current color is "+sliderColor);
        if (sliderColor == "red") {
            // The setter function returned by useState must be used to change the state value
            // Changing directly the variable 'sliderColor' will not work and should never be done
            setSliderColor("blue");
        } else {
            setSliderColor("red");
        }
    } 

    /**
     * In the Slider MUI element, a 'style' directive is used to change the style of the Slider 
     * In that case the color of the slider is changed
     * The state variable 'sliderColor' is used to define the color to be used
     * 
     * A Button component is also added
     * The text of the button is defined in between the opening and ending markups
     * Inside the openening markup the button is customized
     * An event handler ('onClick') is defined to intercept click and execute code
     * The code to be executed is provided as an anonymous function, like a function but with no name
     * The code inside the anonymous function will call teh named function 'switchColor' that have been defined above
     * 
     */
    return (
        <>
            <Slider defaultValue={30} style={{color: sliderColor}}/>
            <Button onClick={() => {switchColor();}} variant="outlined">Change color</Button>
        </>
    );
}

// This export directive is required to be able to import and reuse this component in other files
export default TestMUI;


