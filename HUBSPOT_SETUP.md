# HubSpot Integration Setup Guide

## Integration Methods

Your website supports **two methods** for HubSpot integration:

### Method 1: Forms API (Basic - No Token Required)
Simple form submissions using HubSpot's Forms API v3.

### Method 2: Private Apps API (Advanced - Requires Token)
Direct contact creation with more features and better error handling.

---

## Quick Setup (Forms API)

### Required Environment Variables

Add these in the v0 **Vars** section:

#### 1. HUBSPOT_PORTAL_ID
Your HubSpot account identifier (Hub ID).

**How to find it:**
1. Log into HubSpot
2. Click **Settings** (gear icon)
3. Go to **Account Setup → Account Defaults**
4. Copy your **Hub ID** (8-digit number like `12345678`)

#### 2. HUBSPOT_FORM_ID
The form where submissions will be sent.

**How to find it:**
1. In HubSpot: **Marketing → Lead Capture → Forms**
2. Create or select a form
3. Copy the Form ID from the URL or settings
4. Format: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`

#### 3. NEXT_PUBLIC_HUBSPOT_MEETING_LINK
Your HubSpot meetings scheduler link.

**How to find it:**
1. In HubSpot: **Sales → Meetings**
2. Create or select a meeting type
3. Click **Get meeting link**
4. Copy the full URL: `https://meetings.hubspot.com/yourname/consultation`

---

## Advanced Setup (Private Apps API)

For better integration with direct contact creation and more features:

### 1. Create a Private App

1. In HubSpot: **Settings → Integrations → Private Apps**
2. Click **Create a private app**
3. Name it: `PS Premier Construction Website`
4. In the **Scopes** tab, enable:
   - `crm.objects.contacts.write`
   - `crm.objects.contacts.read`
5. Click **Create app**
6. Copy the **Access Token**

### 2. Add Access Token to v0

In the v0 **Vars** section, add:
- Name: `HUBSPOT_ACCESS_TOKEN`
- Value: Your private app access token

### 3. Test Your Integration

Visit: `https://yoursite.com/api/hubspot/verify`

Expected response:
```json
{
  "status": "success",
  "method": "private_app",
  "portalId": 12345678,
  "accountType": "PAID"
}
```

---

## Testing Your Setup

### Test Forms API
```bash
curl --request GET \
  --url https://yoursite.com/api/hubspot/verify
```

### Test Private App Token
```bash
curl --request GET \
  --url https://api.hubapi.com/integrations/v1/me \
  --header 'Authorization: Bearer YOUR_TOKEN_HERE'
```

### Test Form Submission
1. Go to your website
2. Fill out the contact form
3. Submit
4. Check HubSpot for the new contact

---

## Form Field Mapping

Contact forms map to these HubSpot properties:

| Website Field | HubSpot Property | Type |
|--------------|------------------|------|
| First Name | `firstname` | Text |
| Last Name | `lastname` | Text |
| Email | `email` | Email |
| Phone | `phone` | Phone |
| Project Type | `project_type` | Text |
| Message | `message` | Text |
| Source | `hs_lead_source` | Text |

---

## Integration Points

Your website sends data to HubSpot from:
- Main contact form (`/app/components/contact-form.tsx`)
- Chat widget (`/components/chat-widget.tsx`)
- Meeting scheduler button

---

## Troubleshooting

### Forms not submitting
- Verify `HUBSPOT_PORTAL_ID` and `HUBSPOT_FORM_ID` are correct
- Check that form exists in HubSpot
- Ensure form fields match HubSpot property names

### Invalid token error
- Verify token is copied completely
- Check token hasn't expired
- Ensure required scopes are enabled

### Meeting link not working
- Verify `NEXT_PUBLIC_HUBSPOT_MEETING_LINK` is complete URL
- Check meeting type is published
- Ensure calendar is connected in HubSpot

### Verify endpoint says "not_configured"
- Check all environment variables are added in v0 Vars
- Restart your preview after adding variables

---

## Which Method Should I Use?

**Use Forms API (Method 1) if:**
- You want simple setup with no token management
- Basic form submissions are sufficient
- You're just getting started

**Use Private Apps API (Method 2) if:**
- You want better error handling
- You need direct contact creation
- You want to add custom integrations later
- You need more control over contact data

Both methods work great! The website automatically uses the best available method based on your configuration.
