(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const w=""+new URL("WordArt30.png",import.meta.url).href;let p=window.document.getElementById("eCanvas"),g=window.document.getElementById("eVideo"),_=window.document.getElementById("eVideo2");if(!(p instanceof HTMLCanvasElement))throw new Error;if(g==null)throw new Error;if(!(g instanceof HTMLVideoElement))throw new Error;if(_==null)throw new Error;if(!(_ instanceof HTMLVideoElement))throw new Error;const b=[105,148].map(o=>o*3),P=o=>new Promise(s=>{setTimeout(()=>s(),o)});window.document.body.style.background="grey";p.style.backgroundColor="transparent";p.width=b[0];p.height=b[1];g.autoplay=!0;let e=p.getContext("2d");if(e==null)throw new Error;function l(o){return o*b[1]}function t(o){return o*b[0]}function i(o,s,a){return`rgb(${o}, ${s}, ${a})`}const f=(o,s,a)=>{for(let c=0;c<20;++c){let r=s.map(n=>n+(1-Math.random()*2)*a);e.fillStyle=o,e.beginPath(),e.rect(r[0],r[1],.5,.5),e.fill()}},h=[[t(.6),l(0)],[t(.56),l(1)]],k=()=>{e.fillStyle=i(150,100,0),e.lineWidth=1,e.beginPath(),e.moveTo(h[0][0],h[0][1]),e.lineTo(t(1),l(0)),e.lineTo(t(1),l(1)),e.lineTo(h[1][0],h[1][1]),e.fill(),e.fillStyle=i(240,150,30),e.lineWidth=1,e.beginPath(),e.moveTo(t(0),l(0)),e.lineTo(t(0),l(1)),e.lineTo(h[1][0],h[1][1]),e.lineTo(h[0][0],h[0][1]),e.fill()},v={start_coor:[t(.11),l(.09)+1],size:[t(.4)-5,l(.4)-7]},T=()=>{e.strokeStyle=i(245,240,60),e.beginPath(),e.lineWidth=3,e.strokeRect(t(.1),l(.08),t(.4),l(.4)),e.beginPath(),e.strokeStyle=i(255,30,30),e.lineWidth=1,e.strokeRect(t(.11),l(.09),t(.43),l(.42)),e.clearRect(t(.11),l(.09)+1,t(.4)-5,l(.4)-7),e.fillStyle=i(150,220,255),e.beginPath(),e.arc(t(.26),l(.45),44,Math.PI-.29,.29),e.fill()},z=function(){e.fillStyle=i(40,30,25),e.fillRect(t(.1),l(.59),t(.35),l(.31)),e.fillStyle=i(190,150,30),e.fillRect(t(.03),l(.61),t(.1),l(.32)),e.fillStyle=i(200,190,140),e.fillRect(t(.28),l(.615),t(.13),l(.305)),e.fillStyle=i(20,22,12),e.fillRect(t(.43),l(.61),t(.08),l(.31)),e.fillStyle=i(100,30,150),e.fillRect(t(.02),l(.55),t(.5),l(.06)),e.strokeStyle=i(50,20,50),e.beginPath(),e.moveTo(t(0),l(.59)),e.bezierCurveTo(t(.1),l(.575),t(.15),l(.635),t(.25),l(.63)),e.stroke(),e.strokeStyle=i(50,20,50),e.beginPath(),e.moveTo(t(.24),l(.632)),e.bezierCurveTo(t(.35),l(.63),t(.43),l(.56),t(.54),l(.6)),e.stroke(),e.strokeStyle=i(50,20,50),e.beginPath(),e.moveTo(t(.04),l(.57)),e.lineTo(t(.53),l(.565)),e.stroke(),e.fillStyle=i(200,20,50),e.beginPath(),e.ellipse(t(.28),l(.615),13,13,0,0,360),e.fill(),e.fillStyle=i(150,100,150),e.beginPath(),e.ellipse(t(.218),l(.605),4.5,4.5,0,0,360),e.fill(),e.fillStyle=i(200,150,200),e.beginPath(),e.ellipse(t(.345),l(.61),4,4,0,0,360),e.fill(),e.strokeStyle=i(50,20,50),e.beginPath(),e.moveTo(t(.27),l(.635)),e.lineTo(t(.255),l(.615)),e.stroke(),e.strokeStyle=i(50,20,50),e.beginPath(),e.moveTo(t(.278),l(.625)),e.lineTo(t(.28),l(.61)),e.stroke(),e.strokeStyle=i(50,20,50),e.beginPath(),e.moveTo(t(.28),l(.65)),e.lineTo(t(.295),l(.62)),e.stroke()},M=()=>{e.fillStyle=i(255,255,255),e.beginPath(),e.ellipse(t(.09),l(.93),t(.1),l(.08),0,0,360),e.fill(),e.fillStyle=i(255,255,255),e.beginPath(),e.ellipse(t(.05),l(.84),t(.05),l(.04),0,0,360),e.fill(),e.fillStyle=i(255,255,255),e.beginPath(),e.ellipse(t(.2),l(.885),t(.07),l(.05),0,0,360),e.fill(),e.fillStyle=i(255,255,255),e.beginPath(),e.ellipse(t(.22),l(.965),t(.1),l(.03),0,0,360),e.fill()},E=()=>{e.strokeStyle=i(0,0,200),e.fillStyle=i(255,255,230),e.beginPath(),e.rect(t(.03)+6,l(.85)+6,t(.19),l(.13)),e.stroke(),e.fill(),e.strokeStyle=i(0,0,100),e.fillStyle=i(250,230,250),e.beginPath(),e.rect(t(.03),l(.85),t(.19),l(.13)),e.stroke(),e.fill(),e.fillStyle=i(0,0,100),e.font="7px cursive",e.fillText("Sommige dingen",Math.round(t(.04)),Math.round(l(.87))),e.fillText("veranderen,",Math.round(t(.04)),Math.round(l(.89))),e.fillText("andere",Math.round(t(.04)),Math.round(l(.91))),e.fillText("niet.",Math.round(t(.04)),Math.round(l(.93))),e.fillStyle=i(150,150,255),e.fillText("MDV",t(.16),l(.97))},I=()=>{e.fillStyle=i(150,50,50),e.beginPath(),e.fillRect(t(.8),l(.05),t(.15),l(.85))},m={start_coor:[t(.71),l(.61)],size:[t(.15),l(.35)]},x=()=>{e.clearRect(m.start_coor[0],m.start_coor[1],m.size[0],m.size[1])},R=()=>{for(let o of[[t(.8),l(.55)],[t(.8),l(.53)],[t(.792),l(.515)],[t(.785),l(.49)],[t(.77),l(.481)],[t(.765),l(.468)],[t(.76),l(.442)],[t(.75),l(.42)],[t(.73),l(.405)]])f(i(30,30,10),o,2.5);for(let o of[[t(.815),l(.545)],[t(.82),l(.55)],[t(.835),l(.52)],[t(.836),l(.505)],[t(.842),l(.491)],[t(.845),l(.48)],[t(.85),l(.468)]])f(i(30,30,10),o,2.5);for(let o of[[t(.775),l(.55)],[t(.76),l(.54)],[t(.74),l(.52)],[t(.73),l(.504)],[t(.705),l(.495)],[t(.695),l(.49)],[t(.675),l(.5)],[t(.655),l(.504)],[t(.64),l(.512)]])f(i(30,30,10),o,2.5);for(let o of[[t(.79),l(.55)],[t(.786),l(.54)],[t(.77),l(.52)],[t(.762),l(.504)],[t(.75),l(.495)]])f(i(30,30,10),o,2.5);for(let o of[[t(.82),l(.55)],[t(.828),l(.54)],[t(.835),l(.52)],[t(.848),l(.504)],[t(.86),l(.495)],[t(.872),l(.49)],[t(.895),l(.47)],[t(.92),l(.46)],[t(.94),l(.465)]])f(i(30,30,10),o,2.5);for(let o of[[t(.784),l(.495)],[t(.76),l(.485)],[t(.77),l(.475)],[t(.765),l(.472)],[t(.76),l(.47)],[t(.755),l(.425)],[t(.735),l(.432)],[t(.745),l(.424)],[t(.76),l(.415)],[t(.755),l(.4)]])f(i(250,250,70),o,2);for(let o of[[t(.835),l(.525)],[t(.84),l(.515)],[t(.842),l(.501)],[t(.835),l(.48)],[t(.85),l(.466)],[t(.862),l(.448)],[t(.86),l(.448)]])f(i(250,250,70),o,2);for(let o of[[t(.842),l(.502)],[t(.87),l(.492)],[t(.878),l(.48)],[t(.88),l(.482)],[t(.9),l(.465)],[t(.91),l(.458)],[t(.92),l(.462)],[t(.94),l(.47)],[t(.928),l(.476)]])f(i(250,250,70),o,2);for(let o of[[t(.736),l(.508)],[t(.702),l(.492)],[t(.696),l(.5)],[t(.673),l(.492)],[t(.665),l(.512)],[t(.642),l(.522)],[t(.641),l(.492)],[t(.643),l(.498)],[t(.642),l(.522)]])f(i(250,250,70),o,2);e.fillStyle=i(170,250,200),e.beginPath(),e.rect(t(.75),l(.55),t(.1),l(.06)),e.fill()},C=()=>{e.fillStyle=i(220,170,230),e.beginPath(),e.ellipse(t(.63),l(.21),t(.06),l(.12),0,0,360),e.fill(),e.strokeStyle=i(110,65,115),e.beginPath(),e.arc(t(.73),l(.18),t(.15),Math.PI*.95,Math.PI*1.2),e.stroke(),e.strokeStyle=i(230,140,180),e.lineWidth=3,e.beginPath(),e.arc(t(.52),l(.26),t(.15),Math.PI*2,Math.PI*2.15),e.stroke(),e.strokeStyle=i(250,250,230),e.lineWidth=4,e.beginPath(),e.moveTo(t(.63),l(.2)),e.lineTo(t(.63),l(.28)),e.stroke()},S=window.document.getElementById("eCard"),W=()=>{const o=document.createElement("img");o.src=w,S==null||S.append(o),o.width=t(.4),o.height=l(.4),o.style.zIndex="1",o.style.position="absolute",o.style.left=t(.46)+"px",o.style.top=l(.66)+"px"},L=async()=>{for(;;){e.fillStyle=i(220,170,230),e.beginPath(),e.rect(t(.6),l(.17),t(.06),l(.04)),e.fill();let o=.17+Math.random()*.01,s=.61-Math.random()*.01,a=.64+Math.random()*.01;e.fillStyle=i(255,255,0),e.lineWidth=2,e.beginPath(),e.moveTo(t(.63),l(o)),e.bezierCurveTo(t(.63),l(o),t(s),l(.2),t(.63),l(.21)),e.fill(),e.fillStyle=i(255,255,0),e.lineWidth=1,e.beginPath(),e.moveTo(t(.63),l(o)),e.bezierCurveTo(t(.63),l(o),t(a),l(.2),t(.63),l(.21)),e.fill(),await P(300)}};k();z();T();M();I();x();C();R();E();W();L();navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}}).then(o=>{let s=o.getVideoTracks()[0].getCapabilities(),a=[s.width,s.height].map(r=>{if((r==null?void 0:r.max)==null)throw new Error;return r.max});function c(r,n){let d=new Array(2).fill(void 0).map((u,y)=>a[y]/n.size[y]);if((d[0]<d[1]?0:1)===0){let u=n.size[0]*(a[1]/a[0]),y=u-n.size[1];r.style.top=n.start_coor[1]-y/2+"px",r.style.left=n.start_coor[0]+"px",r.width=n.size[0],r.height=u}else{let u=n.size[1]*(a[0]/a[1]),y=u-n.size[0];r.style.top=n.start_coor[1]+"px",r.style.left=n.start_coor[0]-y/2+"px",r.width=u,r.height=n.size[1]}}c(g,v),c(_,m),g.autoplay=!0,g.srcObject=o,_.autoplay=!0,_.srcObject=o}).catch(o=>{console.error("Error accessing webcam:",o)});
