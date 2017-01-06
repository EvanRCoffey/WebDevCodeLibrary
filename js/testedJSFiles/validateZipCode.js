//Validates zip code.  Returns true if valid.
function readZipCode(zip) {
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
}