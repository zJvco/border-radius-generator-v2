const object = document.querySelector('.object-radius');
const copyBtn = document.getElementById('copyBtn');

const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');
const range3 = document.getElementById('range3');
const range4 = document.getElementById('range4');

const valueRadius1 = document.getElementById('valueRadius1');
const valueRadius2 = document.getElementById('valueRadius2');
const valueRadius3 = document.getElementById('valueRadius3');
const valueRadius4 = document.getElementById('valueRadius4');
 
range1.addEventListener('input', (e) => {
    const valueInput = e.target.value;

    object.style.borderTopLeftRadius = `${valueInput}%`;    
    valueRadius1.innerText = `${valueInput}%`;
});

range2.addEventListener('input', (e) => {
    const valueInput = e.target.value;

    object.style.borderTopRightRadius = `${valueInput}%`;
    valueRadius2.innerText = `${valueInput}%`;
});

range3.addEventListener('input', (e) => {
    const valueInput = e.target.value;

    object.style.borderBottomRightRadius = `${valueInput}%`;
    valueRadius3.innerText = `${valueInput}%`
});

range4.addEventListener('input', (e) => {
    const valueInput = e.target.value;

    object.style.borderBottomLeftRadius = `${valueInput}%`;
    valueRadius4.innerText = `${valueInput}%`;
});

copyBtn.addEventListener('click', () => {
    const textValue1 = valueRadius1.innerHTML;
    const textValue2 = valueRadius2.innerHTML;
    const textValue3 = valueRadius3.innerHTML;
    const textValue4 = valueRadius4.innerHTML;

    const reciveValueText = document.getElementById('reciveValueText');

    const resultCopy = `border-radius: ${textValue1} ${textValue2} ${textValue3} ${textValue4}`;

    reciveValueText.value = resultCopy;

    copyInputField(reciveValueText);
    animationFieldText();
});

function copyInputField(input) {
    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand('copy');
}

function animationFieldText() {
    const animationTextCopy = document.getElementById('animationTextCopy');

    animationTextCopy.animate([
        { transform: 'translateY(0%)', opacity: '1' },
        { transform: 'translateY(-200%)', opacity: '0'}
    ], {
        duration: 1000,
    });
}

const rotate = document.getElementById('rotate');

rotate.addEventListener('click', () => {

    rotate.animate([
        { transform: 'rotate(180deg)' }
    ], {
        duration: 200,
    });

    setRotateObject();
});

function setRotateObject() {
    if (object.style.transform === '') {
        object.style.transform = 'rotate(45deg)';
    }
    else if (object.style.transform === 'rotate(45deg)') {
        object.style.transform = 'rotate(90deg)';
    }
    else if (object.style.transform === 'rotate(90deg)') {
        object.style.transform = 'rotate(135deg)';
    }
    else {
        object.style.transform = '';
    }
}