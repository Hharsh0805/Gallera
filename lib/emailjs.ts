import { init } from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = "harshsehgal15";
export const EMAILJS_TEMPLATE_ID = "real_state_app"; // Replace with your actual template ID
export const EMAILJS_PUBLIC_KEY = "LdoFFDQ0oEkKZKia-";

export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};

