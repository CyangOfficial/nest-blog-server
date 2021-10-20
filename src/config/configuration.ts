export const configuration = () => ({
	port: Number(process.env.PORT),
	jwtSecretKey: process.env.JWT_SECRET_KEY,
	jwtExpiresTime: process.env.JWT_EXPIRES_TIME
})