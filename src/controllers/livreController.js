const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM livres", (err, livre) => {
      if (err) {
        res.json(err);
      }
      res.render("livres", {
        data: livre
      });
    });
  });
};