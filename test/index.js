var tape = require("tape"),
    isWhitespace = require("..");


var numbers = "0123456789".split(""),
    chars = "abcdefghijklmnopqrstuvwxyz".split(""),
    punctuation = "`~!@#$%^&*()_-+={}[]|\\:;\"'<,>.?/".split(""),
    spaces = [' ', '\n', '\t', '\u00A0', '\u2028', '\u2029', '\f', '\r', '\v'];


function testChars(assert, chars, result, name) {
    var i = -1,
        il = chars.length - 1,
        ch;

    while (i++ < il) {
        ch = chars[i];
        assert.equal(isWhitespace(ch), result, name);
    }
}


tape("isWhitespace(ch: Character) should return true if character is whitespace", function(assert) {

    testChars(assert, numbers, false, "should be false for numeric");
    testChars(assert, chars, false, "should be false for alphabetic");
    testChars(assert, punctuation, false, "should be false for punctuation");
    testChars(assert, spaces, true, "should be true for white space");

    assert.end();
});
