# JumpCloud UI Engineer Assignment

## Instructions
Using the code already in this repository, please create the front end for a simple "ToDo" application. The app should support the ability to view and edit/complete existing todos, add new todos, and delete todos. A simple API has been created at `http://localhost:3004/api/todos` that will function as the back end. The solution should demonstrate your ability to:
- Organize front end code
- Inteact with an existing API
- Use a front end framework (such as _Vue_ or _Backbone_)
- Style your work (preferably with a CSS preprocessor)
- Create scalable and secure code

## Running the server
To run the server, make sure you have `node` and `npm` installed on your machine. Then do the following:

1. Pull down all the node dependencies:
  ```
  npm install
  ```

2. Run the dev and node server:
  ```
  npm start
  ```

3. Browser will automatically direct you!

## Notes from Ryan
Thanks again for letting me take a run at this. I apologize that it took me a couple days longer than I thought it would. It's one of those things that I'm still _not quite_ finished with yet (but I can pixel-push forever).

I shot for scalability in terms of framework tools largely because these tools are some newer additions to our stack (redux sagas, styled components) that I haven't quite gotten a chance to be as comfortable as I'd like to be yet with them. Redux in general was probably overkill for an app of this size given the frontloaded setup time that goes along with it.

I also wanted to balance my time toward producing a clean product aimed at modern desktop browsers, first and foremost, so there were a few sacrifices that I made along the way. Here are some of the things I would have done differently givin more (infinite?) time and would the project have been aimed for production.

1. Obscured APIs in .env files and set up API auth. I don't want nobody getting at my todo list, after all.

2. Rolled up a little Postgres DB to persist data in the event (eventuality?) that the server restarts. Another option would have been localstorage or something similar.

3. Added validation checks to the frontend and to the DB. This is nagging me a little actually, so it may be something I do after I send this in to you all.

4. Put mobile- and tablet-specific styling in for fonts and layout, in addition to swipe events. Styling isn't horrible on smaller screens, but I'm picky.

5. Resized background images. Most of them are waaaay too big. I also have a few in the repo that I've been switching around, and I'd remove the extras.

5. Added error handling. Everything's set up, just didn't quite get to it.

6. Refactored some of those React components into different files. A couple of those were getting a little too big for comfort. Probably would have split out styles into separate files as well.


All in all though, it's been a while since I've done a ToDoMVC sort of task and it was fun to get back to basics! Plus I have a sort of compulsive relationship with pixel-pushing, so it was fun to play around with that for a bit too.

Thanks again and I hope you all enjoy it!

**JumpCloud Confidential, please do not distribute this assignment in any form.**
