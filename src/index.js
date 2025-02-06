import Player from "../classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const Player = new Player();

ctx.fillStyle = "red";
ctx.fillRect(Player.position.x, Player.position.y, Player.width, Player.height);
