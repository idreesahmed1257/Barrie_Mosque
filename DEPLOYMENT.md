# Deployment Guide

## Overview

- **Frontend & Backend:** Both are hosted on [Vercel](https://vercel.com) under the **idreesahmef1257** account.
- **Database:** MongoDB Atlas on the **idreesahmef1257** account.
- **DNS:** Managed at [HostGator](https://www.hostgator.com).

## How to Deploy

1. Push your code to the connected Git repository (e.g. `main` branch).
2. Vercel will automatically build and deploy both the Frontend and Backend.

No manual deploy step is required—push to trigger a new deployment.

## Notes

- Ensure environment variables (e.g. in Vercel project settings and/or MongoDB Atlas) are set correctly for each environment.
- Do not commit `.env` or other secret files; use Vercel’s Environment Variables and MongoDB Atlas access controls instead.
