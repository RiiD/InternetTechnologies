const w = 200, h = 260, capH = 45;

(function() {
  drawEnergy();

  drawMobile();
})();

function drawEnergy() {
  var ctx = document
            .getElementById("powerEnergyCanvas")
            .getContext("2d");
   drawEnergyLogo(ctx);
  drawCaption(ctx, "התמחות בהספק ואנרגיה");
}

function drawEnergyLogo(ctx) {
  var bgColor = "#0557a3";
  drawFilledRect(ctx, bgColor, 0, 0, w, h - capH);
  drawEnergyLogoCircle(ctx);
  drawZigZagBg(ctx);
  drawEnergyLogoZigZag(ctx);
  drawEnergyLogoArrow(ctx);
}

function drawMobile() {
  var ctx = document
            .getElementById("mobileTechCanvas")
            .getContext("2d");
  drawMobileLogo(ctx);
  drawCaption(ctx, "התמחות בתוכנה למערכות ניידות");
}

function drawMobileLogo(ctx) {
  var bgColor = "#e45b15";
  drawFilledRect(ctx, bgColor, 0, 0, w, h - capH);
  drawIpad(ctx);
}

function drawZigZagBg(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 20);
  ctx.lineTo(85, 80);
  ctx.lineWidth = 30;
  ctx.strokeStyle = '#0557a3';
  ctx.stroke();
}

function drawCaption(ctx, text) {
  ctx.font = "20px Arial";
  ctx.fillStyle = '#515151';
  ctx.fillText(text,0,h - 20);

}

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

function drawEnergyLogoArrow(ctx) {
  ctx.beginPath();
  ctx.moveTo(95, 115);
  ctx.lineTo(125, 120);
  ctx.lineTo(104, 145);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.fill();
}

function drawFilledRect(ctx, color, x, y, w, h) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawIpad(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 9;

  ctx.moveTo(47, 32);
  ctx.lineTo(153, 32);
  ctx.stroke();

  ctx.lineWidth = 7;
  ctx.lineTo(153, 162);
  ctx.stroke();

  ctx.lineWidth = 9;
  ctx.lineTo(47, 162);
  ctx.stroke();

  ctx.closePath();
  ctx.lineWidth = 7;
  ctx.stroke();
}
