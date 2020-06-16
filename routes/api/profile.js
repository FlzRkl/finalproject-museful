const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
// const User = require('../../models/User');

//@route  GET api/profile/me
//@desc   get current user profile
//@access Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    });
    if (!profile) {
      return res.status(404).json({
        msg: 'There is no profile for this user',
      });
    }

    //if the profile exist populate user [name , avatar]
    res.json(profile.populate('user', ['name', 'avatar']));
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route  Post api/profile
//@desc   Create or update user profile
//@access Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      company,
      location,
      website,
      bio,
      skills,
      status,
      githubusername,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;

    //Create Profile fields and Profile object
  }
);

module.exports = router;
