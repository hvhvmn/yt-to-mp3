import { spawn } from "child_process";

export const createYt = (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ message: "URL required" });

  res.setHeader("Content-Disposition", 'attachment; filename="audio.mp3"');
  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Transfer-Encoding", "chunked");

  const process = spawn("yt-dlp", [
    "-f", "bestaudio",
    "--no-playlist",
    "-o", "-",
    url
  ]);

  process.stdout.pipe(res);

  process.stderr.on("data", (data) => {
    console.log(data.toString()); // progress logs
  });

  process.on("close", () => {
    console.log("Download finished");
    res.end(); // 👈 spinner band karega
  });

  process.on("error", (err) => {
    console.log(err);
    res.status(500).end("Error");
  });

  req.on("close", () => {
    process.kill("SIGINT");
  });
};
// export const downloadFile = (req, res) => {
//   const { name } = req.params;
//   const filePath = path.resolve("downloads", name);

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ message: "File already downloaded or not found" });
//   }

//   res.download(filePath, name, (err) => {
//     if (err) console.log(err);

//     // 👇 download ke baad delete → dubara download nahi hoga
//     fs.unlink(filePath, (err) => {
//       if (err) console.log(err);
//     });
//   });
// };