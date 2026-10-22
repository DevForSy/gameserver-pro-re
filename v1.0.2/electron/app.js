'use strict';
// ─── Bytecode Loader ──────────────────────────────────────────────────────────
// This is the ONLY plain-text file in the electron folder.
// Its sole purpose is to register bytenode and load the compiled main.jsc.
// There is NO application logic here — nothing sensitive to read or steal.
require('bytenode');
require('./main.jsc');
