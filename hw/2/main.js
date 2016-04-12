const w = 200, h = 260, capH = 45;

/**
 * Bootsraps js
 */
(function() {
  drawEnergy();

  drawMobile();
})();

/**
 * Draw power and energy specialization ad
 */
function drawEnergy() {
  var ctx = document
            .getElementById("powerEnergyCanvas")
            .getContext("2d");
   drawEnergyLogo(ctx);
  drawCaption(ctx, "התמחות בהספק ואנרגיה");
}

/**
 * Draw power and energy specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawEnergyLogo(ctx) {
  var bgColor = "#0557a3";
  drawFilledRect(ctx, bgColor, 0, 0, w, h - capH);
  drawEnergyLogoCircle(ctx);
  drawZigZagBg(ctx);
  drawEnergyLogoZigZag(ctx);
  drawEnergyLogoArrow(ctx);
}

/**
 * Draw mobile technologies specialization ad
 */
function drawMobile() {
  var ctx = document
            .getElementById("mobileTechCanvas")
            .getContext("2d");
  drawMobileLogo(ctx);
  drawCaption(ctx, "התמחות בתוכנה למערכות ניידות");
}

/**
 * Draw mobile technologies specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawMobileLogo(ctx) {
  var bgColor = "#e45b15";
  drawFilledRect(ctx, bgColor, 0, 0, w, h - capH);
  drawIpad(ctx);
}

/**
 * Draw zigzag background on power and energy specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawZigZagBg(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 20);
  ctx.lineTo(85, 80);
  ctx.lineWidth = 30;
  ctx.strokeStyle = '#0557a3';
  ctx.stroke();
}

/**
 * Draw caption on given canvas contex
 * @param  CanvasRenderingContext2D ctx
 */
function drawCaption(ctx, text) {
  ctx.font = "16px Arial";
  ctx.fillStyle = '#515151';
  ctx.fillText(text,0,h - 20);

}

/**
 * Draw zigzag on power and energy specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawEnergyLogoZigZag(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 20);
  ctx.lineTo(85, 80);
  ctx.lineTo(120, 80);
  ctx.lineTo(110, 120);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

/**
 * Draw the circle on on power and energy specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawEnergyLogoCircle(ctx) {
  var centerX = w / 2,
      centerY = (h - capH) / 2,
      radius = 70;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 7;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

/**
 * Draw arrow on power and energy specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawEnergyLogoArrow(ctx) {
  ctx.beginPath();
  ctx.moveTo(95, 115);
  ctx.lineTo(125, 120);
  ctx.lineTo(104, 145);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.fill();
}

/**
 * Draw zigzag background on power and energy specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawFilledRect(ctx, color, x, y, w, h) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

/**
 * Draw the ipad on mobile specialization logo
 * @param  CanvasRenderingContext2D ctx
 */
function drawIpad(ctx) {
  drawIpadCorners(ctx);
  drawIpadButton(ctx);
  drawIpadDisplay(ctx);
}

/**
 * @param  CanvasRenderingContext2D ctx
 */
function drawIpadCorners(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 10;

  ctx.arc(56, 35, 5, 1 * Math.PI, 1.5 * Math.PI);
  ctx.moveTo(55, 30);
  ctx.lineTo(144, 30);
  ctx.arc(144, 35, 5, 1.5 * Math.PI, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 35);
  ctx.lineWidth = 7;
  ctx.lineTo(150, 155);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(144, 155, 5, 0, 0.5 * Math.PI);
  ctx.moveTo(145, 160);
  ctx.lineWidth = 10;
  ctx.lineTo(55, 160);
  ctx.arc(56, 155, 5, 0.5 * Math.PI, 1 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 155);
  ctx.lineTo(50, 35);
  ctx.lineWidth = 7;
  ctx.stroke();
}

/**
 * @param  CanvasRenderingContext2D ctx
 */
function drawIpadButton(ctx) {
  ctx.fillStyle = '#e45b15';
  ctx.beginPath();
  ctx.arc(100, 160, 3, 0, 2 * Math.PI);
  ctx.fill();
}

/**
 * @param  CanvasRenderingContext2D ctx
 */
function drawIpadDisplay(ctx) {
  ctx.font = "60px Arial";
  ctx.fillStyle = '#fff';
  ctx.fillText("</>", 56, 113);
}
