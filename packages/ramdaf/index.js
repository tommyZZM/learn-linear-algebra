/**
 * Created by tommyZZM.OSX on 16/9/10.
 */
"use strict";
const R = require("ramda");

const zipWith = R.apply(require("./zipWith"));
const allEqual = R.apply(require("./allEqual"));

const dropLastWhileIsNil = R.dropLastWhile(R.isNil)

exports.zipWith = (fn,a,b) => zipWith(dropLastWhileIsNil([fn,a,b]));
exports.allEqual = list => allEqual.allEqual(list);
exports.allEqualBy = fn => allEqual.allEqualBy();
