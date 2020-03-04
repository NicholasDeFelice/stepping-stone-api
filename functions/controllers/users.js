const admin = require("fireabse-admin");
const { userSchema } = require("./common/models");

async function addUser(data) {
  console.log({ body: data });
  let result = userSchema.validate(data, {
    stripUnknown: true,
    abortEarly: false
  });
  console.log(result);

  const db = admin.firestore();
  if (result.error) {
    return {
      error: result.error.details.map(item => item.message).join(", ") //joins errors
    };
  } else {
    let newClub = await db.collection("clubs").add(data);
    return "successful";
  }
}

module.exports.addUser = addUser;
