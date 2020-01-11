const hero = {
  name: 'Link',
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

function changeName(person, input) {
  person.name = input.charAt(0).toUpperCase() + input.slice(1);
}

function displayStats(person) {
  document.querySelector('#display-name').innerText = `Name: ${person.name}`;
  document.querySelector('#hp').innerText = `Health: ${person.health}`;
  document.querySelector('#weapon').innerText = `Weapon: ${person.weapon.type}`;
  document.querySelector('#weapon-dmg').innerText = `Weapon damage: ${person.weapon.damage}`;
}

document.querySelector('#inn').addEventListener('click', () => { rest(hero); displayStats(hero) });
document.querySelector('#dagger').addEventListener('click', () => pickUpItem(hero, dagger));
document.querySelector('#bag').addEventListener('click', () => { equipWeapon(hero); displayStats(hero) });

document.querySelector('#change-name').addEventListener('submit', (e) => {
  e.preventDefault();
  changeName(hero, document.querySelector('#name').value);
  displayStats(hero);
});

displayStats(hero);