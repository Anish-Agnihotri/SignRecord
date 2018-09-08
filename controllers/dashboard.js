/**
 * GET /
 * Dashboard page.
 */
exports.index = (req, res) => {
    res.render('dashboard', {
      title: 'Dashboard'
    });
  };
  