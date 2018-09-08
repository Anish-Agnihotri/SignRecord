/**
 * GET /
 * Explorer page.
 */
exports.index = (req, res) => {
    res.render('explorer', {
      title: 'Explorer'
    });
  };
  