async function checkUser(userPassword: string) {
  const SECRET_CODE =
    process.env.NEXT_PUBLIC_DEVELOPMENT_SECRET_LOGIN ||
    process.env.PRODUCTION_ENV_SECRET_LOGIN;
  if (userPassword === SECRET_CODE) return true;
  else return false;
}

export default checkUser;
