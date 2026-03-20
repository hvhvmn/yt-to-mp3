import { spawn } from "child_process";

export const createYt = (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ message: "URL required" });

  res.setHeader("Content-Disposition", 'attachment; filename="audio.mp3"');
  res.setHeader("Content-Type", "audio/mpeg");

  const process = spawn("yt-dlp", [
    "-x",
    "--audio-format", "mp3",
    "-o", "-",
    url
  ]);

  process.stdout.pipe(res);

  process.stdout.on("end", () => {
    res.end();
  });

  process.stderr.on("data", (data) => {
    console.log(data.toString());
  });

  process.on("error", (err) => {
    console.log(err);
    res.status(500).end("Error");
  });

  req.on("close", () => {
    process.kill("SIGINT");
  });
};