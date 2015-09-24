module.exports = isWhitespace;


function isWhitespace(ch) {
    return (
        ch === ' ' ||
        ch === '\n' ||
        ch === '\t' ||
        ch === '\u00A0' ||
        ch === '\u2028' ||
        ch === '\u2029' ||
        ch === '\f' ||
        ch === '\r' ||
        ch === '\v'
    );
}
