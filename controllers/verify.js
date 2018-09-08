/**
 * GET /
 * Verify page.
 */
exports.index = (req, res) => {
    res.render('verify', {
      title: 'Verify'
    });
  };
  