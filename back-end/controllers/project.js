import { createError } from "../error.js";
import Project from "../models/Project.js";
import User from "../models/User.js";

export const createProject = async (req, res, next) => {
    const newProject = new Project({ userId: req.user.id, ...req.body });
    try {
      const savedProject = await newProject.save();
      res.status(200).json(savedProject);
    } catch (err) {
      next(err);
    }
  };

  export const updateProject = async (req, res, next) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) return next(createError(404, "project not found!"));
      if (req.user.id === project.userId) {
        const updatedProject = await Project.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProject);
      } else {
        return next(createError(403, "You can update only your project!"));
      }
    } catch (err) {
      next(err);
    }
  };

  export const deleteProject = async (req, res, next) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) return next(createError(404, "project not found!"));
      if (req.user.id === project.userId) {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json("The project has been deleted.");
      } else {
        return next(createError(403, "You can delete only your project!"));
      }
    } catch (err) {
      next(err);
    }
  };

  export const getProject = async (req, res, next) => {
    try {
      const project = await Project.findById(req.params.id);
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  };

  export const getAllProject = async (req, res, next) => {
    try {
      const project = await Project.find();
      console.log(project)
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  };
