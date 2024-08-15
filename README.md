# QuizMate

**App Name:** QuizMate  
**Domain:** [https://quiz-mate.vercel.app](https://quiz-mate.vercel.app)  
**Description:** QuizMate is an AI-powered app that allows users to solve math problems by either typing them in or uploading images of the problems. The app uses OpenAI’s API to process and answer math questions.

## Project Structure

### 1. `/dashboard/page.jsx`

**Description:** Main page for the dashboard where users interact with the app. Users can either upload images or type questions to get answers.

**Components Used:**
- `Category`: Component for selecting categories.
- `Dropzone`: Component for image upload functionality.
- `TextField`: Component for typing questions directly.
- `Loader`: Component for showing loading states.
- `Textzone`: Component for displaying and editing typed text.
- `AnswerCard`: Component for displaying AI-generated answers.
- `Button`: Component for clickable actions.

**Key Functionality:**
- **State Management:** Manages states for category, typed text, image, loading status, and AI response.
- **Image Handling:** Extracts text from uploaded images using `extractText`.
- **Text Handling:** Processes typed questions and gets answers from OpenAI’s API.
- **Loading State:** Shows a loading indicator while processing requests.

### 2. `/signup/page.jsx`

**Description:** Signup page for new users to create an account.

**Components Used:**
- `Loader`: Component for showing loading states.

**Key Functionality:**
- **Form Handling:** Handles form submission for user signup.
- **Validation:** Ensures password and confirm password fields match.
- **API Integration:** Sends signup data to `/api/signup` endpoint.
- **Redirection:** Redirects to the homepage upon successful signup.

### 3. `/page.jsx`

**Description:** Login page for existing users to sign in.

**Components Used:**
- `Loader`: Component for showing loading states.
- `withAuthRedirect`: A utility to handle redirection based on authentication status.

**Key Functionality:**
- **Form Handling:** Handles form submission for user login.
- **API Integration:** Uses NextAuth.js `signIn` method to authenticate users.
- **Loading State:** Shows a loading indicator while authentication is in progress.

### 4. `/openai.js`

**Description:** Utility file for interacting with OpenAI’s API.

**Key Functionality:**
- **API Request:** Sends a POST request to OpenAI’s API with the user’s question.
- **Error Handling:** Catches and logs errors during the API request.
- **Response Handling:** Processes and returns the response from OpenAI.

## Dependencies

### Dependencies

- **`bcrypt`**: For hashing passwords.
- **`mongoose`**: For MongoDB object modeling.
- **`next`**: Next.js framework.
- **`next-auth`**: Authentication library for Next.js.
- **`react`**: React library for building user interfaces.
- **`react-dom`**: React library for DOM rendering.
- **`react-dropzone`**: For drag-and-drop file uploads.
- **`react-icons`**: For using React icons.
- **`tesseract.js`**: For OCR (optical character recognition).

### Dev Dependencies

- **`postcss`**: For PostCSS processing.
- **`tailwindcss`**: For utility-first CSS framework.

## Scripts

- **`dev`**: Starts the Next.js development server.
- **`build`**: Builds the Next.js application for production.
- **`start`**: Starts the Next.js production server.
- **`lint`**: Runs linting for the project.

## Environment Variables

- **`NEXT_PUBLIC_API_KEY`**: API key for OpenAI.
