const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
	loop: true,
	delay: 75
});

typewriter.typeString('Tu taller de confianza').pauseFor(200).start();