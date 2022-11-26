"use strict";
/*
Aufgabe: L08.1 Generative Kunst
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 26.11.22
Quellen: -
*/
var L08_GenerativeKunst;
(function (L08_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let random = Math.round(Math.random() * 2);
    console.log(random);
    console.log("Canvas");
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        if (random == 0 || random == 1) {
            drawCircles({ x: canvas.width, y: canvas.height });
            drawRects({ x: canvas.width, y: canvas.height });
            drawTriangles({ x: canvas.width, y: canvas.height });
            drawEllipses({ x: canvas.width, y: canvas.height });
        }
        else if (random == 2) {
            drawCircles({ x: canvas.width, y: canvas.height });
            drawLines({ x: canvas.width, y: canvas.height });
        }
        else if (random == 3) {
            drawCircles({ x: canvas.width, y: canvas.height });
            drawLines({ x: canvas.width, y: canvas.height });
        }
    }
    function drawBackground() {
        console.log("Background");
        let h = Math.round(Math.random() * 360);
        let s = Math.round(Math.random() * 100);
        let l = Math.round(Math.random() * 100);
        console.log("HSL(" + h + ", " + s + "%, " + l + "%" + ")");
        crc2.fillStyle = "HSL(" + h + ", " + s + "%, " + l + "%" + ")";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCircles(_position) {
        console.log("Circles");
        let nCircles = Math.round((Math.random() * 30) + 10);
        for (let drawn = 0; drawn < nCircles; drawn++) {
            let radiusCircle = Math.round((Math.random() * 100) + 20);
            if (radiusCircle > 50 && nCircles > 15) {
                radiusCircle -= 10;
                nCircles -= 5;
            }
            let x = Math.round(Math.random() * innerWidth);
            let y = Math.round(Math.random() * innerHeight);
            let h = Math.round(Math.random() * 360);
            let s = Math.round(Math.random() * 100);
            let l = Math.round(Math.random() * 100);
            crc2.beginPath();
            crc2.arc(x, y, radiusCircle, 0, 2 * Math.PI);
            switch (random) {
                case 0:
                    crc2.fillStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    crc2.fill();
                    break;
                case 1:
                    crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    break;
                case 2:
                    nCircles += 20;
                    crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    let random = Math.round((Math.random() * 10) + 1);
                    for (let drawn = 1; drawn < random; drawn++) {
                        crc2.arc(x, y, radiusCircle + 4, 0, 2 * Math.PI);
                        crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                        radiusCircle -= 2;
                    }
                    break;
                case 3:
                    crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    nCircles += 10;
                    for (let drawn = 0; drawn < nCircles; drawn++) {
                        let radiusCircle = Math.round((Math.random() * 100) + 20);
                        crc2.arc(x, y, radiusCircle, 0, 2 * Math.PI);
                        crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    }
                    break;
            }
            crc2.closePath();
            crc2.stroke();
        }
    }
    function drawRects(_position) {
        console.log("Rects");
        let nRects = Math.round((Math.random() * 30) + 10);
        for (let drawn = 0; drawn < nRects; drawn++) {
            let x = Math.round(Math.random() * innerWidth);
            let y = Math.round(Math.random() * innerHeight);
            let weight = Math.round((Math.random() * 200) + 20);
            let height = Math.round((Math.random() * 200) + 20);
            let h = Math.round(Math.random() * 360);
            let s = Math.round(Math.random() * 100);
            let l = Math.round(Math.random() * 100);
            crc2.beginPath();
            crc2.rect(x, y, weight, height);
            switch (random) {
                case 0:
                    crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    break;
                case 1:
                    crc2.fillStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    crc2.fill();
                    break;
            }
            crc2.closePath();
            crc2.stroke();
        }
    }
    function drawTriangles(_position) {
        console.log("Triangles");
        let nTriangles = Math.round((Math.random() * 10) + 1);
        for (let drawn = 0; drawn < nTriangles; drawn++) {
            let x = Math.round(Math.random() * innerWidth - 200);
            let y = Math.round(Math.random() * innerHeight - 200);
            let a = Math.round(Math.random() * innerHeight - 200);
            let b = Math.round(Math.random() * innerHeight - 200);
            let h = Math.round(Math.random() * 360);
            let s = Math.round(Math.random() * 100);
            let l = Math.round(Math.random() * 100);
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(a, b);
            crc2.lineTo(b, x);
            switch (random) {
                case 0:
                    crc2.fillStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    crc2.fill();
                    break;
                case 1:
                    crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    break;
            }
            crc2.closePath();
            crc2.stroke();
        }
    }
    function drawEllipses(_position) {
        console.log("Ellipses");
        let nEllipses = Math.round((Math.random() * 30) + 10);
        for (let drawn = 0; drawn < nEllipses; drawn++) {
            let x = Math.round(Math.random() * innerWidth);
            let y = Math.round(Math.random() * innerHeight);
            let radiusX = Math.round((Math.random() * 70) + 10);
            let radiusY = Math.round((Math.random() * 70) + 10);
            let rotation = Math.round(Math.random() * 360);
            let z = Math.round((Math.random() * 3));
            switch (z) {
                case 0:
                    z = 0.5;
                    break;
                case 1:
                    z = 1;
                    break;
                case 2:
                    z = 1.5;
                    break;
                case 3:
                    z = 2;
                    break;
            }
            let h = Math.round(Math.random() * 360);
            let s = Math.round(Math.random() * 100);
            let l = Math.round(Math.random() * 100);
            crc2.beginPath();
            crc2.ellipse(x, y, radiusX, radiusY, rotation, 0, z * Math.PI);
            switch (random) {
                case 0:
                    crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    break;
                case 1:
                    crc2.fillStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
                    crc2.fill();
                    break;
            }
        }
        crc2.closePath();
        crc2.stroke();
    }
    function drawLines(_position) {
        console.log("Square");
        let nLines = Math.round((Math.random() * 100) + 20);
        let lineWidth = Math.round(Math.random() * 5);
        for (let drawn = 0; drawn < nLines; drawn++) {
            let x = Math.round(Math.random() * innerWidth);
            let y1 = Math.round(Math.random() * innerHeight);
            let y2 = Math.round(Math.random() * innerHeight);
            let h = Math.round(Math.random() * 360);
            let s = Math.round(Math.random() * 100);
            let l = Math.round(Math.random() * 100);
            crc2.beginPath();
            crc2.moveTo(x, y1);
            crc2.lineTo(y1, y2);
            crc2.lineWidth = lineWidth;
            crc2.strokeStyle = "HSLA(" + h + ", " + s + "%, " + l + "%" + ")";
            crc2.closePath();
            crc2.stroke();
        }
    }
})(L08_GenerativeKunst || (L08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map