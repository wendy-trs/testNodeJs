var expect = require('chai').expect;
var server = require("../server");

describe("Test de la méthode app.saisie(name)", function() {
    it("Test sur la saisie : trieste", async function() {
        const value = server.saisie("trieste");
        expect(value).to.equal("Le nom saisi est : trieste");
    });
});


