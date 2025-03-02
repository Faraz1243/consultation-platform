from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/calendar"]
SERVICE_ACCOUNT_FILE = r"D:\api key of google meet\key.json"

credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE,
    scopes=SCOPES
)

service = build("calendar", "v3", credentials=credentials)

# Create a calendar event with a Google Meet link
event_body = {
    "summary": "Online Consultation",
    "start": {
        "dateTime": "2025-03-15T10:00:00",
        "timeZone": "Asia/Karachi",
    },
    "end": {
        "dateTime": "2025-03-15T11:00:00",
        "timeZone": "Asia/Karachi",
    },
    "conferenceData": {
        "createRequest": {
            "requestId": "sdshosodusodusodusousoudsd8sdosso9s",  
            "conferenceSolutionKey": {"type": "hangoutsMeet"}
        }
    },
}

created_event = service.events().insert(
    calendarId="primary",
    body=event_body,
    conferenceDataVersion=1
).execute()

meet_link = created_event.get("hangoutLink")
print("Google Meet link:", meet_link)
