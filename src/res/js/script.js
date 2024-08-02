import { 
    updateTitleText, 
    handleKeyEvent, 
    handleGamepadEvent,
} from "./extra/lib";

let lastExecutionTime = 0;
const throttleInterval = 400;

document.addEventListener('keydown', event => lastExecutionTime = handleKeyEvent(event.key, lastExecutionTime, throttleInterval));

requestAnimationFrame(() => handleGamepadEvent(lastExecutionTime, throttleInterval));
document.getElementById('touch_left').addEventListener('click', () => handleKeyEvent('ArrowLeft', lastExecutionTime, throttleInterval));
document.getElementById('touch_right').addEventListener('click', () => handleKeyEvent('ArrowRight', lastExecutionTime, throttleInterval));
document.getElementById('touch_down').addEventListener('click', () => handleKeyEvent('ArrowDown', lastExecutionTime, throttleInterval));
document.getElementById('touch_up').addEventListener('click', () => handleKeyEvent('ArrowUp', lastExecutionTime, throttleInterval));
document.getElementById('touch_c').addEventListener('click', () => handleKeyEvent('c', lastExecutionTime, throttleInterval));
document.getElementById('touch_x').addEventListener('click', () => handleKeyEvent('x', lastExecutionTime, throttleInterval));
document.getElementById('touch_z').addEventListener('click', () => handleKeyEvent('z', lastExecutionTime, throttleInterval));

async function start(){
    updateTitleText(0);
}
start();