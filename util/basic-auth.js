const basicAuth = (base64Credentials) => {
  if (!base64Credentials) throw "404";
  base64Credentials = base64Credentials.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");
  if (
    !(
      (username === "Ithing_FE" || username === "Ithing_EXT") &&
      password === "!PerfecT!"
    )
  )
    throw "404";
};

module.exports = basicAuth;
