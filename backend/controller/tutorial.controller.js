import express from 'express';
import mongoose from 'mongoose';

import Tutorial from "../models/tutorial.models.js";

export const getTutorials = async (req, res) => {
    try {
        const Tutorials = await Tutorial.find();

        res.status(200);
        res.json(Tutorials);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

export const createTutorial = async (req, res) => {
    const tutorial = req.body;

    const newTutorial = new Tutorial(tutorial);
    try {
        await newTutorial.save();

        res.status(201);
        res.json(newTutorial);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

export const getTutorial = async (req, res) => {
    const { id } = req.params;

    try {
        const tutorial = await Tutorial.findById(id);

        res.status(200);
        res.json(tutorial);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

export const updateTutorial = async (req, res) => {
    const { id } = req.params;
    const { title, description, published } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Tutorial with id: ${id}`);
        }

        const updatedTutorial = { title, description, published, _id: id };

        await Tutorial.findByIdAndUpdate(id, updatedTutorial, { new: true });

        res.status(200);
        res.json(updatedTutorial);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

export const deleteTutorial = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Tutorial with id: ${id}`);
        }

        await Tutorial.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Tutorial Deleted Successfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}