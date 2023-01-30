const member = document.getElementById('member');
const group = document.getElementById('group');
const sets = document.getElementById('sets');
const reps = document.getElementById('reps');
const exercise = document.getElementById('exercise');
const btnSubmit = document.getElementById('btn-submit');
const btnAdditional = document.getElementById('btn-additional');
const chartGroup = document.getElementsByClassName('chart-group');
const chartEx = document.getElementsByClassName('chart-ex');
const chartMember = document.getElementsByClassName('chart-member');

function clearValue() {
    sets.value = '';
    reps.value = '';
    exercise.value = '';
}

btnSubmit.addEventListener('click', () => {
    for ( let i = 0; i < chartMember.length; i++ ) {
        if ( chartMember[i].textContent === member.value ) {
            chartGroup[i].innerHTML = group.value;
            chartEx[i].innerHTML = `${sets.value} x ${reps.value} - ${exercise.value}`;
            member.style.display = 'none';
            group.style.display = 'none';
            btnSubmit.style.display = 'none';   
            btnAdditional.style.display = 'block';
            clearValue();
            btnAdditional.addEventListener('click', () => {
                chartEx[i].innerHTML += `<br>${sets.value} x ${reps.value} - ${exercise.value}`;
                clearValue();
            })
        }
    }
});
