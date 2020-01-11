const hero = {
  name: '',
  heroic: false,
  inventory: [],
  health: 10,
  weapon: {
    type: 'rapier',
    damage: 2,
  },
};

const dagger = {type: 'dagger', damage: 2};

function rest(person) {
  person.health === 10 
    ? alert('You don\'t need to rest right now') 
    : person.health = 10; return person; // check!
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
}

function equipWeapon(person) {
  if (person.inventory.length !== 0) { person.weapon = person.inventory[0] };
}

document.querySelector('#inn').addEventListener('click', () => rest(hero));
document.querySelector('#dagger').addEventListener('click', () => pickUpItem(hero, dagger));
document.querySelector('#bag').addEventListener('click', () => equipWeapon(hero));