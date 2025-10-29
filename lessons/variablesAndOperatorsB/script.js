// refs: var01add
        // js
        // this names a function
        function createParagraph() {
            // this defines a variable that links to the document and creates an element
            const para = document.createElement("p");
            // this defines the content of that variable and avoids innerHTML 
            // which can be insecure
            para.textContent = "button CLICKKKKKERRRRR";
            // I think this is telling the new created variable where to go?
            // yep, document.body is the location and append means END of that location
            // what is within the appendChild is the thing to be inserted
            document.body.appendChild(para);
        }

// in a macro sense - the below code allows js to affect html without running inline 
// js commands. like "on-click"

        // looks like we are definiing a new variable called buttons that maps to all
        // of the buttons in the document.
        const buttons = document.querySelectorAll("button");
        // not super familiar with for statements but there appears to be a new const
        // called button now, and it is relating to the buttons variable we just made

        // nope not at all, so this is a LOOP! hello LOOP!
        // loops take a variable (like buttons which is tied to a list/array 
        // like-thing of all the buttons) and cycle through the list members one at a time.
        // to loop through them and look at them it calls each one a "button" in this
        // case because we assigned the const button of buttons(the list its pulling from)
        // in this code specifically, it is looping through each of the buttons and granting
        // them an event listener so that way each button thats been looped through triggers
        // the code, so without looping through each one of the buttons there would be no
        // <button> elements to be triggering anything

        // cleaner understanding:
        // for indicates a loop, loops create a NodeList, in this case from the var buttons
        // the individual items within the nodeList are temporarily assigned the const
        // value of button as that loop or cycle runs individually. so the const is fine
        // because it only persists through that item's iteration of the loop.
        // main benefit of using a loop is that you dont need to add an Event Listener
        // to each of the buttons individually in this case.

        // final sharpening:
        // for indicates a loop here, this loop is useful for the NodeList that was defined
        // by the previous querySelectorAll that stored all of the buttons in one place.
        // the loop runs by temporarily assigning a new constant of button to each individual
        // member of the nodeList in block *scope (i originally said block time here its scope).
        //  Which is a single cycle or pass of the loop.
        // this creation of a constant allows the button variable's actions (in this case
        // event listener) to be applied to all of the members of the node list, without
        // assigning an addEventListener to each one individually.
        for (const button of buttons) {
            // this one i think i understand. it is basically linking button elements
            // to listen for clicks that will trigger the function we created initially
            button.addEventListener("click", createParagraph)
        }
