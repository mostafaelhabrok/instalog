# Event Log App

This is a small app that provides logging of events that happen in some system.
App used stack:
* Next.js.
* TailwindCss.
* Daisy UI.
* Prisma.
* PostgreSql.
* SWR.

All written in TypeScript.

## Getting Started

To get started, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/mostafaelhabrok/instalog.git
```

2. **Install dependencies:**

```
cd instalog
```

```
npm install
```

3. **Add environmet variables:**
create .env.local file in the project root then add the following link for database connection:

```
DATABASE_URL="postgres://[POSTGRES_USER]:[POSTGRES_PASSWORD]@[POSTGRES_HOST]:[PORT]/[POSTGRES_DATABASE]?sslmode=require"
```

4. **Migrate to the database:**

```
npx prisma migrate dev
```

5. **Start the service:**

```
npm run dev
```

The service will start running at [localhost](http://localhost:3000).


## Setting Up with Docker

To get started, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/mostafaelhabrok/instalog.git
```

2. **Build the Docker Image:**

```
docker build -t instalog .
```

3. **Run the Docker Container:**

```
docker run -p 3000:3000 -e DATABASE_URL=postgres://[POSTGRES_USER]:[POSTGRES_PASSWORD]@[POSTGRES_HOST]:[PORT]/[POSTGRES_DATABASE]?sslmode=require instalog
```

The service will start running at [localhost](http://localhost:3000).

## API Endpoint

### Filter Events
You can filter events based on specific criteria by sending a GET request to the /api/events endpoint with the following query parameters:

filter: Search for events by actor, target or action.

#### Example usage:
GET /api/events?filter=mostafa

This will return a filtered list of events matching the specified criteria.

### Add Event
You can add new event by sending a POST request to /api/events endpoint with the event object to add in the request body.

#### Example usage:
POST /api/events

body: {
            actor_id: '',
            actor_name: '',
            actor_email: '',
            group: '',
            action: {
                id: '',
                name: ''
            },
            target_id: '',
            target_name: '',
            target_email: '',
            location: '',
            occurred_at: '',
            metadata: {
                redirect: '',
                description: '',
                x_request_id: ''
            }
        }

This will add new event with the specified values in body.

### Edit Event
You can edit existing event by sending a PUT request to /api/events/{id} endpoint with the event object to edit in the request body.

#### Example usage:
PUT /api/events/{id}

body: {
            actor_id: '',
            actor_name: '',
            actor_email: '',
            group: '',
            action: {
                id: '',
                name: ''
            },
            target_id: '',
            target_name: '',
            target_email: '',
            location: '',
            occurred_at: '',
            metadata: {
                redirect: '',
                description: '',
                x_request_id: ''
            }
        }

This will edit the event with the specified values in body.

### Delete Event
You can delete event by sending a DELETE request to /api/events/{id} endpoint.

#### Example usage:
DELETE /api/events/{id}

This will delete the event with the specified id.


## App Features:

### Sorting Events
You can sort events ascending or descending based on actor, action or date.

### Filter Events
You can filter events by searching in actor, target or action for some word.

### Load More
The app get events five by five and you cand click load more to get more events.

### Event Details
You can show all event details in a collapse card.

### Export to CSV
You can export events with their data to csv file.

### Toggle Live
You can press live button to activate live view of events in real time.

### Add Event
You can add new event using event form whic will validate your data first.

### Edit Event
You can edit event after adding with the same form of adding new event.

### Delete Event 
You can delete event after confirmation message.

### Success or Error Alerts
App shows success alert on successful add, edit or delete event and shows error alert on failure with error message.

### Dark Mode
App supports dark mode with one click on button on the Navigation Bar.

### Responsive
App is responsive on mobile or desktop devices.

### Updated Data
App updates events table after each successful add, edit or delete request.


## InstaLog npm library
New npm library is published and used in the app as a dependency for listing events, adding events, editing events, deleting events.

The library is published on: [instalog npm](https://www.npmjs.com/package/instalog)