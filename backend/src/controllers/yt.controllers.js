import { exec } from "child_process";
import path from "path";
import fs from "fs";

export const createYt = (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL required");

  // unique file name (important)
  const fileName = `audio-${Date.now()}.mp3`;
  const filePath = path.join("/tmp", fileName); // ⚠️ Render ke liye best

  exec(
    `yt-dlp -x --audio-format mp3 --no-playlist -o "${filePath}" "${url}"`,
    (err, stdout, stderr) => {
      if (err) {
        console.log("ERROR:", err);
        console.log(stderr);
        return res.status(500).send("Download failed");
      }

      // ✅ file complete hone ke baad hi send
      res.download(filePath, fileName, (err) => {
        if (err) console.log(err);

        // cleanup
        fs.unlink(filePath, () => {});
      });
    }
  );
};