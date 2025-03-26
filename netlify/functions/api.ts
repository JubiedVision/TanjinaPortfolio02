import express, { type Request, Response, NextFunction } from "express";
import serverless from 'serverless-http';
// Adjust the path to import from the original server directory
import { registerRoutes } from "../../server/routes"; 

// Create the express app instance
const app = express();

// Apply essential middleware (copied from server/index.ts)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Optional: Add basic logging for Netlify function context
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Create an async function to setup routes and return the app
// This mirrors the structure in server/index.ts but avoids server.listen()
// and avoids Vite/static serving logic (Netlify handles static files).
const initializeApp = async () => {
  // Register API routes. We assume registerRoutes modifies the 'app' instance.
  await registerRoutes(app);

  // Add the error handler (adapted from server/index.ts)
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    // Log the error to Netlify Function logs
    console.error("API Error:", err); 
    
    res.status(status).json({ message });
    // Do not throw the error here; let the handler finish the response.
  });

  return app;
};

// Initialize the app asynchronously when the function loads
const initializedAppPromise = initializeApp();

// Export the handler function for Netlify
export const handler = async (event: any, context: any) => {
  // Ensure the app is initialized before handling requests
  const appInstance = await initializedAppPromise;
  // Create a serverless handler for the initialized app
  const serverlessHandler = serverless(appInstance);
  // Process the incoming event with the serverless handler
  return serverlessHandler(event, context);
};
