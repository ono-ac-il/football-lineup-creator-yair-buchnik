const players = [
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },   
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' }
]

const goalkeepers = players.filter( person => {
    return person.position === 'goalkeeper';
})
const defenders = players.filter(person =>  {
    return person.position === 'defender';
})
const midfielders = players.filter(person => {
    return person.position === 'midfielder';
})
const forwards = players.filter(person =>  {
    return person.position === 'forward';
})




// 
const MAPpedGoalkeepers = goalkeepers.map(person => {
    return `<option>${person.name}</option>`
});

MAPpedGoalkeepers.unshift(`<option></option>`)

document.getElementById('pos1').innerHTML = MAPpedGoalkeepers.join('');
// 

const MAPdefenders = defenders.map(person => {
    return `<option>${person.name}</option>`
});

MAPdefenders.unshift(`<option></option>`)

document.getElementById('def2').innerHTML = MAPdefenders.join('');
document.getElementById('def3').innerHTML = MAPdefenders.join('');
document.getElementById('def4').innerHTML = MAPdefenders.join('');

// 
const MAPmidfielders = midfielders.map(person => {
    return `<option>${person.name}</option>`
});

MAPmidfielders.unshift(`<option></option>`)

document.getElementById('mid2').innerHTML = MAPmidfielders.join('');
document.getElementById('mid3').innerHTML = MAPmidfielders.join('');
document.getElementById('mid4').innerHTML = MAPmidfielders.join('');

//

const MAPforwards = forwards.map(person => {
    return `<option>${person.name}</option>`
});

MAPforwards.unshift(`<option></option>`)

document.getElementById('st1').innerHTML = MAPforwards.join('');
document.getElementById('st2').innerHTML = MAPforwards.join('');
document.getElementById('st3').innerHTML = MAPforwards.join('');

//




