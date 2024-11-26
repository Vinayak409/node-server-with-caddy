import express, { Express, Request, Response } from "express";

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to the server!" });
});

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "healthy" });
});

// Start server
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
