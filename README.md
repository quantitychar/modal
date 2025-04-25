React Modal Demo

A minimal React project demonstrating a modal built with:

Vite (dev server + build)

styled-components (CSS-in-JS)

Compound Components Pattern (one import, clear API)

Quick Start

Install dependencies:

npm install

Run the development server:

npm run dev

Open http://localhost:5173 in your browser.

Usage

Control modal visibility via state in your component:
Compound Components Pattern

The main Modal component exposes its parts as static properties:

Modal.Header
Modal.Body
Modal.Footer
Modal.Close

This keeps imports simple (import Modal from './components/Modal') and the JSX clear.
