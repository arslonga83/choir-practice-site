# Choir Practice Site

A static landing page to contain all practice and scheduling resources for the Lake Grove Sanctuary Choir. For years we have been using Dropbox to share rehearsal recordings, practice tracks, and up-to-date rehearsal schedules, but it has never been a totally smooth process. Members would get confused about whether they needed to sign up for their own dropbox account, or when some members did share the files directly they often wouldn't catch updated folder changes. Once we started sending out read-only links, they were frequently lost and we had to resend every week. 

This led to the idea for the current project. I'm still relying on dropbox for file-storage, but serving everything up on a static page so they will only need to bookmark one web address. The page displays the next 10 upcoming important dates and offers a link to the full schedule. Recordings are organized by date, and can be a mix of mp3 files served up from dropbox or embedded youtube links, depenending on what recording our director picks. We also include the direct links to the full dropbox folder in case more techy members want to download everything for themselves. 

The new member page includes much of the info from the info packet we have handed out in the past, along with photos of people to know. 

I built the front-end using Vite and Bootstrap and a backend with ExpressJS. The data files are taken from a google spreadsheet so it is easy for our director to choose new recordings or update the schedule as needed. To avoid overusing the Google API I made an admin dashboard so I can go in and pull updated data files as needed, but we won't ping it every time a member logs in. 

We will be testing this out for our 2023-2024 season and making note of what works and what could be improved. I'm hopeful this could be a a good template for other choirs as I know there is a need for something like this.

# Updating the recordings and schedule data
The admin portal can be accessed from the main site by adding '/admin'. After logging in you can follow the link to update the google spreadsheet (assuming your are logged in and have editing privilages.) 

When creating new dropbox links, be sure to set the permissions to viewer, and then change the 'dl=0' at the end of the link to 'raw=1'. This lets the browser directly pull in the source audio rather than redirecting the client to the dropbox site. 

