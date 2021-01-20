module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "quentin.roux@hotmail.fr",
      defaultReplyTo: "quentin.roux@hotmail.fr",
    },
  },
});