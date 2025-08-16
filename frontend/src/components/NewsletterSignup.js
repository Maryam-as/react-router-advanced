import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  // useFetcher lets us interact with routes without causing a full navigation.
  // Here, we're using it to submit the newsletter signup form in the background
  // without leaving or reloading the current page.
  const fetcher = useFetcher();
  // Destructure `data` and `state` from the fetcher object.
  // `data` holds the response from the action after form submission,
  // and `state` indicates the current state of the fetcher (e.g., "idle", "submitting").
  const { data, state } = fetcher;

  // useEffect runs whenever `data` or `state` changes.
  // Here, we check if the fetcher is idle and if there's a message in `data`.
  // If so, we show an alert to notify the user about the result of the form submission.
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
