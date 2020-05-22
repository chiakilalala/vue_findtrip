const path = document.querySelector('#myPath');
const circle = document.querySelector('.circle');

let pathPosition = path.getBoundingClientRect();
let documentPosition = document.body.getBoundingClientRect();
const pathTotalLength = path.getTotalLength();

function positionElements() {
    // SVG passes center of screen
    const relativePageOffset = -pathPosition.top +
        (window.pageYOffset + window.innerHeight * .5);

    const pointPercentage = relativePageOffset / pathPosition.height;
    const pointOnPath = pointPercentage * pathTotalLength;
    const pathPoint = path.getPointAtLength(pointOnPath);

    circle.style.transform = `translate(
			${ pathPosition.left + pathPoint.x }px,
			${ pathPosition.top + pathPoint.y }px
		)`;
}

window.addEventListener('scroll', () => {
    positionElements();
})

window.addEventListener('resize', () => {
    pathPosition = path.getBoundingClientRect();
    documentPosition = document.body.getBoundingClientRect();

    positionElements();
});

positionElements();