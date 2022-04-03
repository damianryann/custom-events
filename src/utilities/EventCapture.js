import isClient from "@bagofholding/is-client";

/**
 * 
 * @param {string} eventName - Name of the Event to track.
 * @param {object} props - Prop data to be passed to event for analytic purposes.
 * @returns 
 * 
 * Use the below code to test events in browser console. 
 * 
 * document.addEventListener({eventName}, function(event) { 
 *   console.log(event);
 * });
 */

export function EventCapture(eventName, props) {
  if (isClient()) {
    const showProps = typeof props !== "undefined" ? true : false;

    console.log(`Firing custom event: ${eventName}`);

    if (showProps) {
      try {
        console.table(props);
      } catch (error) {
        console.warn("Couldn't display table due to circularity."); //eslint-disable-line
      }
    }

    let event = new CustomEvent(eventName, {
      detail: props,
      bubbles: true,
      cancelable: true,
      composed: false,
    });
    document.dispatchEvent(event);
  }

  return;
}
