export default ({ env }) => ({
    'users-permission': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
});
