const superagent = require("superagent");
const { User, Shop } = require("../db-dal/models/index.js");

const errorResponseBuilder = (res, statusCode, message) => {
  if (statusCode > 0) res.status(statusCode);
  return res.json({
    error: true,
    message: customMessage ?? err.message,
  });
};

exports.inviteUser = async (req, res) => {
  let invitationBody = req.body;
  let shopId = req.params.shopId;
  let authUrl = "https://url.to.auth.system.com/invitation";

  const invitationResponse = await superagent
    .post(authUrl)
    .send(invitationBody)
    .catchError((err) => errorResponseBuilder(res, err.status));

  if (invitationResponse) {
    try {
      if (err) return errorResponseBuilder(res, err.statusCode);

      const isRecordCreated = invitationResponse.status === 201;
      const isInvitedAlready = invitationResponse.status === 200;

      if (isRecordCreated) {
        const createdUser = await User.findOneAndUpdate(
          {
            authId: invitationResponse.body.authId,
          },
          {
            authId: invitationResponse.body.authId,
            email: invitationBody.email,
          },
          {
            upsert: true, // ! Is this the intended behaviour?
            // Modified from "new" to "returnNewDocument", which I imagine is the intended behaviour, returning the most up-to-date state of the record once has been updated. In a real-case scenario I would have ask for clarification to confirm that this is the desired behaviour
            returnNewDocument: true,
          }
        );

        if (createdUser) {
          const shop = await Shop.findById(shopId).catchError((err) =>
            errorResponseBuilder(err)
          );
          if (err || !shop) {
            return errorResponseBuilder(
              res,
              500,
              err.message || "No shop found"
            );
          }

          const isInvitationAddedToTheShop = shop.invitations.includes(
            invitationResponse.body.invitationId
          );
          // Add the user to the array of invitations of this shop if is not there
          if (!isInvitationAddedToTheShop)
            shop.invitations.push(invitationResponse.body.invitationId);

          // Add the user to the array of users of this shop if is not there
          const isUserAddedToTheShop = shop.users.includes(createdUser._id);
          if (!isUserAddedToTheShop) shop.users.push(createdUser);

          // Save the resulting item in the db
          shop.save();
        }
      } else if (isInvitedAlready) {
        return errorResponseBuilder(
          res,
          400,
          "User already invited to this shop"
        );
      }

      return res.json(invitationResponse);
    } catch (err) {
      console.error(err);
      return res.statusCode(500).json({
        error: true,
        message: "Server Error: " + err.message,
      });
    }
  }
};

//   try {
//     const isRecordCreated = invitationResponse.status === 201;
//     const isInvitedAlready = invitationResponse.status === 200;
//     if (isRecordCreated) {
//       const createdUser = await User.findOneAndUpdate({
//         authId: invitationResponse.body.authId,
//       },
//       {
//         authId: invitationResponse.body.authId,
//         email: invitationBody.email,
//       },
//       {
//         upsert: true, // ! Is this the intended behaviour?
//         // Modified from "new" to "returnNewDocument", which I imagine is the intended behaviour, returning the most up-to-date state of the record once has been updated. In a real-case scenario I would have ask for clarification to confirm that this is the desired behaviour
//         returnNewDocument: true,
//       }
//     );
//     }

// if (createdUser) {
//     Shop.findById(shopId).exec((err, shop) => {
//     if (err || !shop) {
//       return res.status(500).send(err || { message: "No shop found" });
//     }

//     const isNotAdded = !shop.invitations.includes(
//       invitationResponse.body.invitationId
//     );
//     if (isNotAdded) {
//       shop.invitations.push(invitationResponse.body.invitationId);
//     }
//     if (!shop.users.includes(createdUser._id)) {
//       shop.users.push(createdUser);
//     }
//     shop.save();
// });}

// } else if (isInvitedAlready) {
//     return res.status(400).json({
//         error: true,
//         message: "User already invited to this shop",
//     });
// }
