const supertest = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig');
const People = require('../people/people-model.js');



describe('server.js', () => {
    it('can run the test', () => {
        expect(true).toBeTruthy();
    });

    describe('should post a new person to /people', () => {
        it('should return new a person obj', async () => {
            await People.add({ name: 'luke' });

            const people = await db('people');
// check the people object has a length property and it is set to a certain nurmeric value
            expect(people).toHaveLength(1);
        });
    });
    describe('status code should be 201', () => {
        it('should return status code 201', async () => {
            const res = await supertest(server)
            .post('/people')
            .send({ name: 'rey' });
            expect(res.status).toBe(201);
        });
    });

    describe('deleting', () => {
        it('removes a perosn from the database', async () => {
            await People.add({ name: 'rey' });
            return supertest(server)
            .delete('/people/1')
            .then((res) => {
                expect(res.status).toBe(200);
            });
        });
    });
    describe('get 404 not found status', () => {
        it('get 404 not found', () => {
            return supertest(server)
            .delete('/people/2')
            .then((res) => {
                expect(res.status).toBe(404);
            });
        });
    });
});