# Production secrets for the seds Worker, from the SEDS vault in Maurice's personal 1Password.
# Upload once with: cf deploy --prebuilt --secrets-file <(op inject -i .env.tpl)
CONTENTFUL_SPACE_ID=op://SEDS/CONTENTFUL_SPACE_ID/credential
CONTENTFUL_ACCESS_TOKEN=op://SEDS/CONTENTFUL_ACCESS_TOKEN/credential
MANDRILL_API_KEY=op://SEDS/MANDRILL_API_KEY/credential
RECAPTCHA_SECRET_KEY=op://SEDS/RECAPTCHA_SECRET_KEY/credential
