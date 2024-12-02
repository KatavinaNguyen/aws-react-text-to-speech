# Accessible Text-to-Speech Converter using AWS Polly

An inclusive and user-friendly web application that uses AWS Polly to convert written text into high-quality speech. Designed with accessibility in mind, this tool empowers users by making text-based content available in audio format, enabling better engagement for individuals with visual impairments, reading challenges, or anyone who prefers auditory learning.

## Features 
* Text-to-Speech Conversion
* High-Quality Audio Playback
* Visual Progress Bar on Audio Playback
* Audio File Download for Offline Listening

## Tech Stack 
* **Frontend:** React.js
* **Backend:** AWS Polly

## Why Accessibility Matters
* **Visual impairments** don’t limit access to text-based content.
* **Reading challenges** such as dyslexia or language barriers are supported.
* **Convenient alternatives** to reading are provided for multitasking or learning preferences.

By enabling text-to-speech conversion, we can all aim to make technology more inclusive for everyone.

## Prerequisites 
Before you start, ensure you have the following:
* An AWS Account
* An AWS IAM user with an access key and secret key
* The AmazonPollyFullAccess policy attached to your IAM user
> [!NOTE]
> AWS offers **5 million** characters per month for AWS Polly usage under the **free tier** during the first **12 months**.

## Setup
1. Clone the Repository
   ```
   https://github.com/KatavinaNguyen/aws-react-text-to-speech.git
   ```
2. Install Dependencies
   ```
   npm install
   ```
3. Create a .env file in the root directory
   ```
   REACT_APP_CLIENTID=<your_aws_access_key_id>
   REACT_APP_SECRETKEY=<your_aws_secret_access_key>
   REACT_APP_REGION=<your_aws_region>
   ```
4. Run
   ```
   npm start
   ```
5. Open in your Browser
   ```
   http://localhost:3000
   ```

## How to Use 
1. Type your text into the textbox provided.
2. Click the **"Convert to Speech"** button to generate the audio using AWS Polly.
3. Press **Play** to listen, or click **Download** to save the audio for later.
