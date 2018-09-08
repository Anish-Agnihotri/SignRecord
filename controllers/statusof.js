/**
 * GET /
 * Status page.
 */
exports.index = (req, res) => {
    res.render('statusof', {
      title: 'Status'
    });
  };
  