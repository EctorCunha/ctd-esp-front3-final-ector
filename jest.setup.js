import 'whatwg-fetch'
import '@testing-library/jest-dom/extend-expect'
import {server} from './src/test/server'

const testURL = process.env.NEXT_PUBLIC_MARVEL_API_URL
const testPrivateKey = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY
const testPublicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY

beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())