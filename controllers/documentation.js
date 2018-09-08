/**
 * GET /
 * Documentation page.
 */
exports.index = (req, res) => {
    res.render('documentation', {
      title: 'Documentation'
    });
  };
  