/**
 * AES-GCM exports
 */

function AES_GCM_encrypt_bytes ( data, key, nonce, adata, tagSize ) {
    if ( data === undefined ) throw new SyntaxError("data required");
    if ( key === undefined ) throw new SyntaxError("key required");
    if ( nonce === undefined ) throw new SyntaxError("nonce required");
    return get_AES_GCM_instance( { key: key, nonce: nonce, adata: adata, tagSize: tagSize } ).encrypt(data).result;
}

function AES_GCM_decrypt_bytes ( data, key, nonce, adata, tagSize ) {
    if ( data === undefined ) throw new SyntaxError("data required");
    if ( key === undefined ) throw new SyntaxError("key required");
    if ( nonce === undefined ) throw new SyntaxError("nonce required");
    return get_AES_GCM_instance( { key: key, nonce: nonce, adata: adata, tagSize: tagSize } ).decrypt(data).result;
}

exports.AES_GCM = createSimpleCipherInterface( AES_GCM );
exports.AES_GCM.encrypt = AES_GCM_encrypt_bytes;
exports.AES_GCM.decrypt = AES_GCM_decrypt_bytes;

exports.AES_GCM.Encrypt = createProgressiveCipherInterface( AES_GCM_Encrypt );
exports.AES_GCM.Decrypt = createProgressiveCipherInterface( AES_GCM_Decrypt );
