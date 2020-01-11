const hero = {
  name: 'Link',
  heroic: false,
  inventory: [],
  health: 10,
  weapon: {
    type: 'rapier',
    damage: 2,
  }
};

const dagger = { type: 'dagger', damage: 2 };
const goblin = { name: 'goblin', health: 10 };
const gameDiv = document.querySelector('#game');

function rest(person) {
  person.health === 10 
    ? alert('You don\'t need to rest right now') 
    : person.health = 10; return person;
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

function displayEnemyStats(enemy) {
  document.querySelector('#started-fight').textContent = `You are now fighting: ${enemy.name}`;
  document.querySelector('#enemy-hp').textContent = `HP: ${enemy.health}`;
  document.querySelector('#hit').textContent = 'Hit!';
}

function hitEnemy(enemy) {
  if (enemy.health > 0) {
    enemy.health--;
    displayEnemyStats(enemy);
  } else {
    document.querySelector('#result').textContent = `You defeated ${enemy.name}`;
    gameDiv.removeChild(document.querySelector('#enemy'));
  }
}

document.querySelector('#inn').addEventListener('click', () => { rest(hero); displayStats(hero) });

document.querySelector('#dagger').addEventListener('click', () => {
  pickUpItem(hero, dagger);
  gameDiv.removeChild(document.querySelector('#dagger'));
});

document.querySelector('#bag').addEventListener('click', () => { equipWeapon(hero); displayStats(hero) });

document.querySelector('#change-name').addEventListener('submit', (e) => {
  e.preventDefault();
  changeName(hero, document.querySelector('#name').value);
  displayStats(hero);
});

document.querySelector('#enemy').addEventListener('click', () => { 
  displayEnemyStats(goblin);
  document.querySelector('#hit').addEventListener('click', () => { hitEnemy(goblin) });
});

displayStats(hero);