export default class Popover {

    constructor(element, value){
        this.popover = undefined;
        this.popValue = value;
        this.element = element 
    }

    createPopower(){
        const { left, top } = this.element.getBoundingClientRect();
        const popoverElement = document.createElement('DIV');
        const popoverTitle = document.createElement('DIV');
        const popoverText = document.createElement('DIV');
        const popoverArroy = document.createElement('DIV');
        popoverElement.classList.add('popover')
        popoverTitle.classList.add('popovertitle')
        popoverText.classList.add('popovertext')
        popoverArroy.classList.add('popoverArroy')
        popoverTitle.textContent = this.popValue.title;
        popoverText.textContent = this.popValue.body;
        document.body.appendChild(popoverElement);
        popoverElement.appendChild(popoverTitle);
        popoverElement.appendChild(popoverText);
        popoverElement.appendChild(popoverArroy);
        popoverElement.style.left = left - (this.element.offsetHeight/2)-15  +'px';
        popoverElement.style.top = top - (popoverElement.offsetHeight+7) +'px';
        this.popover = popoverElement;
        //console.log(this.popover)
    }

    removePopower(){
        console.log(this.popover)
        this.popover.remove();
        
    }

}