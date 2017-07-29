[sourcecode lang=”javascript”]

//replace “//will insert additional tests here later” with the following:

describe(“appending strings”, function() {

it(“should be able to append 2 strings”, function() {

expect(myfunc.append).toBeDefined();

});

it(“should append 2 strings”, function() {

expect(myfunc.append(‘hello ‘,’world’)).toEqual(‘hello world’);

});

});

[/sourcecode]
