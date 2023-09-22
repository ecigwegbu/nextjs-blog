import React from 'react'

function myMath(a, b) {
    return a + 2*b + 2;
}

export default function POST(req, res) {
const ab = myMath(5, 6);
return res.status(200).json({ ab });
}