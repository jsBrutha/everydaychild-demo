# Email Setup for Contact Form

To enable the contact form email functionality, you need to create a `.env.local` file in the root directory with the following environment variables:

## Required Environment Variables

```bash
# Gmail account that will send the emails
EMAIL_USER=your-gmail-address@gmail.com

# Gmail App Password (NOT your regular Gmail password)
EMAIL_PASS=your-16-character-app-password
```

## How to Get Gmail App Password

1. Go to your Google Account settings (https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification** (this must be enabled first)
3. Scroll down to **App passwords**
4. Click **Generate new app password**
5. Select "Mail" as the app and follow the instructions
6. Use the generated 16-character password (with spaces) as your `EMAIL_PASS`

## Example .env.local file

```bash
EMAIL_USER=everychild@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

## Email Features

- Form submissions are sent to: **adefidipei@gmail.com**
- Emails include all form data in a nicely formatted HTML template
- Reply-to is set to the sender's email for easy responses
- Both HTML and plain text versions are sent
- Includes timestamp and source identification

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords, not your regular Gmail password
- The `.env.local` file is already included in `.gitignore`
