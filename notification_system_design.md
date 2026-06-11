# Stage 1

## Approach

The goal is to display the Top 10 unread notifications based on priority.

Priority is determined using:

* Notification type (Placement > Result > Event)
* Recency (newer notifications are shown first)

Steps:

1. Filter unread notifications.
2. Assign weights to each notification type.
3. Calculate priority score using weight and timestamp.
4. Sort notifications by priority.
5. Display the Top 10 notifications.

## Efficient Handling

If new notifications keep arriving, a Min Heap of size 10 can be used to efficiently maintain the Top 10 notifications without sorting the entire list every time.

## Complexity

* Current approach: O(n log n)
* Heap approach: O(log 10)

The solution successfully prioritizes notifications based on importance and recency.
