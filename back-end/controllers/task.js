import { createError } from "../error.js";
import Project from "../models/Project.js";
import User from "../models/User.js";
import Task from "../models/Task.js";

export const createTask = async (req, res, next) => {
    const newTask = new Task({ userId: req.user.id, ...req.body });
    try {
      const savedTask = await newTask.save();
      res.status(200).json(savedTask);
    } catch (err) {
      next(err);
    }
  };

  export const updateTask = async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return next(createError(404, "task not found!"));
      if (req.user.id === task.userId) {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedTask);
      } else {
        return next(createError(403, "You can update only your Task!"));
      }
    } catch (err) {
      next(err);
    }
  };

  export const deleteTask = async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return next(createError(404, "task not found!"));
      if (req.user.id === task.userId) {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json("The task has been deleted.");
      } else {
        return next(createError(403, "You can delete only your task!"));
      }
    } catch (err) {
      next(err);
    }
  };

  export const getTask = async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  };

  export const getAllTask = async (req, res, next) => {
    try {
      const task = await Task.find();
      console.log(task)
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  };
