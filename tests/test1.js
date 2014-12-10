QUnit.test("hello test", function(assert) {
	assert.ok( 1 == "1", "Passed!" );
});

QUnit.test('double test', function(assert) {
	assert.equal( greeter('Lin'), "Hi Lin!",  "foo function working" );
});
