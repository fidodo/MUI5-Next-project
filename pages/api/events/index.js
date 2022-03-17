import { NextApiHandler } from "next";
const { events } = require("./data.json")

export default function handler(req, res) {
    res.status(200).json({ hello : "it's me "})}