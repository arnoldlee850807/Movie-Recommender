//var assert = require('assert');
//var chai = require('chai');
//var search = require('../search.js');
//var expect = chai.expect;
import assert from 'assert';
import chai from 'chai';
var expect = chai.expect;
//var searchMovie = search.searchMovie;
//var getSimilarMovies = search.getSimilarMovies;
import fetch from 'node-fetch';
import { searchMovie, getSimilarMovies } from '../search.js';


const movie = "Hereditary";
const res = searchMovie(movie);


describe('searchMovie', function() {
    it('Should not return a null when searching for a movie that exists', function() {
        assert.notEqual(res, null);
    });
    it('Should not return a null when finding similar movies', function() {
        assert.notEqual(getSimilarMovies(res.id), null);
    });
});
