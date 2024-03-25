import { describe, it } from 'node:test'
import { ModelPlayStoreApp } from '../../src/models/playstoreApp.js'
import assert from 'node:assert'

describe('# ModelPlayStoreApp Tests Suits', () => {
    it('Should pick correctly fields from params', () => {
        const params = [
            'Gakondo',
            'com.ishakwe.gakondo',
            'Adventure',
            0.0,
            0,
            '10+',
            10,
            15,
            'True',
            0,
            'USD',
            '10M',
            '7.1 and up',
            'Jean Confident Irénée NIYIZIBYOSE',
            'https://beniyizibyose.tk/#/,jean21101999@gmail.com',
            'Feb 26, 2020',
            'Feb 26, 2020',
            'Everyone',
            'https://beniyizibyose.tk/projects/',
            'False',
            'False',
            'False',
            '2021-06-15 20:19:35',
        ]

        const result = new ModelPlayStoreApp(params)

        assert.equal(result.name, 'Gakondo')
        assert.equal(result.installs, 15)
        assert.equal(result.rating, 0.0)
        assert.equal(result.category, 'Adventure')
        assert.equal(result.ratingCount, 0)
    })
})
