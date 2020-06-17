const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout");


router.get("/", (req, res) => {
    res.sendFile("index.html", {root: "./public"});
});
router.get("/exercise", (req, res) => {
    res.sendFile("exercise.html", {root: "./public"});
});

router.get("/stats", (req, res) => {
    res.sendFile("stats.html", {root: "./public"})
})


// router.post("/exercise", ({ body }, res) => {
//     Workout.create(body).then(dbWorkout => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.json(err);
//     });
// });


module.exports = router;