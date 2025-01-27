# AI-BLOGGY SaaS AI-Generated Blog for Creators Documentation - Working
[![Watch the video](https://github.com/Anish202020/Web-Development-Data/blob/main/Banner/Banner-1/Web%20Development/4.png)](https://www.youtube.com/watch?v=3Lk3NBXSrHA)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![ChatGPT](https://img.shields.io/badge/ChatGPT-412991?style=for-the-badge&logo=openai&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white)


## Overview
<img src="https://i.ibb.co/QfMqMr3/a.png" width=100px height=100px>
The SaaS AI-Generated Blog for Creators is a platform designed to help content creators generate blog content in various emotional tones. This documentation provides an overview of the platform's features, technologies, and usage instructions.


## AI-BLOGGY Architecture in Flow Diagram
<details>
  <summary>Click to See The DataFlow Diagram</summary>
  
  
  <img src='https://github.com/Anish202020/Web-Development-Data/blob/main/Dataflow/ai-bloggy-saas.png' border='0' alt='3' />
  
  The Above is the Dataflow Diagram of AI Bloggy
</details>

## Features
- **Emotion-Based Content Generation**: Generate blog posts in different emotional tones such as Sad, Happy, Angry, Neutral, and Professional.
- **User Authentication and Authorization**: Secure user login and access management.
- **Subscription Management**: Handle payments and subscriptions seamlessly.
## Emotional Tones
The platform supports the following emotional tones for blog content:

- Sad
- Happy
- Angry
- Neutral
- Professional
## Technologies Used
- **Next JS**: Frontend framework for building the user interface.
- **AuthO**: Manages user authentication and authorization.
- **MongoDB**: Database for storing user data and generated content.
- **Stripe**: Payment gateway for processing payments and managing subscriptions.
- **Chat GPT Open AI (gpt-3.5-turbo)**: AI model for generating blog content.
- **React Native**: For building mobile applications (if applicable).
## User Authentication and Authorization
AuthO is used to manage user authentication and authorization. It ensures that only registered users can access the platform and its features.

## Payment Processing
Stripe is integrated into the platform to handle payment processing and subscription management. Users can subscribe to different plans and manage their billing information through Stripe.

## Content Generation
Chat GPT Open AI (gpt-3.5-turbo) is utilized to generate blog content based on the specified emotional tone. Users can select the desired tone and input relevant information to create personalized blog posts.

## Target Audience
The primary target audience for this platform includes content creators who wish to generate blog posts with specific emotional tones to engage their audience effectively.

## Getting Started
1. **Sign Up**: Register for an account on the platform.
2. **Log In**: Use AuthO to log in securely.
3. **Select Emotional Tone**: Choose the desired emotional tone for your blog post.
4. **Generate Content**: Input relevant information and let the AI generate the blog content.
5. **Manage Subscription**: Use Stripe to handle your subscription and billing information.




## Team Members
Anish Kumar - CS028

Dalavai Hruday - CS049

Aditya Jyoti Sahu - CS017

---
First Install NPM Packages
```bash
npm i react-icons openai stripe react-toastify mongodb eslist
```


Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
