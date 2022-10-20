/*
Aufgabe: L02 EventInspector
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 20.10.22
Quellen: -
*/

namespace EventInspector {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        let div0: HTMLElement = <HTMLElement>document.querySelector("#div0");
        let div1: HTMLElement = <HTMLElement>document.querySelector("#div1");
        let button: HTMLElement = <HTMLElement>document.querySelector("#button");

        document.addEventListener("mousemove", setInfoBox);
        
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);

        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);

        div1.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);

        button.addEventListener("click", logCustomEvent);

        document.addEventListener("CustomEvent", showCustomEvent);
    }

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let span: HTMLElement = <HTMLElement>document.querySelector("#span");
        
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";

        span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "event's target: " + _event.target;
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

    
    function logCustomEvent(_event: MouseEvent): void {
        let event: CustomEvent = new CustomEvent("CustomEvent", {bubbles: true});
        let button: HTMLElement = <HTMLElement>document.querySelector("#button");
        button.dispatchEvent(event);
    }

    function showCustomEvent(_event: Event): void {
        console.log(_event);
    }

}