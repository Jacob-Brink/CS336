const HINT_CONTAINER_CLASS = "hint";
const HINT_ACTIVATOR_CLASS = "hint-activator";
const HINT_HIDDEN_CLASS = "hint-hidden";
const HINT_SHOWN_CLASS = "hint-shown";

// set_visibility sets button, hint element to the appropriate values and CSS styles according to visible parameter
const set_visibility = (hintElem, button, visible) => {
    // if visible show element, else hide element through adding and removing CSS classes
    hintElem.classList.remove(visible ? HINT_HIDDEN_CLASS : HINT_SHOWN_CLASS);
    hintElem.classList.add(visible ? HINT_SHOWN_CLASS : HINT_HIDDEN_CLASS);

    // switch next visibility; if hidden now (false), set to reveal (true) for next click
    button.innerText = visible ? 'Hide' : 'Reveal';
    button.onclick = function () { set_visibility(hintElem, button, !visible); };
}

// creates a button to be used for revealing or hiding a hint
const createButton = (parent) => {  	
    const button = document.createElement("button");

    // https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-the-first-child
    // inserts button element before other element
    parent.insertBefore(button, parent.firstChild);
    return button;
};

// wait for elements on page to load
window.onload = function() {
    
    document.querySelectorAll(`.${HINT_CONTAINER_CLASS}`).forEach(e => {
	// create button for revealing and hiding
	const buttonElem = createButton(e);

	//assume only one hint is written and that it uses the class hint-hidden
	const hintElem = e.querySelectorAll(`.${HINT_HIDDEN_CLASS}`)[0];

	// initiate each hint to being hidden
	set_visibility(hintElem, buttonElem, false);
    });

}
