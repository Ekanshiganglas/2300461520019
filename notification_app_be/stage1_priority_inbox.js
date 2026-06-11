const notifications = [
  {
    id: "d146095a-0d86-4a34-9e69-3900a14576bc",
    type: "Result",
    message: "mid-sem",
    timestamp: "2026-04-22 17:51:30",
    unread: true
  },
  {
    id: "b283218f-ea5a-4b7c-93a9-1f2f240d64b0",
    type: "Placement",
    message: "CSX Corporation hiring",
    timestamp: "2026-04-22 17:51:18",
    unread: true
  },
  {
    id: "81589ada-0ad3-4f77-9554-f52fb558e09d",
    type: "Event",
    message: "farewell",
    timestamp: "2026-04-22 17:51:06",
    unread: true
  },
  {
    id: "0005513a-142b-4bbc-8678-eefec65e1ede",
    type: "Result",
    message: "mid-sem",
    timestamp: "2026-04-22 17:50:54",
    unread: true
  },
  {
    id: "ea836726-c25e-4f21-a72f-544a6af8a37f",
    type: "Result",
    message: "project-review",
    timestamp: "2026-04-22 17:50:42",
    unread: true
  },
  {
    id: "003cb427-8fc6-47f7-bb00-be228f6b0d2c",
    type: "Result",
    message: "external",
    timestamp: "2026-04-22 17:50:30",
    unread: true
  },
  {
    id: "e5c4ff20-31bf-4d40-8f02-72fda59e8918",
    type: "Result",
    message: "project-review",
    timestamp: "2026-04-22 17:50:18",
    unread: true
  },
  {
    id: "1cfce5ee-ad37-4894-8946-d707627176a5",
    type: "Event",
    message: "tech-fest",
    timestamp: "2026-04-22 17:50:06",
    unread: true
  },
  {
    id: "cf2885a6-45ac-4ba0-b548-6e9e9d4c52c8",
    type: "Result",
    message: "project-review",
    timestamp: "2026-04-22 17:49:54",
    unread: true
  },
  {
    id: "8a7412bd-6065-4d09-8501-a37f11cc848b",
    type: "Placement",
    message: "Advanced Micro Devices Inc. hiring",
    timestamp: "2026-04-22 17:49:42",
    unread: true
  }
];

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

function getScore(notification) {
  return (
    weights[notification.type] * 1000000000000 +
    new Date(notification.timestamp).getTime()
  );
}

const top10 = notifications
  .filter(n => n.unread)
  .sort((a, b) => getScore(b) - getScore(a))
  .slice(0, 10);

console.log("TOP 10 PRIORITY NOTIFICATIONS\n");

top10.forEach((notification, index) => {
  console.log(
    `${index + 1}. ${notification.type} | ${notification.message} | ${notification.timestamp}`
  );
});