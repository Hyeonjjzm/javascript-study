let player1 = new Object();
player1.name = '맹그녕'
player1.job = '백수'
player1.race = '니폰진'
player1.stats = {
    STR: 100, DEX: 30, CON: 200, INT:2, WIS: 2, CHA: 500
}

let player2 = {
    name: '망그녕', job: '남친구', race: '가르마',
    stats: {
        STR: 300, DEX: 50, CON: 800, INT: 200, WIS: 200, CHA: 500    
    }
}

let player3 = new playerFunc(
    "마이키",
    "무적",
    "도쿄만지회",
    {
        STR: 200, DEX: 20, CON: 400, INT: 300, WIS: 200, CHA: 500
    }
)

function playerFunc(name, job, race, stats){
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;

    this.getName = function(){return this.name;}
    this.getJob = function(){return this.job;}
    this.getRace = function(){return this.race;}
    this.setName = function(name){this.name = name;}
    this.setJob = function(job){this.job = job;}
    this.setRace = function(race){this.race = race;}
}

console.log(player3.getName())

console.log(player3.name)
console.log(player3.job)
console.log(player3.stats)

let now = new Date();
console.log(now)

let stu1 = new Map();
stu1.set('id',0);
stu1.set('이름','제임스');
stu1.set('전공','컴공');

let stu2 = new Map([
    ['id',0],
    ['이름','제임스'],
    ['전공', '컴공']
]);

console.log(stu1)
console.log(stu1.get('id'))
console.log(stu1.get('이름'))
console.log(stu1.get('전공'))

stu1.delete('전공');
console.log(stu1);

stu1.clear();
console.log(stu1);

player1.age = 200
player2.age = 200
player3.age = 200
console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

delete player1.age;
delete player2.age;
delete player3.age;
console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.sayHello = function(){
    console.log("hello")
}
player2.sayHello = function(){
    console.log("hello")
}
player3.sayHello = function(){
    console.log("hello")
}

player1.sayHello();
player2.sayHello();
player3.sayHello();

let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}
for (let key in person){
    console.log(key + ": " + person[key])
}

for (let stat in player3.stats){
    console.log(stat)
}

// 동적 접근
function show(obj, key){
    console.log(obj[key])
}
show(player3,'job');

let cars = [
    {brand: "페라리", model: "911"},
    {brand: "포드", model: "머스탱"},
    {brand: "닷지", model: "차저"}
]
for (let i=0; i>cars.length; i++){
    console.log(cars[i].model)
}