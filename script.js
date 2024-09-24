const display = document.getElementById('display');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
const inputLimit = document.getElementById('limit');

let interval; //Almacen el intervalo del cronómetro
let time = 0; //Tiempo transcurrido en segundos
let limit = 0; //Tiempo límite definido por el usuario

const updateDisplay = () => {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    display.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

btnStart.addEventListener('click', () => {
    if(!interval){
        limit = parseInt(inputLimit.value) || 0;
        interval = setInterval(()=>{
            time++; //Incrementa el tiempo en un segundo
            updateDisplay();

            //Activar la alarma si se alcanza el limite
            if(time === limit && limit > 0){
                document.body.style.background = 'red';
                clearInterval(interval);
            }

        }, 1000);
    }
});

btnStop.addEventListener('click', () =>{
    clearInterval(interval); //Detener el intervalo
    interval = null; // reiniciar la variable
});

btnReset.addEventListener('click', () => {
    clearInterval(interval); /*Detiene el intervalo*/
    interval = null;
    time = 0;
    limit = 0;
    inputLimit.value = '';
    updateDisplay();
    document.body.style.background = '';
});
