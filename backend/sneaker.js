"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");


class Sneaker {
  /** Create a sneaker (from data), update db, return new sneaker data.
   *
   * data should be { title, salary, equity, companyHandle }
   *
   * Returns { sneaker_id, title, brand, colorway, name, shoe, image_url }
   **/

  static async create(data) {
    const result = await db.query(
          `INSERT INTO sneakers (title,
                             brand,
                             colorway,
                             name,
                             shoe,
                             image_url)
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING id, title, brand, colorway, name, shoe, image_url`,
        [
          data.title,
          data.brand,
          data.colorway,
          data.name,
          data.shoe,
          data.image_url
        ]);
    let sneaker = result.rows[0];

    return sneaker;
  }

  /** Find all sneakers (optional filter on searchFilters).
   *
   *
   * Returns [{ id, title, brand, colorway, name, shoe, image_url }, ...]
   * */

  static async findAll({ brand, shoe, title } = {}) {
    let query = `SELECT s.id,
                        s.brand,
                        s.shoe,
                        s.title,
                 FROM sneakers s
                   LEFT JOIN users AS u ON s.title = s.title`;
    let whereExpressions = [];
    let queryValues = [];

    // For each possible search term, add to whereExpressions and
    // queryValues so we can generate the right SQL

    if (title !== undefined) {
      queryValues.push(`%${title}%`);
      whereExpressions.push(`title ILIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Finalize query and return results

    query += " ORDER BY title";
    const sneakersRes = await db.query(query, queryValues);
    return sneakersRes.rows;
  }

  /** Delete given shoe from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(id) {
    const result = await db.query(
          `DELETE
           FROM sneakers
           WHERE id = $1
           RETURNING id`, [id]);
    const sneaker = result.rows[0];

    if (!sneaker) throw new NotFoundError(`No sneaker found: ${title}`);
  }
}

module.exports = Sneaker;
