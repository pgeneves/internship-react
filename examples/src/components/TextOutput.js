// This is importing code already existing; Here a function in React library named 'useState'
import { useState } from "react";

/**
 * Components can be declared as simple Javascript function returning HTML elements using the React special syntax
 * App.js was also a component implemented as a function
 * 
 * The variable 'props' indicated as the function argument represent a Property object
 * It is used by the other part to customize the component when they use it, by passing some values
 * 
 * In that example, the passed properties are expected to contains a 'text' value
 * Is is used below to define what this component will actually display
 * 
 * The component is at the moment used in App.js
 */
function TextOutput(props) {
    // The proper way to have a component customized with some variable is to use a state
    // the useState function imported from React allow to create a state element
    // It accept the initial value of the state as an argument
    // It return 2 functions that are stored in local variables using the syntax with '[...]'
    // The first is a way to get the value of the state, the corresponding variable will be used to access that value
    // The second is the function that must be used to change the value of that state
    var [myText, setText] = useState(props.text)

    // The returned HTML is customized by using the state declared above to specifiy what text should be displayed
    return (
      <h2>{myText}</h2>
    );
  }

  // This export directive is required to be able to import and reuse this component in other files
  export default TextOutput;