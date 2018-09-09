/**
 * GET /
 * Integrate page.
 */
exports.index = (req, res) => {
    res.render('integrate', {
      title: 'Integrate'
    });
  };
  