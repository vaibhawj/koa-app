const route = require('koa-route');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const auth = require('koa-basic-auth');
const serve = require('koa-static')
const app = new Koa();

const db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

const pets = {
  list: (ctx) => {
    const names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },

  show: (ctx, name) => {
    const pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  },

  add: (ctx) => {
    const pet = ctx.request.body;
    const existingPet = db[`${pet.name}`];
    db[`${pet.name}`]= {name: pet.name, species: pet.species}
    if(existingPet){
      ctx.status = 200;
    } else {
      ctx.status = 201;
    }
  }
};

app.use(bodyparser());
// app.use(auth({ name: 'john', pass: 'doe' }))
app.use(route.get('/pets', pets.list));
app.use(route.get('/pets/:name', pets.show));
app.use(route.post('/pets', pets.add))

app.use(serve(__dirname + '/public'))

app.listen(3000);
console.log('listening on port 3000');