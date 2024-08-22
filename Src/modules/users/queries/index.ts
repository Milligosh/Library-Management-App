export const UserQueries={
    createUser:`INSERT INTO users(id,firstName,lastName,userName,email,otp,password)VALUES($1,$2,$3,$4,$5,$6,$7)RETURNING id,firstName,lastName,userName,email,createdAt,updatedAt`,
    checkEmailAvailability:`SELECT * FROM users WHERE email=$1`,
    checkUsernameAvailability:`SELECT * FROM users WHERE userName=$1`,
    verifyOTP: `SELECT otp FROM users WHERE email =$1`,
}