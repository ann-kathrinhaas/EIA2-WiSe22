"use strict";
/*
Aufgabe: L08.2 Vogelhaus
Name: Ann-Kathrin Haas
Matrikel: 271111
Datum: 03.12.22
Quellen: -
*/
var L08_Vogelhaus;
(function (L08_Vogelhaus) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let crc2Heading;
    let golden = 0.62; // Goldener Schnitt
    console.log(golden);
    function handleLoad(_event) {
        let canvas = document.querySelector("#canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        console.log("Canvas");
        let horizon = crc2.canvas.height * golden;
        let canvasHeading = document.querySelector("#canvasHeading");
        if (!canvasHeading)
            return;
        crc2Heading = canvasHeading.getContext("2d");
        drawBirdHeading();
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 475, y: 135 }, { x: 125, y: 75 });
        drawCloud({ x: 675, y: 75 }, { x: 125, y: 50 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "white", "lightgrey");
        drawTrees();
        drawSnowman({ x: 100, y: 550 });
        drawChristmasTree({ x: 400, y: 460 });
        drawBirdHouse({ x: 650, y: 300 });
        drawBirds();
        drawSnowflakes();
    }
    function drawArcHeading(_x, _y, _radius, _startAngle, _endAngle, _color) {
        crc2Heading.beginPath();
        crc2Heading.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2Heading.fillStyle = _color;
        crc2Heading.fill();
        crc2Heading.closePath();
    }
    function drawLineHeading(_x1, _y1, _x2, _y2, _color, _lineWidth) {
        crc2Heading.beginPath();
        crc2Heading.moveTo(_x1, _y1);
        crc2Heading.lineTo(_x2, _y2);
        crc2Heading.strokeStyle = _color;
        crc2Heading.lineWidth = _lineWidth;
        crc2Heading.lineCap = "round";
        crc2Heading.stroke();
        crc2Heading.closePath();
    }
    function drawTriangleHeading(_x1, _y1, _x2, _y2, _x3, _y3, _color) {
        crc2Heading.beginPath();
        crc2Heading.moveTo(_x1, _y1);
        crc2Heading.lineTo(_x2, _y2);
        crc2Heading.lineTo(_x3, _y3);
        crc2Heading.fillStyle = _color;
        crc2Heading.fill();
        crc2Heading.closePath();
    }
    function drawBirdHeading() {
        crc2.save();
        drawLineHeading(20, 68, 20, 64, "red", 1); // Mitte
        drawLineHeading(20, 68, 16, 64, "red", 1); // links
        drawLineHeading(20, 68, 24, 64, "red", 1); // links
        drawArcHeading(20, 83, 16, 0, 2 * Math.PI, "HSLA(27, 100%, 50%, 0.952"); // Kopf
        drawArcHeading(16, 78, 3.5, 0, 2 * Math.PI, "white"); // Auge links
        drawArcHeading(16, 78, 1.5, 0, 2 * Math.PI, "black"); // Auge links
        drawArcHeading(24, 78, 3.5, 0, 2 * Math.PI, "white"); // Auge rechts
        drawArcHeading(24, 78, 1.5, 0, 2 * Math.PI, "black"); // Auge rechts
        drawTriangleHeading(19, 83, 19, 90, 29, 87, "HSL(60, 93%, 72%)"); // Schnabel
        crc2.restore();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "HSL(190, 20%, 90%)"); // AD
        gradient.addColorStop(0.8, "white"); // AD
        gradient.addColorStop(1, "HSL(190, 20%, 90%)") // AD
        ;
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun");
        let r1 = 30;
        let r2 = 100;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud");
        let nParticles = 80; // AD
        let radiusParticle = 25;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y); // schiebt Koordinatensysten an richtige Posotion
            crc2.fill(particle); // draw particle
            crc2.restore(); // an Wolkenposition
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawRect(_x, _y, _w, _h, _color) {
        crc2.beginPath();
        crc2.rect(_x, _y, _w, _h);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _color) {
        crc2.beginPath();
        crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawLine(_x1, _y1, _x2, _y2, _color, _lineWidth, _lineCap) {
        crc2.beginPath();
        crc2.moveTo(_x1, _y1);
        crc2.lineTo(_x2, _y2);
        crc2.strokeStyle = _color;
        crc2.lineWidth = _lineWidth;
        switch (_lineCap) {
            case 1:
                crc2.lineCap = "butt";
                break;
            case 2:
                crc2.lineCap = "round";
                break;
        }
        crc2.stroke();
        crc2.closePath();
    }
    function drawPlane(_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4, _color) {
        crc2.beginPath();
        crc2.moveTo(_x1, _y1);
        crc2.lineTo(_x2, _y2);
        crc2.lineTo(_x3, _y3);
        crc2.lineTo(_x4, _y4);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawTriangle(_x1, _y1, _x2, _y2, _x3, _y3, _color) {
        crc2.beginPath();
        crc2.moveTo(_x1, _y1);
        crc2.lineTo(_x2, _y2);
        crc2.lineTo(_x3, _y3);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawTreeSmall(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawRect(0, 0, 15, -20, "HSL(27, 70%, 25%)"); // Stamm
        drawTriangle(-30, -10, 7.5, -70, 45, -10, "HSL(120, 78%, 20%)"); // Dreieck unten
        drawTriangle(-20, -40, 7.5, -90, 35, -40, "HSL(120, 78%, 20%)"); // Dreieck Mitte
        drawTriangle(-10, -70, 7.5, -100, 25, -70, "HSL(120, 78%, 20%)"); // Dreieck oben
        crc2.restore();
    }
    function drawTreeBig(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawRect(0, 0, 20, -30, "HSL(27, 70%, 25%)"); // Stamm
        drawTriangle(-40, -20, 10, -80, 60, -20, "HSL(120, 78%, 20%)"); // Dreieck unten
        drawTriangle(-30, -60, 10, -110, 50, -60, "HSL(120, 78%, 20%)"); // Dreieck Mitte
        drawTriangle(-20, -90, 10, -140, 40, -90, "HSL(120, 78%, 20%)"); // Dreieck oben
        crc2.restore();
    }
    function drawTrees() {
        console.log("Trees");
        let nTrees = (Math.round(Math.random() * 15) + 5);
        let horizon = crc2.canvas.height * golden;
        // Baumreihe hinten
        for (let drawn = 0; drawn <= nTrees; drawn++) {
            crc2.save();
            let x = Math.round(Math.random() * innerWidth);
            let y = horizon;
            drawTreeSmall({ x: x, y: y });
            crc2.translate(x, y);
            crc2.restore();
        }
        // Baumreihe vorne
        for (let drawn = 0; drawn <= nTrees; drawn++) {
            crc2.save();
            let x = Math.round(Math.random() * innerWidth);
            let y = horizon;
            drawTreeBig({ x: x, y: horizon + 40 });
            crc2.translate(x, y);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawChristmasTreeBall(_x, _y, _radius, _startAngle, _endAngle) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.closePath();
    }
    function drawChristmasTree(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawRect(0, 0, 30, -40, "HSL(27, 70%, 25%)");
        drawTriangle(-60, -30, 15, -110, 90, -30, "HSL(120, 73%, 32%)"); // Dreieck unten
        drawTriangle(-50, -70, 15, -150, 80, -70, "HSL(120, 73%, 32%)"); // Dreieck Mitte
        drawTriangle(-40, -110, 15, -180, 70, -110, "HSL(120, 73%, 32%)"); // Dreieck oben
        crc2.beginPath();
        drawChristmasTreeBall(-10, -90, 5, 0, 2 * Math.PI);
        let color1 = Math.round(Math.random() * 3);
        switch (color1) {
            case 0:
                crc2.fillStyle = "red";
                break;
            case 1:
                crc2.fillStyle = "blue";
                break;
            case 2:
                crc2.fillStyle = "orange";
                break;
        }
        crc2.fill();
        crc2.beginPath();
        drawChristmasTreeBall(30, -50, 5, 0, 2 * Math.PI);
        let color2 = Math.round(Math.random() * 3);
        switch (color2) {
            case 0:
                crc2.fillStyle = "yellow";
                break;
            case 1:
                crc2.fillStyle = "green";
                break;
            case 2:
                crc2.fillStyle = "violet";
                break;
        }
        crc2.fill();
        crc2.beginPath();
        drawChristmasTreeBall(40, -100, 5, 0, 2 * Math.PI);
        let color3 = Math.round(Math.random() * 3);
        switch (color3) {
            case 0:
                crc2.fillStyle = "pink";
                break;
            case 1:
                crc2.fillStyle = "purple";
                break;
            case 2:
                crc2.fillStyle = "mediumseagreen";
                break;
        }
        crc2.fill();
        crc2.beginPath();
        drawChristmasTreeBall(20, -130, 5, 0, 2 * Math.PI);
        let color4 = Math.round(Math.random() * 3);
        switch (color4) {
            case 0:
                crc2.fillStyle = "aqua";
                break;
            case 1:
                crc2.fillStyle = "salmon";
                break;
            case 2:
                crc2.fillStyle = "teal";
                break;
        }
        crc2.fill();
        crc2.beginPath();
        drawChristmasTreeBall(-30, -40, 5, 0, 2 * Math.PI);
        let color5 = Math.round(Math.random() * 3);
        switch (color5) {
            case 0:
                crc2.fillStyle = "bisque";
                break;
            case 1:
                crc2.fillStyle = "chocolate";
                break;
            case 2:
                crc2.fillStyle = "slateblue";
                break;
        }
        crc2.fill();
        // Stern
        /*
        drawTriangle(7.5, -170, 15, -190, 22.5, -170, "yellow"); // oben
        drawTriangle(7.5, -170, 15, -150, 22.5, -170, "yellow"); // unten
        drawTriangle(15, -175, 15, -165, -7.5, -170, "yellow"); // links
        drawTriangle(15, -175, 15, -165, 35, -170, "yellow"); // rechts */
        drawTriangle(7.5, -170, 15, -190, 22.5, -170, "yellow"); // oben
        drawTriangle(7.5, -170, 0, -155, 22.5, -170, "yellow"); // unten links
        drawTriangle(7.5, -170, 30, -155, 22.5, -170, "yellow"); // unten rechts
        drawTriangle(15, -175, 15, -165, -7.5, -180, "yellow"); // links
        drawTriangle(15, -175, 15, -165, 35, -180, "yellow"); // rechts 
        crc2.restore();
    }
    function drawSnowman(_position) {
        console.log("Snowman");
        let r = [50, 35, 20];
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // body
        drawArc(0, -50, r[0], 0, 2 * Math.PI, "white");
        drawArc(0, -115, r[1], 0, 2 * Math.PI, "white");
        drawArc(0, -160, r[2], 0, 2 * Math.PI, "white");
        // hat
        drawRect(-11, -200, 22, 25, "black");
        drawLine(-20, -175, 20, -175, "black", 3, 2);
        drawLine(-11, -182, 11, -182, "red", 5, 1);
        // eyes
        drawArc(-6, -168, 2, 0, 2 * Math.PI, "black");
        drawArc(6, -168, 2, 0, 2 * Math.PI, "black");
        // nose
        drawTriangle(-2, -163, -2, -157, 7, -160, "HSL(27, 82%, 51%)");
        // mouth
        drawArc(-8, -154, 1.5, 0, 2 * Math.PI, "black");
        drawArc(-4, -152.5, 1.5, 0, 2 * Math.PI, "black");
        drawArc(0, -152, 1.5, 0, 2 * Math.PI, "black");
        drawArc(4, -152.5, 1.5, 0, 2 * Math.PI, "black");
        drawArc(8, -154, 1.5, 0, 2 * Math.PI, "black");
        // arcs
        drawArc(0, -120, 3, 0, 2 * Math.PI, "black");
        drawArc(0, -100, 3, 0, 2 * Math.PI, "black");
        drawArc(0, -80, 3, 0, 2 * Math.PI, "black");
        // arms
        drawLine(30, -110, 70, -145, "HSL(27, 70%, 25%)", 2, 1);
        drawLine(59, -135, 75, -138, "HSL(27, 70%, 25%)", 2, 1);
        drawLine(59, -135, 65, -151, "HSL(27, 70%, 25%)", 2, 1);
        drawLine(-30, -110, -70, -145, "HSL(27, 70%, 25%)", 2, 1);
        drawLine(-59, -135, -75, -138, "HSL(27, 70%, 25%)", 2, 1);
        drawLine(-59, -135, -65, -151, "HSL(27, 70%, 25%)", 2, 1);
        crc2.restore();
    }
    function drawBirdHouse(_position) {
        console.log("Bird House");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // Füße vom Haus
        drawLine(-65, 180, -65, 250, "HSL(35, 29%, 30%)", 5, 1); // l3
        drawLine(-40, 180, -40, 250, "HSL(35, 29%, 30%)", 5, 1); // l4
        drawLine(65, 180, 65, 250, "HSL(35, 29%, 30%)", 5, 1); // l5
        drawLine(40, 180, 40, 250, "HSL(35, 29%, 30%)", 5, 1); // l6
        drawRect(-60, 80, 120, 60, "HSL(36, 28%, 42%)"); // r – Rückseite
        // Flächen
        drawPlane(-80, 80, -80, 180, -60, 140, -60, 80, "HSL(36, 29%, 51%)"); // f1 – Seite links
        drawPlane(80, 80, 80, 180, 60, 140, 60, 80, "HSL(36, 29%, 51%)"); // f2 – Seite rechts
        drawPlane(-60, 140, -80, 180, 80, 180, 60, 140, "HSL(36, 44%, 62%)"); // f3 – Boden
        // Dach
        drawTriangle(0, 0, -80, 80, 80, 80, "HSL(35, 29%, 30%)"); // t
        drawLine(0, 0, -90, 90, "HSL(35, 29%, 30%)", 5, 2); // l1
        drawLine(0, 0, 90, 90, "HSL(35, 29%, 30%)", 5, 2); // l2
        crc2.restore();
    }
    function drawTail(_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4, _x5, _y5, _x6, _y6, _x7, _y7, _color) {
        crc2.beginPath();
        crc2.moveTo(_x1, _y1);
        crc2.lineTo(_x2, _y2);
        crc2.lineTo(_x3, _y3);
        crc2.lineTo(_x4, _y4);
        crc2.lineTo(_x5, _y5);
        crc2.lineTo(_x6, _y6);
        crc2.lineTo(_x7, _y7);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawBird1Right(_position, _colorBody, _colorHead, _colorWing) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawTail(-13, 3, -20, 8, -18, 3, -20, 0, -18, -3, -20, -8, -13, -3, _colorWing); // Schwanzfedern
        drawEllipse(0, 0, 15, 10, 0, 0, 2, _colorBody); // Körper
        drawEllipse(-4, -2, 8, 10, -0.5, 0, 1, _colorWing); // Flügel
        drawArc(12, -12, 9, 0, 2 * Math.PI, _colorHead); // Kopf
        drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
        drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
        drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
        drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
        drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
        crc2.restore();
    }
    function drawBird1Left(_position, _colorBody, _colorHead, _colorWing) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawTail(13, -3, 20, -8, 18, -3, 20, 0, 18, 3, 20, 8, 13, 3, _colorWing); // Schwanzfedern
        drawEllipse(0, 0, 15, 10, 0, 0, 2, _colorBody); // Körper
        drawEllipse(4, -2, 8, 10, 0, 0.5, 1, _colorWing); // Flügel
        drawArc(-12, -12, 9, 0, 2 * Math.PI, _colorHead); // Kopf
        drawArc(-14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
        drawArc(-14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
        drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
        drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
        drawTriangle(-20, -15, -20, -9, -28, -12, "HSL(27, 82%, 51%)"); // Schnabel
        crc2.restore();
    }
    function drawBird2Right(_position, _colorBody, _colorHead, _colorWing) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawEllipse(0, -5, 15, 15, -0.4, 0, 1, _colorBody); // Körper
        drawEllipse(-2, -2, 7, 8, -0.4, 0, 1, _colorWing); // Flügel
        drawArc(12, -12, 9, 0, 2 * Math.PI, _colorHead); // Kopf
        drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
        drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
        drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
        drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
        drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
        crc2.restore();
    }
    function drawBird2left(_position, _colorBody, _colorHead, _colorWing) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawEllipse(0, -5, 15, 15, 0, 0.4, 1, _colorBody); // Körper
        drawEllipse(-2, -2, 7, 8, -0.4, 0, 1, _colorWing); // Flügel
        drawArc(-12, -12, 9, 0, 2 * Math.PI, _colorBody); // Kopf
        drawArc(-14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
        drawArc(-14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
        drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
        drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
        drawTriangle(-20, -15, -20, -9, -28, -12, "HSL(27, 82%, 51%)"); // Schnabel
        crc2.restore();
    }
    function drawFlyingBirdRight(_position, _colorBody, _colorHead, _colorWing) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawArc(0, 0, 11, 0, 2 * Math.PI, _colorBody); // Körper
        drawTriangle(-10, 5, -18, -8, 4, -12, _colorBody); // Körper
        drawTriangle(-10, -10, -10, -20, 2, -8, _colorWing); // Flügel
        drawArc(-4, -7, 6, 0, 2 * Math.PI, _colorWing); // Flügel
        drawArc(12, -12, 9, 0, 2 * Math.PI, _colorHead); // Kopf
        drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
        drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
        drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
        crc2.restore();
    }
    function drawFlyingBirdLeft(_position, _colorBody, _colorHead, _colorWing) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        drawArc(0, 0, 11, 0, 2 * Math.PI, _colorBody); // Körper
        drawTriangle(10, 5, 18, -8, -4, -12, _colorBody); // Körper
        drawTriangle(10, -10, 10, -20, -2, -8, _colorWing); // Flügel
        drawArc(4, -7, 6, 0, 2 * Math.PI, _colorWing); // Flügel
        drawArc(-12, -12, 9, 0, 2 * Math.PI, _colorHead); // Kopf
        drawArc(-14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
        drawArc(-14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
        drawTriangle(-20, -15, -20, -9, -28, -12, "HSL(27, 82%, 51%)"); // Schnabel
        crc2.restore();
    }
    function drawBirds() {
        console.log("Birds");
        crc2.save();
        let nFlyingBirdsRight = (Math.round(Math.random() * 7));
        let nFlyingBirdsLeft = (Math.round(Math.random() * 7));
        let random = Math.round(Math.random() * 1);
        console.log(nFlyingBirdsRight);
        console.log(nFlyingBirdsLeft);
        if (nFlyingBirdsRight >= 4 && nFlyingBirdsLeft >= 4) {
            switch (random) {
                case 0:
                    nFlyingBirdsRight -= 3;
                    break;
                case 1:
                    nFlyingBirdsLeft -= 3;
                    break;
            }
            console.log(nFlyingBirdsRight);
            console.log(nFlyingBirdsLeft);
        }
        if (nFlyingBirdsRight <= 2 || nFlyingBirdsLeft <= 2) {
            switch (random) {
                case 0:
                    nFlyingBirdsRight += 2;
                    break;
                case 1:
                    nFlyingBirdsLeft += 2;
                    break;
            }
            console.log(nFlyingBirdsRight);
            console.log(nFlyingBirdsLeft);
        }
        for (let drawn = 0; drawn < nFlyingBirdsRight; drawn++) {
            crc2.save();
            let x = Math.round((Math.random() * 700) + 50);
            let y = Math.round((Math.random() * 200) + 50);
            let randomColor = Math.round(Math.random() * 2);
            switch (randomColor) {
                case 0:
                    drawFlyingBirdRight({ x: x, y: y }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                    break;
                case 1:
                    drawFlyingBirdRight({ x: x, y: y }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                    break;
                case 2:
                    drawFlyingBirdRight({ x: x, y: y }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                    break;
            }
            crc2.translate(x, y);
            crc2.restore();
        }
        for (let drawn = 0; drawn < nFlyingBirdsLeft; drawn++) {
            crc2.save();
            let x = Math.round((Math.random() * 700) + 50);
            let y = Math.round((Math.random() * 200) + 50);
            let randomColor = Math.round(Math.random() * 2);
            switch (randomColor) {
                case 0:
                    drawFlyingBirdLeft({ x: x, y: y }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                    break;
                case 1:
                    drawFlyingBirdLeft({ x: x, y: y }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                    break;
                case 2:
                    drawFlyingBirdLeft({ x: x, y: y }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                    break;
            }
            crc2.translate(x, y);
            crc2.restore();
        }
        let nStandingBirds1Right = Math.round(Math.random() * 5);
        let nStandingBirds1Left = Math.round(Math.random() * 5);
        let nStandingBirds2Right = Math.round(Math.random() * 5);
        let nStandingBirds2Left = Math.round(Math.random() * 5);
        for (let drawn = 0; drawn < nStandingBirds1Right; drawn++) {
            crc2.save();
            let x = Math.round((Math.random() * 500) + 220);
            let y = Math.round((Math.random() * 500) + 450);
            let randomColor = Math.round(Math.random() * 2);
            switch (randomColor) {
                case 0:
                    drawBird1Right({ x: x, y: y }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                    break;
                case 1:
                    drawBird1Right({ x: x, y: y }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                    break;
                case 2:
                    drawBird1Right({ x: x, y: y }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                    break;
            }
            crc2.translate(x, y);
            crc2.restore();
        }
        for (let drawn = 0; drawn < nStandingBirds1Left; drawn++) {
            crc2.save();
            let x = Math.round((Math.random() * 500) + 220);
            let y = Math.round((Math.random() * 500) + 450);
            let randomColor = Math.round(Math.random() * 2);
            switch (randomColor) {
                case 0:
                    drawBird1Left({ x: x, y: y }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                    break;
                case 1:
                    drawBird1Left({ x: x, y: y }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                    break;
                case 2:
                    drawBird1Left({ x: x, y: y }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                    break;
            }
            crc2.translate(x, y);
            crc2.restore();
        }
        for (let drawn = 0; drawn < nStandingBirds2Right; drawn++) {
            crc2.save();
            let x = Math.round((Math.random() * 500) + 220);
            let y = Math.round((Math.random() * 500) + 450);
            let randomColor = Math.round(Math.random() * 2);
            switch (randomColor) {
                case 0:
                    drawBird2Right({ x: x, y: y }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                    break;
                case 1:
                    drawBird2Right({ x: x, y: y }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                    break;
                case 2:
                    drawBird2Right({ x: x, y: y }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                    break;
            }
            crc2.translate(x, y);
            crc2.restore();
        }
        for (let drawn = 0; drawn < nStandingBirds2Left; drawn++) {
            crc2.save();
            let x = Math.round((Math.random() * 500) + 220);
            let y = Math.round((Math.random() * 500) + 450);
            let randomColor = Math.round(Math.random() * 2);
            switch (randomColor) {
                case 0:
                    drawBird2left({ x: x, y: y }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                    break;
                case 1:
                    drawBird2left({ x: x, y: y }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                    break;
                case 2:
                    drawBird2left({ x: x, y: y }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                    break;
            }
            crc2.translate(x, y);
            crc2.restore();
        }
        // Vögel im Häuschen
        let random1 = Math.round(Math.random() * 1);
        let random2 = Math.round(Math.random() * 1);
        // linker Vogel
        let x1 = [600, 610];
        let y1 = [450, 430];
        // rechter Vogel
        let x2 = [670, 690];
        let y2 = [440, 455];
        let randomColor = Math.round(Math.random() * 2);
        switch (random1) {
            case 0:
                switch (random2) {
                    case 0:
                        switch (randomColor) {
                            case 0:
                                drawBird1Right({ x: x1[0], y: y1[0] }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                                break;
                            case 1:
                                drawBird1Right({ x: x1[0], y: y1[0] }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                                break;
                            case 2:
                                drawBird1Right({ x: x1[0], y: y1[0] }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                                break;
                        }
                        //drawBird1Right({x: x1[0], y: y1[0]});
                        switch (randomColor) {
                            case 0:
                                drawBird2left({ x: x2[0], y: y2[0] }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                                break;
                            case 1:
                                drawBird2left({ x: x2[0], y: y2[0] }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                                break;
                            case 2:
                                drawBird2left({ x: x2[0], y: y2[0] }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                                break;
                        }
                        //drawBird2left({x: x2[0], y: y2[0]});
                        break;
                    case 1:
                        switch (randomColor) {
                            case 0:
                                drawBird1Right({ x: x1[1], y: y1[1] }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                                break;
                            case 1:
                                drawBird1Right({ x: x1[1], y: y1[1] }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                                break;
                            case 2:
                                drawBird1Right({ x: x1[1], y: y1[1] }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                                break;
                        }
                        //drawBird1Right({x: x1[1], y: y1[1]});
                        switch (randomColor) {
                            case 0:
                                drawBird2left({ x: x2[1], y: y2[1] }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                                break;
                            case 1:
                                drawBird2left({ x: x2[1], y: y2[1] }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                                break;
                            case 2:
                                drawBird2left({ x: x2[1], y: y2[1] }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                                break;
                        }
                        //drawBird2left({x: x2[1], y: y2[1]});
                        break;
                }
                break;
            case 1:
                switch (random2) {
                    case 0:
                        switch (randomColor) {
                            case 0:
                                drawBird2Right({ x: x1[0], y: y1[0] }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                                break;
                            case 1:
                                drawBird2Right({ x: x1[0], y: y1[0] }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                                break;
                            case 2:
                                drawBird2Right({ x: x1[0], y: y1[0] }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                                break;
                        }
                        //drawBird2Right({x: x1[0], y: y1[0]});
                        switch (randomColor) {
                            case 0:
                                drawBird1Left({ x: x2[0], y: y2[0] }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                                break;
                            case 1:
                                drawBird1Left({ x: x2[0], y: y2[0] }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                                break;
                            case 2:
                                drawBird1Left({ x: x2[0], y: y2[0] }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                                break;
                        }
                        //drawBird1Left({x: x2[0], y: y2[0]});
                        break;
                    case 1:
                        switch (randomColor) {
                            case 0:
                                drawBird2Right({ x: x1[1], y: y1[1] }, "HSL(0, 100%, 50%)", "HSL(0, 80%, 40%)", "HSL(0, 92%, 65%)");
                                break;
                            case 1:
                                drawBird2Right({ x: x1[1], y: y1[1] }, "HSL(240, 100%, 50%)", "HSL(240, 93%, 35%)", "HSL(240, 82%, 63%)");
                                break;
                            case 2:
                                drawBird2Right({ x: x1[1], y: y1[1] }, "HSL(350, 87%, 69%)", "HSL(350, 93%, 60%)", "HSL(350, 100%, 88%)");
                                break;
                        }
                        //drawBird2Right({x: x1[1], y: y1[1]});
                        switch (randomColor) {
                            case 0:
                                drawBird1Left({ x: x2[1], y: y2[1] }, "HSL(300, 76%, 72%)", "HSL(300, 94%, 65%)", "HSL(300, 58%, 79%)");
                                break;
                            case 1:
                                drawBird1Left({ x: x2[1], y: y2[1] }, "HSL(120, 67%, 51%)", "HSL(120, 91%, 38%)", "HSL(120, 61%, 69%)");
                                break;
                            case 2:
                                drawBird1Left({ x: x2[1], y: y2[1] }, "HSL(39, 84%, 59%)", "HSL(39, 94%, 51%)", "HSL(39, 82%, 68%)");
                                break;
                        }
                        //drawBird1Left({x: x2[1], y: y2[1]});
                        break;
                }
                break;
        }
        crc2.restore();
    }
    function drawSnowflakes() {
        console.log("Snowflakes");
        let nSnowflakes = (Math.round(Math.random() * 200) + 70);
        crc2.save();
        for (let drawn = 0; drawn < nSnowflakes; drawn++) {
            let r1 = Math.round((Math.random() * 4) + 1);
            let r2 = Math.round((Math.random() * 6) + 4);
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            let x = Math.round(Math.random() * innerWidth);
            let y = Math.round(Math.random() * innerHeight);
            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y, r2, 0, 2 * Math.PI);
            crc2.translate(x, y);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Vogelhaus || (L08_Vogelhaus = {}));
//# sourceMappingURL=script.js.map