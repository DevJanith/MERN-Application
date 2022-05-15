import express from "express";
import { getTutorials, getTutorial, createTutorial, updateTutorial, deleteTutorial } from "../controller/tutorial.controller.js";

const router = express.Router();

router.get('/', getTutorials);
router.post('/', createTutorial);
router.get('/:id', getTutorial);
router.patch('/:id', updateTutorial);
router.delete('/:id', deleteTutorial);


export default router;