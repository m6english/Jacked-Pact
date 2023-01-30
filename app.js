const member = document.getElementById('member');
const group = document.getElementById('group');
const sets = document.getElementById('sets');
const reps = document.getElementById('reps');
const exercise = document.getElementById('exercise');
const btnSubmit = document.getElementById('btn-submit');
const btnAdditional = document.getElementById('btn-additional');
const chartGroup = document.getElementById('chart-group');
const chartEx = document.getElementById('chart-ex');
const chartMember = document.getElementById('chart-member');
const memberArr = [
    "Ben", "Clark", "Matt", "Mike", "Zach"
];
btnSubmit.addEventListener('click', () => {
    chartGroup.innerHTML = group.value;
    chartEx.innerHTML = `${sets.value} x ${reps.value} - ${exercise.value}`;
    member.style.display = 'none';
    group.style.display = 'none';
    btnSubmit.style.display = 'none';   
    btnAdditional.style.display = 'block';
});

btnAdditional.addEventListener('click', () => {
    chartEx.innerHTML += `<br>${sets.value} x ${reps.value} - ${exercise.value}`;
});