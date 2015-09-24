module.exports = isWhitespace;


function isWhitespace(ch) {
    var charCode = ch.charCodeAt(0);

    return (
        (charCode >= 0x0009 && charCode <= 0x000D) ||
        charCode === 0x0020 ||
        charCode === 0x0085 ||
        charCode === 0x00A0 ||
        charCode === 0x2028 ||
        charCode === 0x2029
    );
}
