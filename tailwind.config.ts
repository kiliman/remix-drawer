/** @type {import('tailwindcss').Config} */
import tailwindForms from '@tailwindcss/forms'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [tailwindForms],
}
