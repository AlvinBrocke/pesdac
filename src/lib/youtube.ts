const CHANNEL_ID = "UCiY1R5aOKZDTd1Xnwt5eQng";
// Uploads playlist = channel ID with UC → UU
const UPLOADS_PLAYLIST_ID = "UU" + CHANNEL_ID.slice(2);

export type YouTubeVideo = {
  videoId: string;
  title: string;
  date: string;
  thumbnail: string;
};

export async function getLatestVideos(count = 4): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return [];

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${count}&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) return [];

  const data = await res.json();

  return (data.items ?? []).map(
    (item: { snippet: { title: string; publishedAt: string; resourceId: { videoId: string }; thumbnails: { maxres?: { url: string }; high?: { url: string }; medium?: { url: string } } } }, i: number) => {
      const s = item.snippet;
      const videoId = s.resourceId.videoId;
      const thumb =
        s.thumbnails?.maxres?.url ??
        s.thumbnails?.high?.url ??
        s.thumbnails?.medium?.url ??
        `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      return {
        videoId,
        title: s.title,
        date: new Date(s.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        thumbnail: thumb,
      };
    }
  );
}
