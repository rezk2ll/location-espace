const announcement = require("../model/Annonce");

/**
 * Creates an announcement
 * 
 * @param {Request} req 
 * @param {Response} res
 * 
 * @returns {Promise<Response>} 
 */
const create = async (req, res) => {
  try {
    const createdAnnouncement = await announcement.create({
      ...req.body,
      annoncementExpo: new Date(),
      annoncementOwner: req.user._id
    });

    await createdAnnouncement.save();
    return res.status(200).send({ msg: "the annonce added", createdAnnouncement });
  }
  catch(error) {
    return res.status(400).send({ msg: "can not add the annonce", error });
  }
}

/**
 * Updates an announcement
 * 
 * @param {Request} req
 * @param {Response} res
 *
 * @returns {Promise<Response>}
 */
const update = async (req, res) => {
  const { _id } = req.params;

  try {
    const updatedAnnouncement = await announcement.updateOne({ _id }, { ...req.body });

    return res.status(200).send({ msg: "the annonce updated", updatedAnnouncement });
  }
  catch(error) {
    return res.status(400).send({ msg: "can not update the annonce", error });
  }
}

/**
 * Lists all announcements
 * 
 * @param {Request} _
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const list = async (_, res) => {
  try {
    const announcements = await announcement.find();

    return res.status(200).send({ msg: "this is the list of annonce", announcements });
  }
  catch(error) {
    return res.status(400).send({ msg: "can not show the list", error });
  }
}

/**
 * Deletes an announcement
 * 
 * @param {Request} req
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const del = async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedAnnouncement = await announcement.deleteOne({ _id });

    return res.status(200).send({ msg: "the annonce deleted", deletedAnnouncement });
  }
  catch(error) {
    return res.status(400).send({ msg: "can not delete the annonce", error });
  }
}

module.exports = {
  create,
  update,
  del,
  list
}
