const elStep1 = document.querySelector('select[name="step1"]');
const elStep2 = document.querySelector('select[name="step2"]');
const elStatus = document.querySelector('.status > span');

const run = (ev) => {
    const valueStep1 = elStep1.value;
    const valueStep2 = elStep2.value;
    
    if(valueStep1 === 'no') {
        elStatus.innerHTML = 'Prihodi pozhe!';
        return;
    }

    if(valueStep2 === 'no') {
        elStatus.innerHTML = 'Starvation';
        return;
    }

    elStatus.innerHTML = 'Dalee↓';
}

run();
elStep1.addEventListener('change', run);
elStep2.addEventListener('change', run);
