const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
    connection.query("SELECT * FROM recipes", (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        return res.json({
            recipes: results,
        });
    });
});

router.get("/bytitle/:title", (req, res) => {
    const title = req.params.title;
    connection.query(`SELECT * FROM recipes where title like '%${title}%'`, (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        return res.json({
            recipes: results,
        });
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        `SELECT * FROM recipes where recipeID = ${mysql.escape(id)} `,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            if (results.length) {
                return res.json({
                    recipes: results,
                });
            }

          
        }
    );
});

router.post("/", (req, res) => {
    const { title, author, ingredients, preparation_time, description, imageUrl } = req.body;

    if (!title || !author || !ingredients || !preparation_time || !description || !imageUrl) {
        return res.status(400).json({
            error: "All fields are required",
        });
    }

    connection.query(
        `INSERT INTO recipes (title, author, ingredients, preparation_time, description, imageUrl) values (${mysql.escape(
            title
        )}, ${mysql.escape(author)}, ${mysql.escape(
            ingredients
        )}, ${mysql.escape(preparation_time)}, ${mysql.escape(description)}, ${mysql.escape(imageUrl)})`,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            return res.json({
                results,
            });
        }
    );
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        `DELETE FROM recipes where recipeID = ${mysql.escape(id)}`,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.json({
                results,
            });
        }
    );
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, author, ingredients, preparation_time, description, imageUrl } = req.body;

    if (!title || !author || !ingredients || !preparation_time || !description || imageUrl) {
        return res.status(400).json({
            error: "All fields are required",
        });
    }

    connection.query(
        `UPDATE recipes SET title = ${mysql.escape(
            title
        )}, author = ${mysql.escape(author)}, ingredients = ${mysql.escape(
            ingredients
        )}, preparation_time = ${mysql.escape(
            preparation_time
        )}, description = ${mysql.escape(
            description)}, 
            imageUrl = ${mysql.escape(
            imageUrl)}
         WHERE recipeID = ${mysql.escape(id)}`,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.json({
                results,
            });
        }
    );
});


module.exports  = router;