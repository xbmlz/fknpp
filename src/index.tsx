/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import 'uno.css'
import '@unocss/reset/tailwind.css'

import App from "./app";

import './userWorker';

render(() => <App />, document.getElementById("root") as HTMLElement);
