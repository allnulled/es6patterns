const fs = require("fs");
const {assert, expect} = require("chai");

describe("ES6Patterns class", function() {
	
	const ES6Patterns = require(__dirname + "/../src/es6patterns.univ.js");

	before(function() {
		require("rimraf").sync(__dirname + "/example-for-singleton.js");
	});

	after(function() {
		require("rimraf").sync(__dirname + "/example-for-singleton.js");
	});

	describe("Singleton pattern", function() {
		
		const { Singleton } = ES6Patterns;

		it("can generate singleton getters", function(doneTest) {
			this.timeout(10000);
			const getter = Singleton.getter("my (singleton's) secret key", () => 800);
			expect(getter()).to.equal(800);
			setTimeout(doneTest, 1200);
		});

		it("can generate singleton setters", function(doneTest) {
			this.timeout(10000);
			const getter = Singleton.getter("my (singleton's) secret key 2");
			expect(getter()).to.equal(undefined);
			const setter = Singleton.setter("my (singleton's) secret key 2");
			expect(setter(700)).to.equal(700);
			expect(getter()).to.equal(700);
			setTimeout(doneTest, 1200);
		});

		it("produces getters and setters that work as expected cross-module", function(doneTest) {
			this.timeout(10000);
			const INITIAL_VALUE = 800;
			const get = Singleton.getter("KEY", () => INITIAL_VALUE);
			const set = Singleton.setter("KEY");
			const file = __dirname + "/example-for-singleton.js";
			const code = `
const { Singleton } = require(__dirname + "/../src/es6patterns.univ.js");
const store = {
	get: Singleton.getter("KEY", () => ${INITIAL_VALUE}),
	set: Singleton.setter("KEY")
};
module.exports = { store };`;
			fs.writeFileSync(file, code, "utf8");
			const {store} = require(file);
			expect(store.get()).to.equal(get());
			expect(store.get()).to.equal(Singleton.get("KEY"));
			expect(store.get()).to.equal(800);
			set(801);
			expect(store.get()).to.equal(get());
			expect(store.get()).to.equal(Singleton.get("KEY"));
			expect(store.get()).to.equal(801);
			store.set(802);
			expect(store.get()).to.equal(get());
			expect(store.get()).to.equal(Singleton.get("KEY"));
			expect(store.get()).to.equal(802);
			Singleton.set("KEY", 803);
			expect(store.get()).to.equal(get());
			expect(store.get()).to.equal(Singleton.get("KEY"));
			expect(store.get()).to.equal(803);
			setTimeout(doneTest, 1200);
		});

	});

});