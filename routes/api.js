const mongoose = require("mongoose");
const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body.type);
        Workout.findByIdAndUpdate(
            { _id: params.id },
            { $set: {exercises: [{workoutType: body.type, name: body.name, duration: body.duration, weight: body.weight, reps: body.reps, sets: body.sets, distance: body.distance}]}}
        ).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })

    
});


module.exports = router;